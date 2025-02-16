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
    console.error('Error updating fixture:', error);
    return NextResponse.json({ error: 'Failed to update fixture' }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDatabase();
    
    // Check if the fixture exists first
    const fixture = await Fixture.findById(params.id);
    if (!fixture) {
      return NextResponse.json(
        { error: 'Fixture not found' },
        { status: 404 }
      );
    }

    // Delete the fixture
    await Fixture.findByIdAndDelete(params.id);
    
    return NextResponse.json(
      { message: 'Fixture deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting fixture:', error);
    return NextResponse.json(
      { error: 'Failed to delete fixture' },
      { status: 500 }
    );
  }
} 