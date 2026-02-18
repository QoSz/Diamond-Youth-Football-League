export default function AwardsRecognition() {
  return (
    <div className="py-10 px-4 max-w-2xl mx-auto w-full">
      <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/5 rounded-[1.618rem] p-6 text-white shadow-lg">
        <div className="w-8 h-0.5 bg-[#FF4500] mx-auto mb-3 rounded-full" />
        <h2 className="text-xl font-bold tracking-tight mb-4 text-[#FF4500] text-center">Awards & Recognition</h2>
        <p className="text-green-50/90 text-sm md:text-base text-center mb-4">
          Each season, the Diamond Youth Football League recognises player effort, commitment, and
          development through team and individual awards, which may include trophies, medals, or
          certificates.
        </p>
        <ul className="space-y-2 text-green-50/80 text-sm md:text-base list-disc list-inside">
          <li>Awards costs are <span className="font-semibold text-green-50/90">not included</span> in league fees.</li>
          <li>Awards are funded through <span className="font-semibold text-green-50/90">sponsorship and external support</span>.</li>
          <li>Categories and quantities may vary each season based on sponsorship.</li>
        </ul>
      </div>
    </div>
  );
}
