import { NextResponse } from 'next/server';
import { getFixtures } from '@/services/dbService';
import dbConnect from '@/lib/db';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ category: string }> }
) {
  console.log('=== Fixtures API Request ===');
  console.log('Request URL:', request.url);
  
  // Await params since in Next.js 15, route parameters are asynchronous
  const { category } = await params;
  
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

    console.log('Fetching fixtures for category:', normalizedCategory);
    const fixtures = await getFixtures(normalizedCategory as 'U12' | 'U15');
    console.log(`Retrieved ${fixtures?.length ?? 0} fixtures`);
    
    return NextResponse.json(fixtures);
    
  } catch (error) {
    console.error('Fixtures API Error:', {
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      category
    });
    return NextResponse.json(
      { 
        error: 'Failed to fetch fixtures',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
} 