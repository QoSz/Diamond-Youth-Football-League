import Link from 'next/link';
import { CheckCircle2, XCircle, CalendarCheck, Users, ShieldCheck } from 'lucide-react';

export default function LeagueValue() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Main Question */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
          Tired of poorly organized leagues hindering your team&apos;s progress?
        </h2>

        {/* Problems Section */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Avoid the Frustration of Poorly Run Leagues:
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {["Chaotic league organization creates confusion.",
              "Last-minute scheduling changes frustrate teams.",
              "Insufficient game time limits player development.",
              "Age cheating ruins fair play integrity.",
              "Inconsistent refereeing compromises safety."
            ].map((problem, index) => (
              <div key={index} className="group bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm hover:border-[#FF4500] transition-all">
                <XCircle className="w-9 h-9 mb-4 text-red-500 stroke-[1.5]" />
                <p className="text-gray-800 text-lg">{problem}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Solution Section */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Join a League That Values Consistency:
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              "Reliable match scheduling system",
              "Maximum player development opportunities",
              "Certified referees for fair play",
              "Mandatory player ID verification"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center p-6 bg-gray-50 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <CheckCircle2 className="w-9 h-9 text-green-500 mr-4 flex-shrink-0 stroke-[1.5]" />
                <p className="text-gray-800 text-lg font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Steps Section */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            3 Simple Steps to Success
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Visit a live match",
                icon: <Users className="w-14 h-14 mb-4 text-[#FF4500] stroke-[1.5]" />
              },
              {
                step: "2",
                title: "Complete registration",
                icon: <CalendarCheck className="w-14 h-14 mb-4 text-[#FF4500] stroke-[1.5]" />
              },
              {
                step: "3",
                title: "Enjoy competitive play",
                icon: <ShieldCheck className="w-14 h-14 mb-4 text-[#FF4500] stroke-[1.5]" />
              }
            ].map((step, index) => (
              <div key={index} className="text-center p-8 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:-translate-y-2 transition-transform">
                {step.icon}
                <div className="text-2xl font-bold text-[#FF4500] mb-2">Step {step.step}</div>
                <p className="text-gray-800 text-xl font-semibold">{step.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#1A1A1A]">
            Your Frustration Ends Here
          </h3>
          <p className="text-xl text-gray-700 mb-8">
            Experience the difference of professional league management.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 rounded-lg bg-[#FF4500] text-white font-semibold hover:bg-[#FF2200] transition-colors text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            Claim Your Team&apos;s Spot Now
            <svg 
              className="ml-2 w-5 h-5" 
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