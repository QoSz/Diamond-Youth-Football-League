import { CheckCircle2, CalendarCheck, ShieldCheck, AlertTriangle, Clock, ShieldOff, Eye, ClipboardList, Trophy, Phone } from 'lucide-react';

export default function LeagueValue() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-orange-50 to-white animate-gradient-shift"></div>

      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
          Are you tired of poorly organized leagues hindering your team&apos;s progress?
        </h2>

        {/* Problems Section - added gradient effect */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#FF4500] to-[#FF8C00]">
            Avoid the Frustration of Poorly Run Leagues:
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              "Poorly organized youth leagues lead to chaos and frustration",
              "Insufficient game time limits player development",
              "Age cheating undermines fair play and integrity"
            ].map((problem, index) => (
              <div key={index}
                className="flex flex-col items-center p-6 bg-gradient-to-br from-white to-red-50 rounded-[1.618rem] 
                          border border-red-100 shadow-lg hover:shadow-2xl hover:scale-105 
                          transition-all duration-300 group text-center">
                <div className="mb-4">
                  {[
                    <AlertTriangle key="alert" className="w-12 h-12 text-red-500 stroke-[1.5]" />,
                    <Clock key="clock" className="w-12 h-12 text-red-500 stroke-[1.5]" />,
                    <ShieldOff key="shield" className="w-12 h-12 text-red-500 stroke-[1.5]" />
                  ][index]}
                </div>
                <p className="text-gray-800 text-lg font-medium">{problem}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Solution Section - with glowing cards */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400">
            Join a League That Values Consistency:
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              "Experience smooth match scheduling every time",
              "High frequency and high duration matches",
              "Age verification and Player ID cards"
            ].map((benefit, index) => (
              <div key={index}
                className="flex flex-col items-center p-6 bg-gradient-to-br from-white to-green-50 rounded-[1.618rem] 
                          border border-green-100 shadow-md hover:shadow-green-200/50 hover:scale-105
                          transition-all duration-300 group text-center">
                <div className="mb-4">
                  {[
                    <CalendarCheck key="calendar" className="w-12 h-12 text-green-500 stroke-[1.5]" />,
                    <CheckCircle2 key="check" className="w-12 h-12 text-green-500 stroke-[1.5]" />,
                    <ShieldCheck key="shield-check" className="w-12 h-12 text-green-500 stroke-[1.5]" />
                  ][index]}
                </div>
                <p className="text-gray-800 text-lg font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center my-12">
          <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF4500] to-[#FF8C00] mb-4">
            With a successful first season, we prioritize quality gameplay.
          </h3>
          <p className="text-xl text-gray-700">
            100% of teams reported a better experience than previous leagues.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            <span className="relative">
              3 Simple Steps to Join Us
            </span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Come See Our League in Action",
                icon: <div className="flex justify-center"><Eye className="w-14 h-14 mb-4 text-[#ff6d00] stroke-[1.5]" /></div>
              },
              {
                step: "2",
                title: "Register Your Team",
                icon: <div className="flex justify-center"><ClipboardList className="w-14 h-14 mb-4 text-[#ff6d00] stroke-[1.5]" /></div>
              },
              {
                step: "3",
                title: "Enjoy Competitive Games All Year Long",
                icon: <div className="flex justify-center"><Trophy className="w-14 h-14 mb-4 text-[#ff6d00] stroke-[1.5]" /></div>
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
            Your journey to a better league experience starts now!
          </p>
          <a
            href="tel:+254750920779"
            className="inline-flex items-center px-8 py-4 rounded-[1.618rem] bg-gradient-to-r from-[#FF4500] to-[#FF6B00] 
                     text-white font-semibold hover:from-[#FF2200] hover:to-[#FF4500] transition-all duration-300
                     text-md shadow-lg hover:shadow-xl hover:scale-105 animate-pulse-slow group"
          >
            <Phone
              className="mr-2 w-6 h-6 md:w-5 md:h-5 transition-transform"
            />
            Claim Your Team&apos;s Spot Now
          </a>
        </div>
      </div>
    </section>
  );
}