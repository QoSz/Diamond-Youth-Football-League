export interface Match {
    time: string;
    team1: string;
    team2: string;
    score1: string | number;
    score2: string | number;
}

export interface FixtureData {
    date: string;
    category: 'U12' | 'U15';
    matches: Match[];
}

export interface TeamStats {
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

export interface PlayoffMatch {
    match: number;
    time: string;
    team1: string;
    team2: string;
    type: string;
}
