import { connectToDatabase } from '@/lib/mongodb';
import { Team } from '@/models/Team';
import { NextResponse } from 'next/server';

// GET all teams by category
export async function GET(request: Request) {
  try {
    await connectToDatabase();
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');

    if (!category) {
      return NextResponse.json({ error: 'Category is required' }, { status: 400 });
    }

    const teams = await Team.find({ category }).sort({ totalPoints: -1 });
    return NextResponse.json(teams);
  } catch (error) {
    console.error('Error fetching teams:', error);
    return NextResponse.json({ error: 'Failed to fetch teams' }, { status: 500 });
  }
}

// POST new team
export async function POST(request: Request) {
  try {
    await connectToDatabase();
    const body = await request.json();
    const team = await Team.create(body);
    return NextResponse.json(team, { status: 201 });
  } catch (error) {
    console.error('Error creating team:', error);
    return NextResponse.json({ error: 'Failed to create team' }, { status: 500 });
  }
} 