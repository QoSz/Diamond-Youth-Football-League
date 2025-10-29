import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Image from 'next/image';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
    return (
        <main className="relative min-h-screen py-16 px-4 md:px-8">
            {/* Background Image */}
            <div className="fixed inset-0 z-0">
                <Image
                    src="https://placehold.co/1600x900?text=Contact+Background"
                    alt="Contact Background"
                    fill
                    priority
                    quality={75}
                    className="object-cover object-top"
                    sizes="100vw"
                />
                {/* Blur Overlay */}
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#FF4500]">
                    Contact Us
                </h1>
                
                <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
                    {/* Get in Touch Card */}
                    <div className="w-full lg:w-5/12">
                        <div className="bg-white rounded-[1.618rem] p-4 sm:p-8 shadow-xl border border-orange-100">
                            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center text-[#FF4500]">
                                Get in touch with us...
                            </h2>
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

                    {/* Divider with OR */}
                    <div className="flex flex-col items-center justify-center lg:h-96">
                        <div className="w-px h-full bg-gray-300 hidden lg:block"></div>
                        <div className="px-4 py-2 bg-white rounded-full shadow-md text-gray-500 font-medium">
                            OR
                        </div>
                        <div className="w-px h-full bg-gray-300 hidden lg:block"></div>
                    </div>

                    {/* Contact Form */}
                    <div className="w-full lg:w-5/12">
                        <div className="bg-white rounded-[1.618rem] p-4 sm:p-8 shadow-xl border border-orange-100">
                            <form className="space-y-6">
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                            First Name
                                        </label>
                                        <Input id="name" placeholder="Enter your First Name" />
                                    </div>
                                    <div>
                                        <label htmlFor="surname" className="block text-sm font-medium text-gray-700 mb-1">
                                            Surname
                                        </label>
                                        <Input id="surname" placeholder="Enter your Surname" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                            Email
                                        </label>
                                        <Input id="email" type="email" placeholder="Enter your Email" />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                            Phone Number
                                        </label>
                                        <Input 
                                            id="phone" 
                                            type="tel" 
                                            placeholder="Enter your Phone Number"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                            Message
                                        </label>
                                        <Textarea id="message" placeholder="Enter your Message" className="min-h-[120px]" />
                                    </div>
                                </div>
                                <Button type="submit" className="w-full bg-[#FF4500] hover:bg-[#FF4500]/90">
                                    Submit
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="relative h-[400px] rounded-[1.618rem] overflow-hidden shadow-xl">
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
        </main>
    );
}
