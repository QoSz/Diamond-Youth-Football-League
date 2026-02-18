import SectionHeading from './SectionHeading';

export default function LeagueFormatTable() {
  return (
    <div className="container mx-auto px-4 py-10">
      <SectionHeading>League Format</SectionHeading>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] md:min-w-0 divide-y divide-[#FF4500]/40">
          <thead>
            <tr className="border-b-2 border-[#FF4500]/30">
              <th className="w-1/4 px-3 py-4 text-base font-bold text-gray-800 text-left"></th>
              <th className="p-4 text-center">
                <div className="text-[#FF4500] text-xs md:text-sm lg:text-base font-bold tracking-wide">
                  UNDER 12
                </div>
              </th>
              <th className="p-4 text-center">
                <div className="text-[#FF4500] text-xs md:text-sm lg:text-base font-bold tracking-wide">
                  UNDER 14
                </div>
              </th>
              <th className="p-4 text-center">
                <div className="text-[#FF4500] text-xs md:text-sm lg:text-base font-bold tracking-wide">
                  UNDER 16
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#FF4500]/20">
            {[
              {
                category: 'Age Group',
                u12: 'Born 2014–2015',
                u14: 'Born 2012–2013',
                u16: 'Born 2010–2011'
              },
              {
                category: 'Team Structure',
                u12: '7-a-side',
                u14: '9-a-side',
                u16: '11-a-side'
              },
              {
                category: 'Matchday Squad',
                u12: '12 players',
                u14: '14 players',
                u16: '16 players'
              },
              {
                category: 'Full Roster',
                u12: '20 players',
                u14: '22 players',
                u16: '24 players'
              },
              {
                category: 'Match Duration',
                u12: '1 hour (3×20min thirds)',
                u14: '1 hour (2×30min halves)',
                u16: '70mins (2×35min halves)'
              },
              {
                category: 'Off-sides',
                u12: 'No',
                u14: 'No',
                u16: 'Yes'
              },
              {
                category: 'Substitutions',
                u12: 'Unlimited rolling',
                u14: 'Unlimited rolling',
                u16: 'Unlimited rolling'
              },
              {
                category: 'Minimum players/match',
                u12: '5 players',
                u14: '7 players',
                u16: '7 players'
              },
              {
                category: 'Field Size',
                u12: '55m × 35m',
                u14: '73m × 45m',
                u16: 'Full-size pitch'
              },
              {
                category: 'Ball Size',
                u12: 'Size 5 Light',
                u14: 'Size 5',
                u16: 'Size 5'
              },
              {
                category: 'Officials',
                u12: '1 referee',
                u14: '1 referee',
                u16: '1 referee, 2 linesmen'
              },
              {
                category: 'Medical Support',
                u12: '1st Aider provided',
                u14: '1st Aider provided',
                u16: '1st Aider provided'
              },
              {
                category: 'Penalties',
                u12: '3/Team',
                u14: '3/Team',
                u16: '5/Team'
              }
            ].map((row, i) => (
              <tr key={row.category} className={`hover:bg-orange-50/60 transition-colors ${i % 2 === 0 ? '' : 'bg-orange-50/30'}`}>
                <td className="px-2 md:px-3 py-3 font-bold text-gray-800 text-xs md:text-sm lg:text-base">
                  {row.category}
                </td>
                <td className="px-2 py-3 md:px-4 text-gray-700 text-xs md:text-sm lg:text-base text-center">
                  {row.u12}
                </td>
                <td className="px-2 py-3 md:px-4 text-gray-700 text-xs md:text-sm lg:text-base text-center">
                  {row.u14}
                </td>
                <td className="px-2 py-3 md:px-4 text-gray-700 text-xs md:text-sm lg:text-base text-center">
                  {row.u16}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
