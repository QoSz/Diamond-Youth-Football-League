import { connectToDatabase } from '@/lib/mongodb';
import { Team } from '@/models/Team';
import { NextResponse } from 'next/server';

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDatabase();
    const body = await request.json();
    const updatedTeam = await Team.findByIdAndUpdate(params.id, body, {
      new: true,
      runValidators: true,
    });
    return NextResponse.json(updatedTeam);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update team' }, { status: 500 });
  }
}

export async function DELETE(
  { params }: { params: { id: string } }
) {
  try {
    await connectToDatabase();
    await Team.findByIdAndDelete(params.id);
    return NextResponse.json({ message: 'Team deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete team' }, { status: 500 });
  }
} 