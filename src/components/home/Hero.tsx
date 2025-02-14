import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[600px] bg-gradient-to-br from-black to-[#1A1A1A] overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 h-full py-12">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:gap-2 items-center justify-items-center">
          {/* Text Content */}
          <div className="relative z-10 space-y-6 text-center lg:text-left lg:pr-8">
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Develop Your
              <span className="block bg-gradient-to-r from-[#FF4500] to-[#FF6B00] text-transparent bg-clip-text">
                Football Skills
              </span>
              Like a Pro...
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl md:text-xl max-w-lg mx-auto lg:mx-0">
              Building tomorrow&apos;s champions through rigorous training and competitive games. 
              Developing tactical skills, sportsmanship, and team pride.
            </p>
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

          {/* Image Side */}
          <div className="relative w-full order-last lg:pl-8">
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full">
              <Image
                src="images/Hero-Image.jpg"
                alt="Young footballer in action"
                fill
                priority
                className="object-cover rounded-[1.618rem]"
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
              />
              {/* Stats overlay */}
              <div className="absolute left-4 -bottom-8 lg:-left-8 lg:bottom-8 bg-white p-3 sm:p-4 rounded-[1.618rem] shadow-xl w-[calc(100%-2rem)] lg:w-auto">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="text-center">
                    <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">250+</p>
                    <p className="text-[10px] sm:text-xs lg:text-sm text-[#FF4500]">Active Players</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">15+</p>
                    <p className="text-[10px] sm:text-xs lg:text-sm text-[#FF4500]">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

