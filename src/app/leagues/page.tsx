import { ChevronRight } from 'lucide-react';

export default function Leagues() {
  return (
    <main className="relative">
      {/* Add matching gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-orange-50 to-white animate-gradient-shift" />

      {/* Content container with z-index */}
      <div className="min-h-screen relative z-10">
        {/* Leagues Header */}
        <div className="py-8 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-[#FF4500] pb-8">
            Leagues
          </h1>
          {/* Change text color to improve readability without background */}
          <p className="text-center text-gray-800 max-w-2xl mx-auto text-lg">
            Delivering a high-quality, well-organized, and competitive experience that supports the
            development of young footballers as athletes and individuals.
          </p>
        </div>

        {/* Calendar Section */}
        <div className="py-4 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Tentative Calendar – 2025
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto">
              {[
                {
                  season: 'Season 1',
                  date: '19th January – 30th March'
                },
                {
                  season: 'Season 2',
                  date: '27th April – 29th June'
                },
                {
                  season: 'Season 3',
                  date: '21st September – 7th December'
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

            {/* Add Age Group Notes Section */}
            <div className="text-center">
              <div className="inline-block bg-orange-50 p-8 rounded-[1.618rem]">
                <h3 className="text-xl font-semibold text-[#FF4500] mb-2">
                  Age Group Notes
                </h3>
                <p className="text-gray-800">
                  <span className="font-medium">Under 12:</span> Players born 2013-2015<br />
                  <span className="font-medium">Under 15:</span> Players born 2010-2011
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Format Section */}
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-800 pb-4">
            Format
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="inline-block min-w-full align-middle">
              <table className="min-w-full divide-y divide-[#FF4500] border-[#FF450000] border rounded-[1.618rem] overflow-hidden">
                <thead>
                  <tr>
                    <th className="w-1/3 p-4 text-lg font-bold text-gray-800 text-left"></th>
                    <th className="p-4 text-center">
                      <div className="bg-black text-[#FF4500] rounded-full px-5 py-2 text-sm md:text-base lg:text-lg inline-block">
                        Under 12s
                      </div>
                    </th>
                    <th className="p-4 text-center">
                      <div className="bg-black text-[#FF4500] rounded-full px-5 py-2 text-sm md:text-base lg:text-lg inline-block">
                        Under 15s
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#FF4500]">
                  {[
                    {
                      category: 'Age Group',
                      u12: 'Born 2013-2015',
                      u15: 'Born 2010-2012'
                    },
                    {
                      category: 'Team Structure',
                      u12: '7-a-side',
                      u15: '11-a-side'
                    },
                    {
                      category: 'Matchday Squad',
                      u12: '12 players',
                      u15: '16 players'
                    },
                    {
                      category: 'Full Roster',
                      u12: '20 players',
                      u15: '24 players'
                    },
                    {
                      category: 'Match Duration',
                      u12: '20 minutes (3 halves)',
                      u15: '30 minutes (2 halves)'
                    },
                    {
                      category: 'Substitutions',
                      u12: 'Unlimited rolling substitutions',
                      u15: 'Unlimited rolling substitutions'
                    },
                    {
                      category: 'Field Size',
                      u12: '55m x 35m',
                      u15: 'Full-size pitch'
                    },
                    {
                      category: 'Ball Size',
                      u12: 'Size 4',
                      u15: 'Size 5'
                    },
                    {
                      category: 'Officials',
                      u12: '1 referee',
                      u15: '1 referee and 2 linesmen'
                    },
                    {
                      category: 'Medical Support',
                      u12: '1st Aider provided',
                      u15: '1st Aider not provided'
                    }
                  ].map((row) => (
                    <tr key={row.category}>
                      <td className="px-2 py-2 md:px-4 font-bold text-gray-800 text-xs md:text-sm lg:text-base">
                        {row.category}
                      </td>
                      <td className="px-2 py-2 md:px-4 text-gray-800 text-xs md:text-sm lg:text-base text-center">
                        {row.u12}
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
        </div>

        {/* Add Football pitch image here */}
        <div className="pt-12 pb-0 px-4 flex justify-center">
          <div className="max-w-md mx-auto w-full">
            <img 
              src="/images/Football-Pitch.svg" 
              alt="Football pitch diagram"
              className="w-full h-auto rounded-[1.618rem] shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        </div>

        {/* Fixtures Link Section */}
        <div className="py-12 px-4 text-center">
          <div className="max-w-2xl mx-auto bg-orange-50 p-8 rounded-[1.618rem] border-2 border-orange-100">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Live Results & Fixtures
            </h2>
            <p className="text-gray-800 mb-6 text-lg">
              Follow the latest match results and upcoming fixtures for the current season
            </p>
            <a
              href="https://docs.google.com/spreadsheets/u/0/d/1Z0KEM2TNrZGvOrQdX-nAiEOdktiBQbRFB4u4AB3KRq4/htmlview#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#FF4500] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#FF5500] transition-colors duration-300 hover:shadow-lg"
            >
              View Live Updates
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
