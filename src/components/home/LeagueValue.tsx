import Link from 'next/link';
import { CheckCircle2, XCircle, CalendarCheck, Users, ShieldCheck } from 'lucide-react';

export default function LeagueValue() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-orange-50 to-white animate-gradient-shift"></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Main Question - removed underline */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black relative inline-block">
          <span className="relative z-10 text-center">
            Tired of poorly organized leagues hindering your team&apos;s progress?
          </span>
        </h2>

        {/* Problems Section - added gradient effect */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#FF4500] to-[#FF8C00]">
            Avoid the Frustration of Poorly Run Leagues:
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {["Chaotic league organization creates confusion.",
              "Last-minute scheduling changes frustrate teams.",
              "Insufficient game time limits player development.",
              "Age cheating ruins fair play integrity.",
              "Inconsistent refereeing compromises safety."
            ].map((problem, index) => (
              <div key={index} 
                className="flex items-center p-6 bg-gradient-to-br from-white to-red-50 rounded-[1.618rem] 
                          border border-red-100 shadow-lg hover:shadow-2xl hover:scale-105 
                          transition-all duration-300 group">
                <XCircle className="w-9 h-9 text-red-500 mr-4 flex-shrink-0 stroke-[1.5] group-hover:rotate-12 transition-transform" />
                <p className="text-gray-800 text-lg">{problem}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Solution Section - with glowing cards */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400">
            Join a League That Values Consistency:
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              "Reliable match scheduling system",
              "Maximum player development opportunities",
              "Certified referees for fair play",
              "Mandatory player ID verification"
            ].map((benefit, index) => (
              <div key={index} 
                className="flex items-center p-6 bg-gradient-to-br from-white to-green-50 rounded-[1.618rem] 
                          border border-green-100 shadow-md hover:shadow-green-200/50 hover:scale-105
                          transition-all duration-300 group">
                <CheckCircle2 className="w-9 h-9 text-green-500 mr-4 flex-shrink-0 stroke-[1.5] group-hover:scale-110 transition-transform" />
                <p className="text-gray-800 text-lg font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Steps Section - removed underline */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            <span className="relative">
              3 Simple Steps to Success
            </span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Visit a live match",
                icon: <div className="flex justify-center"><Users className="w-14 h-14 mb-4 text-[#ff6d00] stroke-[1.5]" /></div>
              },
              {
                step: "2",
                title: "Complete registration",
                icon: <div className="flex justify-center"><CalendarCheck className="w-14 h-14 mb-4 text-[#ff6d00] stroke-[1.5]" /></div>
              },
              {
                step: "3",
                title: "Enjoy competitive play",
                icon: <div className="flex justify-center"><ShieldCheck className="w-14 h-14 mb-4 text-[#ff6d00] stroke-[1.5]" /></div>
              }
            ].map((step, index) => (
              <div key={index} 
                className="text-center p-8 bg-gradient-to-br from-white to-orange-50 rounded-[1.618rem] 
                          border border-orange-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 
                          transition-all duration-300 transform perspective-1000">
                <div className="group">{step.icon}</div>
                <div className="text-2xl font-bold bg-gradient-to-r from-[#FF4500] to-[#FF8C00] bg-clip-text text-transparent mb-2">
                  Step {step.step}
                </div>
                <p className="text-gray-800 text-xl font-semibold">{step.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section - with pulsing animation */}
        <div className="text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-100 via-white to-orange-100 rounded-[2rem] -z-10"></div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#1A1A1A] to-[#454545] bg-clip-text text-transparent">
            Your Frustration Ends Here
          </h3>
          <p className="text-xl text-gray-700 mb-8">
            Experience the difference of professional league management.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 rounded-[1.618rem] bg-gradient-to-r from-[#FF4500] to-[#FF6B00] 
                     text-white font-semibold hover:from-[#FF2200] hover:to-[#FF4500] transition-all duration-300
                     text-lg shadow-lg hover:shadow-xl hover:scale-105 animate-pulse-slow group"
          >
            Claim Your Team&apos;s Spot Now
            <svg
              className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}