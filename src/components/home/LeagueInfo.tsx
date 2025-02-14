import Link from 'next/link';
import { CalendarRange, Trophy, ListOrdered, MapPin, Phone, Mail, Clock, ChevronRight } from 'lucide-react';

export default function LeagueInfo() {
    return (
        <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-white via-orange-50 to-white">
            {/* Quick Links Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
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

            {/* Location Section */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Location Info Side */}
                <div className="relative">
                    <div className="relative bg-white rounded-[1.618rem] p-4 sm:p-8 shadow-xl border border-orange-100">
                        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center text-[#FF4500]">Get in touch with us...</h2>
                        <div className="space-y-4 sm:space-y-6">
                            {/* Contact Information */}
                            <div className="space-y-3 sm:space-y-4">
                                {/* Address */}
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <div className="bg-orange-50 p-2 rounded-lg shrink-0">
                                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF4500]" />
                                    </div>
                                    <Link
                                        href="https://maps.app.goo.gl/DGxDRsNQrGAzR9Ym8"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm sm:text-lg text-gray-600 hover:text-[#FF4500] transition-colors"
                                    >
                                        Farasi Lane Primary School, Westlands, Nairobi
                                    </Link>
                                </div>

                                {/* Phone */}
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <div className="bg-orange-50 p-2 rounded-lg shrink-0">
                                        <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF4500]" />
                                    </div>
                                    <Link
                                        href="tel:+254727839014"
                                        className="text-sm sm:text-lg text-gray-600 hover:text-[#FF4500] transition-colors"
                                    >
                                        +254 727 839 014
                                    </Link>
                                </div>

                                {/* Email */}
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <div className="bg-orange-50 p-2 rounded-lg shrink-0">
                                        <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF4500]" />
                                    </div>
                                    <Link
                                        href="mailto:info@diamondfc.co.ke"
                                        className="text-sm sm:text-lg text-gray-600 hover:text-[#FF4500] transition-colors break-all"
                                    >
                                        info@diamondfc.co.ke
                                    </Link>
                                </div>

                                {/* Operating Hours */}
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <div className="bg-orange-50 p-2 rounded-lg shrink-0">
                                        <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF4500]" />
                                    </div>
                                    <p className="text-sm sm:text-lg text-gray-600">Mon - Sat, 8:00am - 5:00pm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Side */}
                <div className="relative h-[300px] sm:h-[400px] rounded-[1.618rem] overflow-hidden shadow-xl">
                    <div className="absolute inset-0">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.879664540299!2d36.75888127540879!3d-1.2428615987452853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1837ea6db27b%3A0x44df5a87efb12b5e!2sFarasi%20Lane%20Primary%20School%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1739561670332!5m2!1sen!2ske"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="filter contrast-[1.1] brightness-[1.1]"
                        />
                    </div>
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 sm:px-4 sm:py-2 rounded-full shadow-lg">
                        <Link
                            href="https://maps.app.goo.gl/DGxDRsNQrGAzR9Ym8"
                            target="_blank"
                            className="text-xs sm:text-sm text-[#FF4500] font-medium hover:text-[#FF2200] transition-colors"
                        >
                            View larger map
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
} 