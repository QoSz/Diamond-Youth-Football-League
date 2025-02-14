// This is the about page

import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-white">
      {/* Hero Section */}
      <section className="py-4 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-[#FF4500] to-[#FF6B00] bg-clip-text text-transparent">
          About Us
        </h1>
      </section>

      {/* Mission Statement */}
      <section className="py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-justify text-gray-800 leading-relaxed">
            Every young footballer deserves a fair chance to shine on the field, yet far too many
            budding football stars find themselves frustrated by poorly organized leagues that
            leave them feeling defeated before the game even begins. Just like you, we faced
            the same challenges endless delays, inadequate playing time, inconsistent
            refereeing and age cheating. We needed a better league for their children a league
            that would offer not just matches, but meaningful, competitive experiences.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] rounded-[1.618rem] overflow-hidden shadow-xl">
              <Image
                src="/images/Hero-Image.jpg"
                alt="Youth football match in progress"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl text-center md:text-3xl font-bold mb-6 bg-gradient-to-r from-[#FF4500] to-[#FF6B00] bg-clip-text text-transparent">
                Our Journey
              </h2>
              <p className="text-gray-800 text-lg text-justify leading-relaxed mb-6">
                In September 2024, fueled by our frustration and a commitment to elevate youth football,
                we set out to create a league that puts the players first. We understood that a strong
                foundation relies on world class basics; thus, we established a model built around keeping
                time, high-frequency matches, advanced scheduling and proper refereeing.
              </p>
              <p className="text-gray-800 text-lg text-justify leading-relaxed">
                With a successful Season 1 that received rave reviews from participating teams, the
                Diamond Youth Football League quickly became a beacon of hope for teams, parents
                and players alike, proving that league experiences can be organized, competitive,
                and inspiring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl text-center md:text-3xl font-bold mb-6 bg-gradient-to-r from-[#FF4500] to-[#FF6B00] bg-clip-text text-transparent">
                Our Vision
              </h2>
              <p className="text-gray-800 text-lg text-justify leading-relaxed">
                Imagine feeling confident as a coach, knowing that your team is participating in a
                structured, well-managed league. Picture the joy on your players&apos; faces as they compete
                against other dedicated teams, all while enjoying ample game time and development
                opportunities. This is not just a vision—it&apos;s a reality for those who choose to join the
                Diamond Youth Football League.
              </p>
            </div>
            <div className="relative h-[400px] rounded-[1.618rem] overflow-hidden shadow-xl">
              <Image
                src="/images/Home-LeagueInfo.jpg"
                alt="Team photo of youth football players"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-8 px-4 mb-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[1.618rem] p-8 shadow-xl border border-orange-100 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#FF4500] to-[#FF6B00] bg-clip-text text-transparent">
              Join Our League
            </h2>
            <p className="text-xl text-gray-800 mb-8">
              If you want to escape the chaos of disorganized competitions – join our league. 
              Give your young players the competitive experiences they deserve.
            </p>
            <button className="px-8 py-4 rounded-[1.618rem] bg-gradient-to-r from-[#FF4500] to-[#FF6B00] 
                           text-white font-semibold text-lg shadow-lg hover:shadow-xl 
                           hover:from-[#FF2200] hover:to-[#FF4500] transition-all duration-300 
                           hover:scale-105">
              Register Your Team Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

