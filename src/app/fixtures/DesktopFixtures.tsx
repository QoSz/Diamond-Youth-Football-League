import { Match } from './types';

interface DesktopFixturesProps {
    matches: Match[];
}

export default function DesktopFixtures({ matches }: DesktopFixturesProps) {
    const getScoreColor = (score1: string | number, score2: string | number) => {
        // Handle cases where scores might be strings like "3(2)"
        const parseScore = (score: string | number) => {
            if (typeof score === 'string') {
                return parseInt(score.split('(')[0]);
            }
            return score;
        };

        const s1 = parseScore(score1);
        const s2 = parseScore(score2);

        if (s1 === s2 || score1 === '-' || score2 === '-') return 'text-gray-800';
        return s1 > s2 ? 'text-[#006400]' : 'text-[#FF0000]';
    };

    return (
        <div className="hidden sm:block bg-white/95 rounded-[1.618rem] overflow-hidden">
            <table className="w-full table-fixed">
                <thead className="bg-[#1A1A1A] text-[#FF4500]">
                    <tr>
                        <th className="py-3 px-2 text-center w-[20%]">Time</th>
                        <th className="py-3 px-2 text-center w-[20%]">Team 1</th>
                        <th className="py-3 px-2 text-center w-[20%]">Score</th>
                        <th className="py-3 px-2 text-center w-[20%]">Team 2</th>
                        <th className="py-3 px-2 text-center w-[20%]">Score</th>
                    </tr>
                </thead>
                <tbody>
                    {matches.map((match, index) => (
                        <tr key={index} className="border-b border-gray-200 bg-[#ffefda]">
                            <td className="py-3 px-2 text-center">{match.time}</td>
                            <td className="py-3 px-2 text-center">{match.team1}</td>
                            <td className={`py-3 px-2 text-center ${getScoreColor(match.score1, match.score2)}`}>
                                {match.score1}
                            </td>
                            <td className="py-3 px-2 text-center">{match.team2}</td>
                            <td className={`py-3 px-2 text-center ${getScoreColor(match.score2, match.score1)}`}>
                                {match.score2}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
} 