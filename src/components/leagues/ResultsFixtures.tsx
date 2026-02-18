import { ChevronRight } from 'lucide-react';

export default function ResultsFixtures() {
  return (
    <div className="py-10 px-4">
      <div className="max-w-2xl mx-auto bg-[#FFE7C9] p-8 rounded-[1.618rem]">
        <div className="w-8 h-0.5 bg-[#FF4500] mx-auto mb-3 rounded-full" />
        <h2 className="text-2xl text-center font-bold tracking-tight text-gray-800 mb-3">
          Results & Fixtures
        </h2>
        <p className="text-gray-700 text-center mb-6 text-base">
          Follow the league for the current season
        </p>
        <div className="flex justify-center">
          <a
            href="https://docs.google.com/spreadsheets/d/1QJUVMHUSulo_1pbuAG8MKp6JE4GSre6CBcdnzRD6a34/edit?gid=897614525#gid=897614525"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#FF4500] text-white px-8 py-3 rounded-full text-base font-semibold hover:bg-[#FF5500] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            Results and Fixtures
            <ChevronRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
