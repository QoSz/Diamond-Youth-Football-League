import { connectToDatabase } from '@/lib/mongodb';
import { Team } from '@/models/Team';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;

    try {
        await connectToDatabase();
        const body = await request.json();
        const updatedTeam = await Team.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });
        return NextResponse.json(updatedTeam);
    } catch (error) {
        console.error('Error updating team:', error);
        return NextResponse.json({ error: 'Failed to update team' }, { status: 500 });
    }
}

// Define a proper type for the route's parameters
interface RouteParams {
  params: { id: string };
}

export async function DELETE(
    request: NextRequest,
    { params }: RouteParams
) {
    try {
        await connectToDatabase();

        // Check if the team exists first
        const team = await Team.findById(params.id);
        if (!team) {
            return NextResponse.json(
                { error: 'Team not found' },
                { status: 404 }
            );
        }

        // Delete the team
        await Team.findByIdAndDelete(params.id);

        return NextResponse.json(
            { message: 'Team deleted successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error deleting team:', error);
        return NextResponse.json(
            { error: 'Failed to delete team' },
            { status: 500 }
        );
    }
} 