import type { Metadata } from 'next';
import Hero from "@/components/home/Hero";
import LeagueValue from "@/components/home/LeagueValue";
import ContactStrip from "@/components/home/ContactStrip";

export const metadata: Metadata = {
  title: 'Diamond Youth Football League | Youth Football in Nairobi, Kenya',
  description:
    'Join the Diamond Youth Football League in Nairobi, Kenya. Competitive football for Under 12, Under 14, and Under 16 age groups. Register your team today.',
  alternates: {
    canonical: 'https://www.dyfl.co.ke',
  },
  openGraph: {
    title: 'Diamond Youth Football League | Youth Football in Nairobi, Kenya',
    description:
      'Join the Diamond Youth Football League in Nairobi, Kenya. Competitive football for Under 12, Under 14, and Under 16. Register your team today.',
    url: 'https://www.dyfl.co.ke',
    type: 'website',
  },
};

export default function Home() {
  return (
    <>
      <ContactStrip />
      <Hero />
      <LeagueValue />
    </>
  );
}
