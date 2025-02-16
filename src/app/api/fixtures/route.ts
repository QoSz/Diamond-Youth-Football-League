import { connectToDatabase } from '@/lib/mongodb';
import { Fixture } from '@/models/Fixture';
import { NextResponse } from 'next/server';

// Force dynamic rendering of this route
export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

// GET all fixtures by category
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');

    await connectToDatabase();
    
    const query = category ? { category } : {};
    const fixtures = await Fixture.find(query).sort({ timestamp: 1 });
    
    if (!fixtures || fixtures.length === 0) {
      return NextResponse.json([], { status: 200 }); // Return empty array instead of error
    }
    
    return NextResponse.json(fixtures);
  } catch (error) {
    console.error('Error fetching fixtures:', error);
    return NextResponse.json(
      { error: 'Failed to fetch fixtures', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
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