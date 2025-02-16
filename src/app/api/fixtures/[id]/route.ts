import { connectToDatabase } from '@/lib/mongodb';
import { Fixture } from '@/models/Fixture';
import { NextRequest, NextResponse } from 'next/server';

// Define the params interface
interface RouteParams {
  params: {
    id: string;
  }
}

export async function PUT(
  request: NextRequest,
  params: RouteParams
) {
  try {
    await connectToDatabase();
    const body = await request.json();
    const updatedFixture = await Fixture.findByIdAndUpdate(params.params.id, body, {
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
  request: NextRequest,
  params: RouteParams
) {
  try {
    await connectToDatabase();
    
    // Check if the fixture exists first
    const fixture = await Fixture.findById(params.params.id);
    if (!fixture) {
      return NextResponse.json(
        { error: 'Fixture not found' },
        { status: 404 }
      );
    }

    // Delete the fixture
    await Fixture.findByIdAndDelete(params.params.id);
    
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