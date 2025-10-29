// This is the about page

import { Phone } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-white px-4 py-12">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-transparent md:text-5xl bg-gradient-to-r from-[#FF4500] to-[#FF6B00] bg-clip-text">
          About Us
        </h1>
      </div>

      <section className="mx-auto mt-10 max-w-3xl text-center">
        <p className="text-xl leading-relaxed text-gray-800">
          Every young footballer deserves a fair chance to shine on the field, yet far too many budding
          football stars find themselves frustrated by poorly organized leagues that leave them feeling
          defeated before the game even begins. Just like you, we faced the same challenges - endless delays,
          inadequate playing time, inconsistent refereeing and age cheating. We needed a better league for our
          children a league that would offer not just matches, but meaningful, competitive experiences.
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-3xl text-center">
        <h2 className="text-2xl font-semibold text-transparent md:text-3xl bg-gradient-to-r from-[#FF4500] to-[#FF6B00] bg-clip-text">
          Our Journey
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-gray-800">
          In September 2024, fueled by our frustration and a commitment to elevate youth football, we set out
          to create a league that puts the players first. We understood that a strong foundation relies on
          world-class basics; thus, we established a model built around keeping time, high-frequency matches,
          advanced scheduling and proper refereeing.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-gray-800">
          With a successful Season 1 that received rave reviews from participating teams, the Diamond Youth
          Football League quickly became a beacon of hope for teams, parents and players alike, proving that
          league experiences can be organized, competitive, and inspiring.
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-3xl text-center">
        <h2 className="text-2xl font-semibold text-transparent md:text-3xl bg-gradient-to-r from-[#FF4500] to-[#FF6B00] bg-clip-text">
          Our Vision
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-gray-800">
          Imagine feeling confident as a coach, knowing that your team is participating in a structured,
          well-managed league. Picture the joy on your players&apos; faces as they compete against other dedicated
          teams, all while enjoying ample game time and development opportunities. This is not just a vision
          it&apos;s a reality for those who choose to join the Diamond Youth Football League.
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-3xl text-center">
        <div className="rounded-[1.618rem] border border-orange-100 bg-white p-6 shadow-xl">
          <h2 className="text-xl font-semibold text-transparent bg-gradient-to-r from-[#FF4500] to-[#FF6B00] bg-clip-text">
            Provide your young athletes with the competitive experiences they deserve!
          </h2>
          <a
            href="tel:+254750920779"
            className="mt-6 inline-flex items-center rounded-[1.618rem] bg-gradient-to-r from-[#FF4500] to-[#FF6B00] px-6 py-3 text-md font-semibold text-white shadow-lg transition-transform duration-300 hover:from-[#FF2200] hover:to-[#FF4500] hover:scale-105 hover:shadow-xl"
          >
            <Phone className="mr-2 h-5 w-5" />
            Join Our League
          </a>
        </div>
      </section>
    </div>
  );
}

