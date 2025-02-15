import Link from 'next/link';
import { CalendarRange, Trophy, ListOrdered, ChevronRight } from 'lucide-react';

export default function LeagueInfo() {
    return (
        <section className="pb-16 pt-0 px-4 md:px-8 bg-gradient-to-br from-white via-orange-50 to-white">
            {/* Quick Links Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
        </section>
    );
} 