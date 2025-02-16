interface PlayoffMatch {
    match: number;
    time: string;
    team1: string;
    team2: string;
    type: string;
}

const playoffMatches: PlayoffMatch[] = [
    { match: 1, time: "8:30AM", team1: "Loser 4/5", team2: "Loser 3/6", type: "RR" },
    { match: 2, time: "8:30AM", team1: "1st place", team2: "Winner 4/5", type: "SF" },
    { match: 3, time: "9:30AM", team1: "Loser 3/6", team2: "Loser 2/7", type: "RR" },
    { match: 4, time: "9:30AM", team1: "Winner of 2/7", team2: "Winner 3/6", type: "SF" },
    { match: 5, time: "10:30AM", team1: "Loser 2/7", team2: "Loser 4/5", type: "RR" },
    { match: 6, time: "10:30AM", team1: "Looser Match 2", team2: "Looser Match 4", type: "3rd" },
    { match: 7, time: "11:30AM", team1: "Winner of Match 2", team2: "Winner of Match 4", type: "F" },
];

export default function PlayoffStructure() {
    return (
        <div className="mt-12 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-black pb-8">
                Play Off Structure - 23rd March
            </h2>
            <div className="overflow-x-auto">
                <div className="bg-white/95 rounded-[1.618rem] overflow-hidden min-w-[600px]">
                    <table className="w-full">
                        <thead className="bg-[#1A1A1A] text-[#FF4500]">
                            <tr>
                                <th className="py-3 px-4 text-center">Match</th>
                                <th className="py-3 px-4 text-center">Time</th>
                                <th className="py-3 px-4 text-center">Team 1</th>
                                <th className="py-3 px-4 text-center">Team 2</th>
                                <th className="py-3 px-4 text-center">Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {playoffMatches.map((match) => (
                                <tr key={match.match} className="border-b border-gray-200 bg-[#ffefda]">
                                    <td className="py-3 px-4 text-center">{match.match}</td>
                                    <td className="py-3 px-4 text-center">{match.time}</td>
                                    <td className="py-3 px-4 text-center">{match.team1}</td>
                                    <td className="py-3 px-4 text-center">{match.team2}</td>
                                    <td className="py-3 px-4 text-center">{match.type}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
} 