import { NextResponse } from 'next/server';
import League from '@/models/League';
import dbConnect from '@/lib/db';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category')?.toUpperCase() as 'U12' | 'U15';
    
    if (!category || !['U12', 'U15'].includes(category)) {
      return NextResponse.json({ error: 'Invalid category' }, { status: 400 });
    }

    await dbConnect();
    const teams = await League.find({ category }).sort({ totalPoints: -1 });
    return NextResponse.json(teams);
    
  } catch (error) {
    console.error('Admin League API Error:', error);
    return NextResponse.json({ error: 'Failed to fetch league data' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const teamData = await request.json();
    
    // Calculate goal difference and total points
    teamData.goalDifference = teamData.goalsFor - teamData.goalsAgainst;
    teamData.totalPoints = (teamData.won * 3) + teamData.drawn + teamData.bonusPoints;

    await dbConnect();
    const newTeam = new League(teamData);
    await newTeam.save();
    
    return NextResponse.json(newTeam);
    
  } catch (error) {
    console.error('Create Team Error:', error);
    return NextResponse.json({ error: 'Failed to create team' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const teamData = await request.json();
    
    // Calculate goal difference and total points
    teamData.goalDifference = teamData.goalsFor - teamData.goalsAgainst;
    teamData.totalPoints = (teamData.won * 3) + teamData.drawn + teamData.bonusPoints;

    await dbConnect();
    const updatedTeam = await League.findByIdAndUpdate(
      teamData._id,
      teamData,
      { new: true }
    );
    
    if (!updatedTeam) {
      return NextResponse.json({ error: 'Team not found' }, { status: 404 });
    }
    
    return NextResponse.json(updatedTeam);
    
  } catch (error) {
    console.error('Update Team Error:', error);
    return NextResponse.json({ error: 'Failed to update team' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { teamId } = await request.json();
    
    await dbConnect();
    const deletedTeam = await League.findByIdAndDelete(teamId);
    
    if (!deletedTeam) {
      return NextResponse.json({ error: 'Team not found' }, { status: 404 });
    }
    
    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error('Delete Team Error:', error);
    return NextResponse.json({ error: 'Failed to delete team' }, { status: 500 });
  }
} 