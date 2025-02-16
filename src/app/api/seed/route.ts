import { connectToDatabase } from '@/lib/mongodb';
import { Fixture } from '@/models/Fixture';
import { Team } from '@/models/Team';
import { NextResponse } from 'next/server';

export async function GET() {
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json(
      { error: 'Seeding is not allowed in production' },
      { status: 403 }
    );
  }

  try {
    await connectToDatabase();

    // Import seed data only in development
    const { fixturesData } = await import('@/app/fixtures/backup/fixturesDataU12');
    const { fixturesDataU15 } = await import('@/app/fixtures/backup/fixturesDataU15');
    const { leagueDataU12 } = await import('@/app/fixtures/backup/leagueDataU12');
    const { leagueDataU15 } = await import('@/app/fixtures/backup/leagueDataU15');

    // Clear existing data
    await Fixture.deleteMany({});
    await Team.deleteMany({});

    // Seed data
    await Fixture.insertMany([
      ...fixturesData.map(fixture => ({ ...fixture, category: 'U12' })),
      ...fixturesDataU15.map(fixture => ({ ...fixture, category: 'U15' }))
    ]);

    await Team.insertMany([
      ...leagueDataU12.map(team => ({ ...team, category: 'U12' })),
      ...leagueDataU15.map(team => ({ ...team, category: 'U15' }))
    ]);

    return NextResponse.json({ message: 'Database seeded successfully' });
  } catch (error) {
    console.error('Seeding error:', error);
    return NextResponse.json(
      { error: 'Failed to seed database' },
      { status: 500 }
    );
  }
} 