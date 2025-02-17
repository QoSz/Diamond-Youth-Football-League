import dbConnect from '@/lib/db';
import Fixture from '@/models/Fixture';
import League from '@/models/League';
import { Match, TeamStats } from '@/app/fixtures/types';

// Use imported TeamStats instead of LeagueData
export type LeagueData = TeamStats;

// Use the imported Match type and define FixtureData
export interface FixtureData {
  _id?: string;
  date: string;
  category: 'U12' | 'U15';
  matches: Match[];
}

// Add type for MongoDB document with _id
interface MongoDocument {
  _id: string;
  [key: string]: any;
}

// Fixture Operations
export async function getFixtures(category: 'U12' | 'U15'): Promise<FixtureData[]> {
  console.log('=== getFixtures called ===');
  console.log('Category requested:', category);
  
  try {
    console.log('Establishing database connection...');
    const db = await dbConnect();
    console.log('Database connection result:', !!db ? 'Success' : 'Failed');

    if (!db) {
      console.error('Database connection failed');
      throw new Error('Database connection failed');
    }

    console.log('Executing fixtures query...');
    console.log('Query parameters:', { category });
    
    const fixtures = await Fixture.find({ category })
      .lean<(FixtureData & MongoDocument)[]>()
      .exec();
    
    console.log('Query execution completed');
    console.log('Fixtures found:', fixtures?.length ?? 0);
    
    if (!fixtures) {
      console.log('No fixtures found for category:', category);
      return [];
    }

    const processedFixtures = fixtures.map(fixture => ({
      ...fixture,
      _id: fixture._id.toString()
    }));
    
    console.log('Successfully processed fixtures data');
    return processedFixtures;
    
  } catch (error) {
    console.error('getFixtures Error:', {
      category,
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined
    });
    throw error;
  }
}

export async function createFixture(fixtureData: FixtureData): Promise<FixtureData> {
  await dbConnect();
  const newFixture = new Fixture(fixtureData);
  const savedFixture = await newFixture.save();
  return {
    _id: savedFixture._id.toString(),
    date: savedFixture.date,
    category: savedFixture.category,
    matches: savedFixture.matches
  };
}

// League Operations
export async function getLeagueTable(category: 'U12' | 'U15'): Promise<LeagueData[]> {
  try {
    const db = await dbConnect();
    if (!db) {
      console.error('Database connection failed');
      throw new Error('Database connection failed');
    }

    console.log(`DB Query - Getting league table for category: ${category}`);
    const teams = await League.find({ category })
      .lean<(LeagueData & MongoDocument)[]>()
      .sort({ totalPoints: -1, goalDifference: -1 })
      .exec();

    if (!teams) {
      console.log(`No teams found for category ${category}`);
      return [];
    }

    console.log(`Found ${teams.length} teams for category ${category}`);
    return teams.map(team => ({
      ...team,
      _id: team._id.toString()
    }));
  } catch (error) {
    console.error('getLeagueTable Error:', {
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined
    });
    throw error;
  }
}

export async function createLeagueEntry(leagueData: Omit<TeamStats, '_id'>): Promise<TeamStats> {
  await dbConnect();
  const newLeague = new League(leagueData);
  const savedLeague = await newLeague.save();
  return {
    _id: savedLeague._id.toString(),
    teamName: savedLeague.teamName,
    category: savedLeague.category,
    matchesPlayed: savedLeague.matchesPlayed,
    won: savedLeague.won,
    drawn: savedLeague.drawn,
    lost: savedLeague.lost,
    goalsFor: savedLeague.goalsFor,
    goalsAgainst: savedLeague.goalsAgainst,
    goalDifference: savedLeague.goalDifference,
    bonusPoints: savedLeague.bonusPoints,
    totalPoints: savedLeague.totalPoints
  };
}

// Database Maintenance
export async function clearFixtures(): Promise<void> {
  await dbConnect();
  await Fixture.deleteMany({});
}

export async function clearLeagueData(): Promise<void> {
  await dbConnect();
  await League.deleteMany({});
}

// Full CRUD for Fixtures
export async function updateFixture(id: string, fixtureData: Partial<FixtureData>): Promise<FixtureData | null> {
  await dbConnect();
  const result = await Fixture.findByIdAndUpdate(id, fixtureData, { new: true }).lean();
  return result as FixtureData | null;
}

export async function deleteFixture(id: string): Promise<void> {
  await dbConnect();
  await Fixture.findByIdAndDelete(id);
}

// Full CRUD for League
export async function updateLeagueEntry(id: string, leagueData: Partial<LeagueData>): Promise<LeagueData | null> {
  await dbConnect();
  const result = await League.findByIdAndUpdate(id, leagueData, { new: true }).lean();
  return result as LeagueData | null;
}

export async function deleteLeagueEntry(id: string): Promise<void> {
  await dbConnect();
  await League.findByIdAndDelete(id);
} 