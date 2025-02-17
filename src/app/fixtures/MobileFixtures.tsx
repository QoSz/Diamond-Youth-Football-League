import { Match } from './types';

interface MobileFixturesProps {
    matches: Match[];
}

export default function MobileFixtures({ matches }: MobileFixturesProps) {
    const getScoreColor = (score1: string | number | null | undefined, score2: string | number | null | undefined) => {
        // Skip coloring if either score is "-" or null/undefined
        if (score1 === '-' || score2 === '-' || !score1 || !score2) return 'text-gray-800';

        // Handle null/undefined scores and string/number conversion
        const parseScore = (score: string | number | null | undefined) => {
            if (score === null || score === undefined || score === '-') return 0;
            if (typeof score === 'string') {
                return parseInt(score.split('(')[0]) || 0;
            }
            return score;
        };

        const s1 = parseScore(score1);
        const s2 = parseScore(score2);

        if (s1 === s2) return 'text-gray-800';
        return s1 > s2 ? 'text-[#006400]' : 'text-[#FF0000]';
    };

    return (
        <div className="sm:hidden space-y-4">
            {matches.map((match, index) => (
                <div key={index} className="bg-[#FFEFDA] rounded-[1.618rem] p-4">
                    <div className="text-center font-semibold text-gray-600 mb-2">{match.time}</div>
                    <div className="flex justify-between items-center">
                        <div className="flex-1 text-center">
                            <div className="font-medium">{match.team1}</div>
                            <div className={`text-xl font-bold mt-1 ${getScoreColor(match.score1, match.score2)}`}>
                                {match.score1 ?? '-'}
                            </div>
                        </div>
                        <div className="mx-4 text-gray-400">vs</div>
                        <div className="flex-1 text-center">
                            <div className="font-medium">{match.team2}</div>
                            <div className={`text-xl font-bold mt-1 ${getScoreColor(match.score2, match.score1)}`}>
                                {match.score2 ?? '-'}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
} 