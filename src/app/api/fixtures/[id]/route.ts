// @ts-nocheck
import { connectToDatabase } from '@/lib/mongodb';
import { Fixture } from '@/models/Fixture';
import { NextResponse } from 'next/server';

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    try {
        await connectToDatabase();
        const body = await request.json();
        const updatedFixture = await Fixture.findByIdAndUpdate(id, body, {
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
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    try {
        await connectToDatabase();

        // Check if the fixture exists first
        const fixture = await Fixture.findById(id);
        if (!fixture) {
            return NextResponse.json(
                { error: 'Fixture not found' },
                { status: 404 }
            );
        }

        // Delete the fixture
        await Fixture.findByIdAndDelete(id);

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