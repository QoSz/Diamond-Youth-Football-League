import { NextResponse } from 'next/server';
import { getLeagueTable } from '@/services/dbService';
import dbConnect from '@/lib/db';

export async function GET(
  request: Request,
  context: { params: { category: string } }
) {
  console.log('=== League API Request ===');
  console.log('Request URL:', request.url);
  
  // Safely destructure and await params
  const params = await context.params;
  const { category } = params;
  
  console.log('Category parameter:', category);

  try {
    console.log('Validating category parameter...');
    if (!category) {
      console.error('Category parameter is missing');
      return NextResponse.json(
        { error: 'Category parameter is required' },
        { status: 400 }
      );
    }

    const normalizedCategory = category.toUpperCase();
    console.log('Normalized category:', normalizedCategory);
    
    if (!['U12', 'U15'].includes(normalizedCategory)) {
      console.error('Invalid category provided:', normalizedCategory);
      return NextResponse.json(
        { error: 'Invalid category. Must be U12 or U15' },
        { status: 400 }
      );
    }

    console.log('Connecting to database...');
    const db = await dbConnect();
    console.log('Database connection status:', !!db ? 'Connected' : 'Failed');

    console.log('Fetching league data for category:', normalizedCategory);
    const leagueData = await getLeagueTable(normalizedCategory as 'U12' | 'U15');
    console.log(`Retrieved ${leagueData?.length ?? 0} team entries`);
    
    return NextResponse.json(leagueData);
    
  } catch (error) {
    // Don't expose internal errors in production
    console.error('League API Error:', error);
    return NextResponse.json(
      { error: 'An error occurred while fetching league data' },
      { status: 500 }
    );
  }
} 