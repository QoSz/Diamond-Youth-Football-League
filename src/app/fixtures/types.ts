export interface FixtureData {
    _id?: string;
    date: string;
    matches: Match[];
    category: 'U12' | 'U15';
}

export interface Match {
    time: string;
    team1: string;
    score1: string | number;
    team2: string;
    score2: string | number;
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