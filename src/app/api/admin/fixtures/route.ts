import { NextResponse } from 'next/server';
import { getFixtures } from '@/services/dbService';
import Fixture from '@/models/Fixture';
import { Match } from '@/app/fixtures/types';
import dbConnect from '@/lib/db';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category')?.toUpperCase() as 'U12' | 'U15';
    
    if (!category || !['U12', 'U15'].includes(category)) {
      return NextResponse.json({ error: 'Invalid category' }, { status: 400 });
    }

    const fixtures = await getFixtures(category);
    return NextResponse.json(fixtures);
    
  } catch (error) {
    console.error('Admin Fixtures API Error:', error);
    return NextResponse.json({ error: 'Failed to fetch fixtures' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { date, category, matches } = await request.json();
    
    await dbConnect();

    // Format matches to handle empty scores
    const formattedMatches = matches.map((match: Match) => ({
      ...match,
      score1: match.score1 === '' ? '-' : match.score1,
      score2: match.score2 === '' ? '-' : match.score2
    }));

    // Improved existing fixture handling
    const existingFixture = await Fixture.findOne({ date, category });
    
    if (existingFixture) {
      // Filter out duplicate matches
      const newMatches = formattedMatches.filter((newMatch: Match) => 
        !existingFixture.matches.some((existingMatch: Match) => 
          existingMatch.team1 === newMatch.team1 && 
          existingMatch.team2 === newMatch.team2 &&
          existingMatch.time === newMatch.time
        )
      );

      if (newMatches.length === 0) {
        return NextResponse.json(
          { error: 'All matches already exist in this fixture' },
          { status: 400 }
        );
      }

      existingFixture.matches.push(...newMatches);
      const savedFixture = await existingFixture.save();
      return NextResponse.json(savedFixture);
    }

    // If no fixture exists, create new one
    const newFixture = new Fixture({
      date,
      category,
      matches: formattedMatches
    });
    const savedFixture = await newFixture.save();
    return NextResponse.json(savedFixture);
    
  } catch (error) {
    console.error('Create Fixture Error:', error);
    return NextResponse.json(
      { error: 'Failed to create/update fixture' },
      { 
        status: 500,
        headers: {
          'X-Toast-Message': 'Failed to save fixture: ' + 
            (error instanceof Error ? error.message : 'Unknown error')
        }
      }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const { fixtureId, matchIndex, matchData } = await request.json();
    
    const fixture = await Fixture.findById(fixtureId);
    if (!fixture) {
      return NextResponse.json({ error: 'Fixture not found' }, { status: 404 });
    }

    // Validate matchIndex
    if (matchIndex < 0 || matchIndex >= fixture.matches.length) {
      return NextResponse.json({ error: 'Invalid match index' }, { status: 400 });
    }

    // Update specific match while preserving other fields
    fixture.matches[matchIndex] = {
      team1: fixture.matches[matchIndex].team1,  // Preserve team names
      team2: fixture.matches[matchIndex].team2,  // Preserve team names
      time: matchData.time,
      score1: matchData.score1 === '' ? '-' : matchData.score1,
      score2: matchData.score2 === '' ? '-' : matchData.score2
    };

    const updatedFixture = await fixture.save();
    return NextResponse.json(updatedFixture);
    
  } catch (error) {
    console.error('Update Match Error:', error);
    return NextResponse.json({ error: 'Failed to update match' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { fixtureId, matchIndex } = await request.json();
    
    // If matchIndex is provided, delete single match (existing functionality)
    if (matchIndex !== undefined) {
      const fixture = await Fixture.findById(fixtureId);
      if (!fixture) {
        return NextResponse.json({ error: 'Fixture not found' }, { status: 404 });
      }

      // Remove the specific match
      fixture.matches.splice(matchIndex, 1);

      // If no matches left, delete the entire fixture
      if (fixture.matches.length === 0) {
        await Fixture.findByIdAndDelete(fixtureId);
      } else {
        await fixture.save();
      }

      return NextResponse.json({ success: true });
    }
    
    // If no matchIndex, delete entire fixture
    const deletedFixture = await Fixture.findByIdAndDelete(fixtureId);
    if (!deletedFixture) {
      return NextResponse.json({ error: 'Fixture not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error('Delete Error:', error);
    return NextResponse.json({ error: 'Failed to delete' }, { status: 500 });
  }
} 