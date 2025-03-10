import React from 'react';
import Image from 'next/image';

export default function Points() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image with Blur */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/Points-Background.png"
          alt="Background"
          fill
          priority
          className="object-cover blur-sm"
          quality={75}
          sizes="100vw"
        />
        {/* Add blur overlay */}
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
      </div>
      
      {/* Content Container - adjusted padding for mobile */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 sm:space-y-12 lg:space-y-16">
        {/* Points Mechanism Section */}
        <section className="space-y-4 sm:space-y-6 lg:space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#FF4500] pb-4">
                Points Mechanism
            </h2>
          {/* Points Distribution */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              'Win: 3 Points',
              'Draw: 1 Point',
              'Loss: 0 Points'
            ].map((text, index) => (
              <div key={index} className="bg-[#1A1A1A] rounded-full py-3 sm:py-4 px-4 sm:px-8 text-center">
                <p className="text-white text-base sm:text-lg lg:text-xl">{text}</p>
              </div>
            ))}
          </div>

          {/* Penalty Shootout Rule */}
          <div className="bg-[#1A1A1A] rounded-[1.5rem] sm:rounded-[2rem] py-3 sm:py-4 px-4 sm:px-8 text-center w-full">
            <p className="text-white text-base sm:text-lg">
              If a match ends in a tie, it will proceed to a mandatory penalty shootout. The
              team that wins the shootout will receive an additional bonus point.
            </p>
          </div>

          {/* Tiebreaker Criteria */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Explanation Box */}
            <div className="bg-[#1A1A1A] rounded-[1.5rem] sm:rounded-[2rem] py-3 sm:py-4 px-4 sm:px-8 text-center lg:col-span-1">
              <p className="text-white text-base sm:text-lg">
                In the event of a tie in the standings, the following criteria will be used to
                determine the ranking:
              </p>
            </div>
            
            {/* Criteria Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:col-span-2">
              {[
                '1. Goal Difference',
                '2. Goals Scored',
                '3. Goals Conceded',
                '4. Head-to-Head Results'
              ].map((criterion, index) => (
                <div key={index} className="bg-[#1A1A1A] rounded-[1.5rem] sm:rounded-[2rem] py-3 sm:py-4 px-4 sm:px-8 text-center">
                  <p className="text-white text-base sm:text-lg">{criterion}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rules Section */}
        <section className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#FF4500] mb-8 sm:mb-12">
            Rules
          </h2>
          
          <div className="space-y-3 sm:space-y-4">
            {[
              { rule: "Offside: Under 12 = No Offside. Under 15 = Offside Applies" },
              { rule: "Back Passes: Strictly Prohibited." },
              { rule: "Red Card: Receipt of a red card results in a one-match ban." },
              { rule: "Official FIFA Rules: These will apply unless otherwise stated." },
              { rule: "Match Rescheduling: To request a rescheduling, teams must submit their request at least 14 days before the match. Failure to meet this deadline will result in a 3-0 loss." },
              { rule: "Kick-off Readiness: Teams must arrive 30 minutes prior to kick-off for warm-up and vetting. Teams not ready for kick-off at the assigned time will incur a 3-0 walkover." },
              { rule: "Player Registration: Players who are not registered or do not have a player card on game day will not be allowed to play." },
              { rule: "Kits: All players on the field (except for the goalkeeper) must wear matching kits; otherwise, they will not be allowed to play." },
              { rule: "Weather Cancellations: Matches cancelled due to adverse weather will be communicated at least one day in advance." },
              { rule: "Age Cheating: Any team found to be age cheating will have the over-aged players banned from the league, with prior matches counted as 3-0 losses. A second offense will result in the team's elimination." },
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-r from-[#FF4500] to-[#FF6B00] rounded-[1.2rem] sm:rounded-[1.618rem] p-4 sm:p-6 
                          shadow-lg hover:shadow-xl hover:from-[#FF2200] hover:to-[#FF4500] 
                          transition-all duration-300 hover:scale-[1.02]"
              >
                <p className="text-white text-base sm:text-lg">
                  {`${index + 1}. ${item.rule}`}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
