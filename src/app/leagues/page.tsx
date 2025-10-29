import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function Leagues() {
  return (
    <div className="bg-gradient-to-br from-white via-orange-50 to-white animate-gradient-shift min-h-screen">
      {/* Content container */}
      <div className="py-4 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#FF4500] pb-8">
          Leagues
        </h1>
        <p className="text-center text-gray-800 max-w-2xl mx-auto text-lg">
          Delivering a high-quality, well-organized, and competitive experience that supports the
          development of young footballers as athletes and individuals.
        </p>
      </div>

      {/* Image section added here */}
      <div className="py-4 px-4 max-w-2xl mx-auto w-full">
        <div className="rounded-[1.618rem] overflow-hidden shadow-lg relative h-[400px]">
          <Image
            src="https://placehold.co/1200x800?text=League+Placeholder"
            alt="Youth football league action"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Age Group Notes - simplified container */}
      <div className="py-4 px-4 max-w-md mx-auto w-full">
        <div className="bg-[#FFE7C9] p-6 rounded-xl">
          <h3 className="text-xl text-center font-semibold text-[#FF4500] mb-2">
            Age Groups
          </h3>
          <p className="text-gray-800 text-center">
            <span className="font-medium">Under 11:</span> Players born 2014-2015<br />
            <span className="font-medium">Under 13:</span> Players born 2012-2013<br />
            <span className="font-medium">Under 15:</span> Players born 2010-2011
          </p>
        </div>
      </div>

      {/* Calendar Section - simplified container */}
      <div className="py-4 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Calendar - 2025
          </h2>

          {/* Removed mx-auto from grid since container is already centered */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                season: 'Season 1',
                date: '19th January - 30th March'
              },
              {
                season: 'Season 2',
                date: '27th April - 29th June'
              },
              {
                season: 'Season 3',
                date: '21st September - 7th December'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-black rounded-[1.618rem] p-6 text-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-2xl font-bold mb-4 text-[#FF4500]">{item.season}</h3>
                <p className="text-green-50/90 text-xl">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Format Section - removed redundant wrapper div */}
      <div className="container mx-auto px-4 py-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Format
        </h2>
        {/* Simplified table container */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] md:min-w-0 divide-y divide-[#FF4500]">
            <thead>
              <tr>
                <th className="w-1/4 px-3 py-4 text-lg font-bold text-gray-800 text-left"></th>
                <th className="p-4 text-center">
                  <div className="text-[#FF4500] text-sm md:text-base lg:text-lg">
                    UNDER 11
                  </div>
                </th>
                <th className="p-4 text-center">
                  <div className="text-[#FF4500] text-sm md:text-base lg:text-lg">
                    UNDER 13
                  </div>
                </th>
                <th className="p-4 text-center">
                  <div className="text-[#FF4500] text-sm md:text-base lg:text-lg">
                    UNDER 15
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#FF4500]">
              {[
                {
                  category: 'Age Group',
                  u11: 'Born 2014-2015',
                  u13: 'Born 2012-2013',
                  u15: 'Born 2010-2011'
                },
                {
                  category: 'Team Structure',
                  u11: '7-a-side',
                  u13: '9-a-side',
                  u15: '11-a-side'
                },
                {
                  category: 'Matchday Squad',
                  u11: '12 players',
                  u13: '14 players',
                  u15: '16 players'
                },
                {
                  category: 'Full Roster',
                  u11: '20 players',
                  u13: '22 players',
                  u15: '24 players'
                },
                {
                  category: 'Match Duration',
                  u11: '1 hour (3×20 min)',
                  u13: '1 hour (2×30 min halves)',
                  u15: '70 mins (2×35 min halves)'
                },
                {
                  category: 'Substitutions',
                  u11: 'Unlimited rolling',
                  u13: 'Unlimited rolling',
                  u15: 'Unlimited rolling'
                },
                {
                  category: 'Field Size',
                  u11: '55m × 35m',
                  u13: '73m × 45m',
                  u15: 'Full-size pitch'
                },
                {
                  category: 'Ball Size',
                  u11: 'Size 4',
                  u13: 'Size 5',
                  u15: 'Size 5'
                },
                {
                  category: 'Officials',
                  u11: '1 referee',
                  u13: '1 referee',
                  u15: '1 referee, 2 linesmen'
                },
                {
                  category: 'Medical Support',
                  u11: '1st Aider provided',
                  u13: '1st Aider provided',
                  u15: '1st Aider provided'
                }
              ].map((row) => (
                <tr key={row.category}>
                  <td className="px-2 md:px-3 py-2 font-bold text-gray-800 text-xs md:text-sm lg:text-base">
                    {row.category}
                  </td>
                  <td className="px-2 py-2 md:px-4 text-gray-800 text-xs md:text-sm lg:text-base text-center">
                    {row.u11}
                  </td>
                  <td className="px-2 py-2 md:px-4 text-gray-800 text-xs md:text-sm lg:text-base text-center">
                    {row.u13}
                  </td>
                  <td className="px-2 py-2 md:px-4 text-gray-800 text-xs md:text-sm lg:text-base text-center">
                    {row.u15}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Fixtures Link Section - simplified container */}
      <div className="py-4 pb-8 px-4">
        <div className="max-w-2xl mx-auto bg-[#FFE7C9] p-6 rounded-xl">
          <h2 className="text-3xl text-center font-bold text-gray-800 mb-4">
            Results & Fixtures
          </h2>
          <p className="text-gray-800 text-center mb-6 text-lg">
            Follow the league for the current season
          </p>
          <div className="flex justify-center">
            <a
              href="https://docs.google.com/spreadsheets/u/0/d/1Z0KEM2TNrZGvOrQdX-nAiEOdktiBQbRFB4u4AB3KRq4/htmlview#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#FF4500] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#FF5500] transition-colors duration-300 hover:shadow-lg"
            >
              Results and Fixtures
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
