import Link from 'next/link';
import { HeroCarousel } from './HeroClient';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-black to-[#1A1A1A] overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 h-full py-12">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:gap-2 items-center justify-items-center">
          {/* Text Content */}
          <div className="relative z-10 space-y-6 text-center lg:text-left lg:pr-8">
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Reliable League
              <span className="block bg-gradient-to-r from-[#FF4500] to-[#FF6B00] text-transparent bg-clip-text">
                Exceptional Experiences
              </span>
            </h1>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded-[1.618rem] bg-gradient-to-r from-[#FF4500] to-[#FF6B00] text-white font-semibold hover:opacity-90 transition-opacity text-base sm:text-lg"
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
              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3 rounded-[1.618rem] border-2 border-[#FF4500] text-white font-semibold hover:bg-gradient-to-r hover:from-[#FF4500] hover:to-[#FF6B00] hover:border-transparent transition-all text-base sm:text-lg"
              >
                About Us
              </Link>
            </div>
          </div>

          {/* Carousel Section */}
          <div className="relative w-full order-last lg:pl-8">
            <HeroCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}

