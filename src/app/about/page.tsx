import type { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import AboutMission from '@/components/about/AboutMission';
import AboutStory from '@/components/about/AboutStory';
import AboutCTA from '@/components/about/AboutCTA';

export const metadata: Metadata = {
  title: 'About Us | Diamond Youth Football League',
  description:
    'Learn about the Diamond Youth Football League — founded in September 2024 in Nairobi, Kenya to provide fair, competitive, and well-organized youth football experiences for young players.',
  alternates: {
    canonical: 'https://www.dyfl.co.ke/about',
  },
  openGraph: {
    title: 'About the Diamond Youth Football League',
    description:
      'Founded in 2024 in Nairobi, Kenya, DYFL provides fair, competitive, and well-organized youth football for Under 12, Under 14, and Under 16 players.',
    url: 'https://www.dyfl.co.ke/about',
    type: 'website',
  },
};

const aboutBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.dyfl.co.ke',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'About',
      item: 'https://www.dyfl.co.ke/about',
    },
  ],
};

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-white px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutBreadcrumb) }}
      />
      <AboutHero />
      <AboutMission />
      <AboutStory />
      <AboutCTA />
    </div>
  );
}
