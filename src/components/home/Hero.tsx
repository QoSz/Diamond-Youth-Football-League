import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-black to-[#1A1A1A] overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-8">
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            Diamond Youth Football League
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Reliable League
            <span className="block bg-gradient-to-r from-[#FF4500] to-[#FF6B00] text-transparent bg-clip-text">
              Exceptional Experiences
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl">
            Competitive play, dedicated coaching, and a welcoming community to help every young athlete grow on and off the field.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/leagues"
              className="inline-flex items-center px-6 py-3 rounded-[1.618rem] bg-gradient-to-r from-[#FF4500] to-[#FF6B00] text-white font-semibold hover:opacity-90 transition-opacity text-sm sm:text-base"
            >
              Join League
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
      </div>
    </section>
  );
}

