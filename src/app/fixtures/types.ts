import type { Match } from '@/lib/api';  // Import Match as a type

// Re-export Match as a type
export type { Match };  // Use 'export type' for re-exporting types

export interface FixtureData {
    _id?: string;
    date: string;
    matches: Match[];  // Now Match is properly imported and can be used
    category: 'U12' | 'U15';
}

export interface TeamStats {
    _id?: string;
    teamName: string;
    matchesPlayed: number;
    won: number;
    drawn: number;
    lost: number;
    goalsFor: number;
    goalsAgainst: number;
    goalDifference: number;
    bonusPoints: number;
    totalPoints: number;
    category: 'U12' | 'U15';
} 