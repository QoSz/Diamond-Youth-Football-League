import Link from 'next/link';

export default function Services() {
  return (
    <main>
      {/* Services Header */}
      <div className="bg-gradient-to-br from-black to-[#1A1A1A] py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-6">
          Services
        </h1>
        <p className="text-center text-gray-300 max-w-2xl mx-auto text-lg">
          Delivering a high-quality, well-organized, and competitive experience that supports the
          holistic development of young footballers.
        </p>
      </div>

      {/* Service Cards Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Fixtures Card */}
          <Link 
            href="/fixtures"
            className="group bg-white rounded-[1.618rem] p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-orange-100"
          >
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Fixtures</h2>
            <p className="text-gray-600 mb-4">View upcoming fixtures....</p>
            <div className="text-[#FF4500] font-medium group-hover:translate-x-2 transition-transform duration-300">
              Learn more →
            </div>
          </Link>

          {/* Results Card */}
          <Link 
            href="/results"
            className="group bg-white rounded-[1.618rem] p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-orange-100"
          >
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Results</h2>
            <p className="text-gray-600 mb-4">View all results....</p>
            <div className="text-[#FF4500] font-medium group-hover:translate-x-2 transition-transform duration-300">
              Learn more →
            </div>
          </Link>

          {/* Tables Card */}
          <Link 
            href="/tables"
            className="group bg-white rounded-[1.618rem] p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-orange-100"
          >
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Tables</h2>
            <p className="text-gray-600 mb-4">View all tables....</p>
            <div className="text-[#FF4500] font-medium group-hover:translate-x-2 transition-transform duration-300">
              Learn more →
            </div>
          </Link>
        </div>
      </div>

      {/* Calendar Section */}
      <div className="bg-gradient-to-br from-white via-orange-50 to-white py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1A1A1A] mb-12">
            TENTATIVE CALENDAR – 2025
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Season 1 */}
            <div className="bg-[#1A1A1A] rounded-[1.618rem] p-6 text-center text-white">
              <h3 className="text-xl font-bold mb-4">Season 1</h3>
              <p className="text-gray-300">19th January – 30th March</p>
            </div>

            {/* Season 2 */}
            <div className="bg-[#1A1A1A] rounded-[1.618rem] p-6 text-center text-white">
              <h3 className="text-xl font-bold mb-4">Season 2</h3>
              <p className="text-gray-300">27th April – 29th June</p>
            </div>

            {/* Season 3 */}
            <div className="bg-[#1A1A1A] rounded-[1.618rem] p-6 text-center text-white">
              <h3 className="text-xl font-bold mb-4">Season 3</h3>
              <p className="text-gray-300">21st September – 7th December</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
