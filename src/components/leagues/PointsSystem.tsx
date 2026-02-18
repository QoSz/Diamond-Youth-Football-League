import SectionHeading from './SectionHeading';

export default function PointsSystem() {
  return (
    <div className="container mx-auto px-4 py-10">
      <SectionHeading>Points System</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {[
          { result: 'Win', points: '3 Points' },
          { result: 'Draw', points: '1 Point' },
          { result: 'Loss', points: '0 Points' }
        ].map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/5 rounded-[1.618rem] p-6 text-center text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="text-xl font-bold tracking-tight mb-2 text-[#FF4500]">{item.result}</h3>
            <p className="text-green-50/90 text-lg">{item.points}</p>
          </div>
        ))}
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="bg-[#FFE7C9] p-6 rounded-[1.618rem] grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-base font-semibold text-gray-800 mb-3">Bonus Points</h3>
            <p className="text-gray-800 text-sm md:text-base mb-2">
              <span className="font-semibold">Penalty Bonus = +1 point</span>
            </p>
            <ul className="space-y-1 text-sm md:text-base text-gray-800 list-disc list-inside">
              <li>All draws go to a penalty shootout.</li>
              <li>Shootout winner: <span className="font-semibold">2 pts</span> (1 draw + 1 bonus)</li>
              <li>Shootout loser: <span className="font-semibold">1 pt</span></li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold text-gray-800 mb-3">Tiebreakers</h3>
            <ol className="list-decimal list-inside space-y-1 text-sm md:text-base text-gray-800">
              <li>Goal difference</li>
              <li>Goals scored</li>
              <li>Goals conceded</li>
              <li>Head-to-head</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
