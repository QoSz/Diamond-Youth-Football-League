import { connectToDatabase } from '@/lib/mongodb';
import { Fixture } from '@/models/Fixture';
import { NextResponse } from 'next/server';

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDatabase();
    const body = await request.json();
    const updatedFixture = await Fixture.findByIdAndUpdate(params.id, body, {
      new: true,
      runValidators: true,
    });
    return NextResponse.json(updatedFixture);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update fixture' }, { status: 500 });
  }
}

export async function DELETE(
  { params }: { params: { id: string } }
) {
  try {
    await connectToDatabase();
    await Fixture.findByIdAndDelete(params.id);
    return NextResponse.json({ message: 'Fixture deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete fixture' }, { status: 500 });
  }
} 