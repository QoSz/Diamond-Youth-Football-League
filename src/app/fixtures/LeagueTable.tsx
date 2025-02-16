import { TeamStats } from './types';

interface LeagueTableProps {
    data: TeamStats[];
}

export default function LeagueTable({ data }: LeagueTableProps) {
    return (
        <div className="mt-12 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-black pb-8">
                League Table
            </h2>
            <div className="relative rounded-[1.618rem] overflow-hidden bg-white/95">
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse min-w-[800px]">
                        <thead className="bg-[#1A1A1A] text-[#FF4500]">
                            <tr>
                                <th className="sticky left-0 z-30 bg-[#1A1A1A] py-3 px-4 text-left w-[200px] shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                                    Team
                                </th>
                                <th className="w-[80px] py-3 px-2 text-center">MP</th>
                                <th className="w-[80px] py-3 px-2 text-center">W</th>
                                <th className="w-[80px] py-3 px-2 text-center">D</th>
                                <th className="w-[80px] py-3 px-2 text-center">L</th>
                                <th className="w-[80px] py-3 px-2 text-center">GF</th>
                                <th className="w-[80px] py-3 px-2 text-center">GA</th>
                                <th className="w-[80px] py-3 px-2 text-center">GD</th>
                                <th className="w-[80px] py-3 px-2 text-center">BP</th>
                                <th className="w-[80px] py-3 px-2 text-center">Pts</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((team) => (
                                <tr key={team.teamName} className="border-b border-gray-200 bg-[#ffefda] hover:bg-[#ffe5c4]">
                                    <td className="sticky left-0 z-20 bg-[#ffefda] hover:bg-[#ffe5c4] py-3 px-4 font-medium whitespace-nowrap shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                                        {team.teamName}
                                    </td>
                                    <td className="py-3 px-2 text-center">{team.matchesPlayed}</td>
                                    <td className="py-3 px-2 text-center">{team.won}</td>
                                    <td className="py-3 px-2 text-center">{team.drawn}</td>
                                    <td className="py-3 px-2 text-center">{team.lost}</td>
                                    <td className="py-3 px-2 text-center">{team.goalsFor}</td>
                                    <td className="py-3 px-2 text-center">{team.goalsAgainst}</td>
                                    <td className="py-3 px-2 text-center">{team.goalDifference}</td>
                                    <td className="py-3 px-2 text-center">{team.bonusPoints}</td>
                                    <td className="py-3 px-2 text-center font-bold">{team.totalPoints}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
} 