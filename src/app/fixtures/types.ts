export interface Match {
    _id: string;
    time: string;
    team1: string;
    team2: string;
    score1: string | number | null;
    score2: string | number | null;
}

export interface FixtureData {
    _id?: string;
    date: string;
    category: 'U12' | 'U15';
    matches: Match[];
}

export interface TeamStats {
    _id?: string;
    teamName: string;
    category: 'U12' | 'U15';
    matchesPlayed: number;
    won: number;
    drawn: number;
    lost: number;
    goalsFor: number;
    goalsAgainst: number;
    goalDifference: number;
    bonusPoints: number;
    totalPoints: number;
}

export interface PlayoffMatch {
    match: number;
    time: string;
    team1: string;
    team2: string;
    type: string;
}
