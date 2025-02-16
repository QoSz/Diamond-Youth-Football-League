import { connectToDatabase } from '@/lib/mongodb';
import { Fixture } from '@/models/Fixture';
import { NextResponse } from 'next/server';

export async function PUT(
    request: Request,
    { params }: { params: { [key: string]: string | string[] } }
) {
    try {
        const { id } = params;
        if (typeof id !== 'string') {
            return NextResponse.json({ error: 'Invalid fixture ID' }, { status: 400 });
        }

        await connectToDatabase();
        const body = await request.json();
        
        const updatedFixture = await Fixture.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });

        if (!updatedFixture) {
            return NextResponse.json({ error: 'Fixture not found' }, { status: 404 });
        }

        return NextResponse.json(updatedFixture);
    } catch (error) {
        console.error('Error updating fixture:', error);
        return NextResponse.json({ error: 'Failed to update fixture' }, { status: 500 });
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: { [key: string]: string | string[] } }
) {
    try {
        const { id } = params;
        if (typeof id !== 'string') {
            return NextResponse.json({ error: 'Invalid fixture ID' }, { status: 400 });
        }

        await connectToDatabase();
        const fixture = await Fixture.findById(id);
        
        if (!fixture) {
            return NextResponse.json({ error: 'Fixture not found' }, { status: 404 });
        }

        await Fixture.findByIdAndDelete(id);
        return NextResponse.json({ message: 'Fixture deleted successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error deleting fixture:', error);
        return NextResponse.json({ error: 'Failed to delete fixture' }, { status: 500 });
    }
} 