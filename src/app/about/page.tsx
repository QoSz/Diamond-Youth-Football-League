// This is the about page

import Image from 'next/image';
import { Phone } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-white">
      {/* Updated Title Section without background image */}
      <div className="w-full pt-8 pb-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-[#FF4500] to-[#FF6B00] bg-clip-text text-transparent">
          About Us
        </h1>
      </div>

      {/* Mission Statement */}
      <section className="py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-gray-800 text-center leading-relaxed">
            Every young footballer deserves a fair chance to shine on the field, yet far too many budding
            football stars find themselves frustrated by poorly organized leagues that leave them feeling
            defeated before the game even begins. Just like you, we faced the same challenges - endless
            delays, inadequate playing time, inconsistent refereeing and age cheating. We needed a better
            league for our children a league that would offer not just matches, but meaningful, competitive
            experiences.
          </p>
        </div>
      </section>

      {/* Our Journey Section - Image Left/Text Right */}
      <section className="py-4 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <div className="relative h-[400px] rounded-[1.618rem] overflow-hidden shadow-xl">
              <Image
                src="/images/DYFL-Photos/dyfl-23.jpg"
                alt="Youth football match in progress"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Text Column */}
            <div>
              <h2 className="text-2xl md:text-3xl text-center font-bold mb-6 bg-gradient-to-r from-[#FF4500] to-[#FF6B00] bg-clip-text text-transparent">
                Our Journey
              </h2>
              <p className="text-gray-800 text-center text-lg leading-relaxed mb-4">
                In September 2024, fueled by our frustration and a commitment to elevate youth football,
                we set out to create a league that puts the players first. We understood that a strong
                foundation relies on world class basics; thus, we established a model built around keeping
                time, high-frequency matches, advanced scheduling and proper refereeing.
              </p>
              <p className="text-gray-800 text-center text-lg leading-relaxed">
                With a successful Season 1 that received rave reviews from participating teams, the
                Diamond Youth Football League quickly became a beacon of hope for teams, parents
                and players alike, proving that league experiences can be organized, competitive,
                and inspiring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section - Text Left/Image Right */}
      <section className="py-4 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Column */}
            <div className="order-1 md:order-1">
              <h2 className="text-2xl md:text-3xl text-center font-bold mb-6 bg-gradient-to-r from-[#FF4500] to-[#FF6B00] bg-clip-text text-transparent">
                Our Vision
              </h2>
              <p className="text-gray-800 text-center text-lg leading-relaxed">
                Imagine feeling confident as a coach, knowing that your team is participating in a
                structured, well-managed league. Picture the joy on your players&apos; faces as they compete
                against other dedicated teams, all while enjoying ample game time and development
                opportunities. This is not just a vision it&apos;s a reality for those who choose to join the
                Diamond Youth Football League.
              </p>
            </div>
            
            {/* Image Column */}
            <div className="relative h-[400px] rounded-[1.618rem] overflow-hidden shadow-xl order-2 md:order-2">
              <Image
                src="/images/DYFL-Photos/dyfl-28.jpg"
                alt="Team photo of youth football players"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[1.618rem] p-8 shadow-xl border border-orange-100 text-center">
            <h2 className="text-xl font-bold bg-gradient-to-r from-[#FF4500] to-[#FF6B00] bg-clip-text text-transparent mb-4">
              Provide your young athletes with the competitive experiences they deserve!
            </h2>
            <a
              href="tel:+254750920779"
              className="px-8 py-3 rounded-[1.618rem] bg-gradient-to-r from-[#FF4500] to-[#FF6B00] 
                       text-white font-semibold text-md shadow-lg hover:shadow-xl inline-flex items-center 
                       hover:from-[#FF2200] hover:to-[#FF4500] transition-all duration-300 
                       hover:scale-105 cursor-pointer"
            >
              <Phone className="mr-2 w-6 h-6 md:w-5 md:h-5" />
              Join Our League
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

