import DesktopFixtures from './DesktopFixtures';
import MobileFixtures from './MobileFixtures';
import PlayoffStructure from './PlayoffStructure';
import LeagueTable from './LeagueTable';
import { FixtureData } from './types';

// Force dynamic rendering for this page to avoid static optimization issues.
export const dynamic = 'force-dynamic';

export default async function Fixtures() {
    try {
        const [u12Fixtures, u15Fixtures, u12Teams, u15Teams] = await Promise.all([
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/fixtures?category=U12`, { cache: 'no-store' }).then(res => res.json()),
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/fixtures?category=U15`, { cache: 'no-store' }).then(res => res.json()),
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/teams?category=U12`, { cache: 'no-store' }).then(res => res.json()),
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/teams?category=U15`, { cache: 'no-store' }).then(res => res.json()),
        ]);

        // Add this sorting function
        const sortFixtures = (fixtures: FixtureData[]) => {
            const months: { [key: string]: number } = {
                'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
                'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
            };

            return [...fixtures].sort((a, b) => {
                const [dayA, monthA] = a.date.split(' ');
                const [dayB, monthB] = b.date.split(' ');
                
                const dayNumA = parseInt(dayA.replace(/\D/g, ''));
                const dayNumB = parseInt(dayB.replace(/\D/g, ''));
                
                const monthNumA = months[monthA];
                const monthNumB = months[monthB];
                
                if (monthNumA !== monthNumB) {
                    return monthNumA - monthNumB;
                }
                return dayNumA - dayNumB;
            });
        };

        // Sort the fixtures before rendering
        const sortedU12Fixtures = sortFixtures(u12Fixtures);
        const sortedU15Fixtures = sortFixtures(u15Fixtures);

        return (
            <main className="relative min-h-screen bg-gradient-to-br from-white via-orange-50 to-white animate-gradient-shift">
                <div className="relative z-10 container mx-auto px-4 py-8">
                    {/* U12 Section */}
                    <section className="mb-16">
                        <div className="relative pb-8">
                            <h1 className="text-4xl font-bold text-center text-[#FF4500] pb-4 sm:pb-0">
                                Under 12
                            </h1>
                            <div className="mt-4 md:mt-0 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 text-center">
                                <p className="text-gray-600 text-sm mb-2">
                                    Last modified: 16/02/2025
                                </p>
                                <a 
                                    href="https://docs.google.com/spreadsheets/u/0/d/1Z0KEM2TNrZGvOrQdX-nAiEOdktiBQbRFB4u4AB3KRq4/htmlview"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF4500] to-[#FF6B00] text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
                                >
                                    <span className="text-sm">View Updated Results</span>
                                    <svg 
                                        className="w-4 h-4" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth={2} 
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        
                        <h2 className="text-2xl md:text-3xl font-bold text-center text-black pb-8">
                            Fixtures
                        </h2>
                        <div className="space-y-10">
                            {sortedU12Fixtures.map((fixture: FixtureData, index: number) => (
                                <div key={index} className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                                    <div className="w-full md:w-48 text-center">
                                        <div className="bg-gradient-to-r from-[#FF4500] to-[#FF6B00] rounded-full py-2 px-4 inline-block">
                                            <span className="font-semibold text-white">{fixture.date}</span>
                                        </div>
                                    </div>
                                    <div className="flex-1 w-full">
                                        <DesktopFixtures matches={fixture.matches} />
                                        <MobileFixtures matches={fixture.matches} />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <LeagueTable data={u12Teams} />
                        <PlayoffStructure />
                    </section>

                    {/* U15 Section */}
                    <section className="mt-16 pt-16 border-t-2 border-gray-200">
                        <div className="relative pb-8">
                            <h1 className="text-4xl font-bold text-center text-[#FF4500] pb-4 sm:pb-0">
                                Under 15
                            </h1>
                            <div className="mt-4 md:mt-0 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 text-center">
                                <p className="text-gray-600 text-sm mb-2">
                                    Last modified: 16/02/2025
                                </p>
                                <a 
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF4500] to-[#FF6B00] text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
                                >
                                    <span className="text-sm">View Updated Results</span>
                                    <svg 
                                        className="w-4 h-4" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth={2} 
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        
                        <h2 className="text-2xl md:text-3xl font-bold text-center text-black pb-8">
                            Fixtures
                        </h2>
                        <div className="space-y-10">
                            {sortedU15Fixtures.map((fixture: FixtureData, index: number) => (
                                <div key={index} className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                                    <div className="w-full md:w-48 text-center">
                                        <div className="bg-gradient-to-r from-[#FF4500] to-[#FF6B00] rounded-full py-2 px-4 inline-block">
                                            <span className="font-semibold text-white">{fixture.date}</span>
                                        </div>
                                    </div>
                                    <div className="flex-1 w-full">
                                        <DesktopFixtures matches={fixture.matches} />
                                        <MobileFixtures matches={fixture.matches} />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <LeagueTable data={u15Teams} />
                    </section>
                </div>
            </main>
        );
    } catch (error) {
        console.error('Error fetching data:', error);
        return <div>Error loading data. Please try again later.</div>;
    }
}
