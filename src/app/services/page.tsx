import Link from 'next/link';
import Image from 'next/image';
import { CalendarRange, Trophy, ListOrdered, ChevronRight } from 'lucide-react';

export default function Services() {
  return (
    <main className="relative">
      {/* Restore fixed positioning with proper z-index */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/Services-Background.png"
          alt="Services Background"
          fill
          priority
          quality={75}
          className="object-cover object-top"
          sizes="100vw"
        />
        {/* Blur Overlay */}
        <div className="absolute inset-0 backdrop-blur-[3px] bg-black/30"></div>
      </div>

      {/* Content container with adjusted padding */}
      <div className="relative z-10 min-h-screen">
        {/* Services Header */}
        <div className="py-8 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-[#FF4500] mb-4">
            Services
          </h1>
          <p className="text-center text-[#fff8f5] max-w-2xl mx-auto text-lg">
            Delivering a high-quality, well-organized, and competitive experience that supports the
            development of young footballers as athletes and individuals.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
            {[
              {
                title: 'Fixtures',
                description: 'View upcoming fixtures',
                icon: CalendarRange,
                href: '/fixtures',
                gradient: 'from-[#FF4500] to-[#FF6B00]'
              },
              {
                title: 'Results',
                description: 'View all results',
                icon: Trophy,
                href: '/results',
                gradient: 'from-[#FF4500] to-[#FF6B00]'
              },
              {
                title: 'Tables',
                description: 'View all tables',
                icon: ListOrdered,
                href: '/tables',
                gradient: 'from-[#FF4500] to-[#FF6B00]'
              }
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="group relative overflow-hidden rounded-3xl cursor-pointer transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-transform duration-500 group-hover:scale-105`} />
                <div className="relative p-8 h-full flex flex-col items-center text-center text-white">
                  <item.icon className="w-12 h-12 mb-4 transition-transform duration-500 group-hover:scale-110" />
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <div className="flex items-center gap-1">
                    <p className="text-green-50/90">{item.description}</p>
                    <ChevronRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Calendar Section */}
        <div className="py-8 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#fff8f5] mb-8">
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
          </div>
        </div>

        {/* Format Section */}
        <div className="px-0 sm:px-4 mb-16">
          <h2 className="text-3xl font-bold text-center text-[#fff8f5] pb-4">
            Format
          </h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="inline-block min-w-full align-middle">
              <table className="min-w-full divide-y divide-[#FF4500] border-[#FF450000] border rounded-[1.618rem] overflow-hidden">
                <thead>
                  <tr>
                    <th className="w-1/3 p-4 text-lg font-bold text-black text-left"></th>
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
                  ].map((row, index) => (
                    <tr key={row.category}>
                      <td className="px-2 py-2 md:px-4 font-bold text-black text-xs md:text-sm lg:text-base">
                        {row.category}
                      </td>
                      <td className="px-2 py-2 md:px-4 text-black text-xs md:text-sm lg:text-base text-center">
                        {row.u12}
                      </td>
                      <td className="px-2 py-2 md:px-4 text-black text-xs md:text-sm lg:text-base text-center">
                        {row.u15}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Football Pitch Image */}
            <div className="mt-8 relative w-full h-[300px]">
              <Image
                src="/images/Football-Pitch.jpg"
                alt="Football Pitch"
                fill
                className="object-contain rounded-[1.618rem]"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>

            {/* Points and Rules Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/points"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-[#FF4500] to-[#FF6B00] text-white font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                Points Mechanism
              </Link>
              <Link
                href="/rules"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-[#FF4500] to-[#FF6B00] text-white font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                Rules
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
