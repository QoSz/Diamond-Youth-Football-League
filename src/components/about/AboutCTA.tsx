import { Phone } from 'lucide-react';

export default function AboutCTA() {
  return (
    <section className="mx-auto mt-12 max-w-3xl text-center">
      <div className="rounded-[1.618rem] border border-orange-100 bg-white p-6 shadow-xl">
        <h2 className="text-lg font-semibold text-transparent bg-gradient-to-r from-[#FF4500] to-[#FF6B00] bg-clip-text">
          Provide your young athletes with the competitive experiences they deserve!
        </h2>
        <a
          href="tel:+254750920779"
          className="mt-6 inline-flex items-center rounded-[1.618rem] bg-gradient-to-r from-[#FF4500] to-[#FF6B00] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform duration-300 hover:from-[#FF2200] hover:to-[#FF4500] hover:scale-105 hover:shadow-xl"
        >
          <Phone className="mr-2 h-5 w-5" />
          Join Our League
        </a>
      </div>
    </section>
  );
}
