import { connectToDatabase } from '@/lib/mongodb';
import { Fixture } from '@/models/Fixture';
import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

// Force dynamic rendering of this route
export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

// GET all fixtures by category
export async function GET(request: Request) {
  console.log('=== Fixtures API Route Start ===');
  console.log('Request URL:', request.url);
  
  // Initialize with the URL's search params
  const searchParamsObj = new URL(request.url).searchParams;
  
  try {
    const category = searchParamsObj.get('category');
    console.log('Category requested:', category);

    console.log('Attempting database connection...');
    await connectToDatabase();
    console.log('Database connected successfully');

    const query = category ? { category } : {};
    console.log('Executing query:', JSON.stringify(query));

    const fixtures = await Fixture.find(query).sort({ timestamp: 1 });
    console.log('Query results:', {
      count: fixtures.length,
      firstFixture: fixtures[0] ? {
        id: fixtures[0]._id,
        date: fixtures[0].date,
        category: fixtures[0].category
      } : null
    });

    if (!fixtures || fixtures.length === 0) {
      console.log('No fixtures found for category:', category);
      return NextResponse.json([], { status: 200 });
    }

    console.log('=== Fixtures API Route End ===');
    return NextResponse.json(fixtures);
  } catch (error) {
    console.error('Detailed error in fixtures route:', {
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      category: searchParamsObj.get('category'),
      mongooseState: {
        readyState: mongoose.connection.readyState,
        host: mongoose.connection.host,
      }
    });

    return NextResponse.json({
      error: 'Failed to fetch fixtures',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

// POST new fixture
export async function POST(request: Request) {
  try {
    const body = await request.json();
    await connectToDatabase();
    
    const fixture = await Fixture.create(body);
    return NextResponse.json(fixture);
  } catch (error) {
    console.error('Error creating fixture:', error);
    return NextResponse.json(
      { error: 'Failed to create fixture' },
      { status: 500 }
    );
  }
} 