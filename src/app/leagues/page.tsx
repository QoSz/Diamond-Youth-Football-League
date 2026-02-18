import type { Metadata } from 'next';
import LeaguesHero from '@/components/leagues/LeaguesHero';
import AgeGroups from '@/components/leagues/AgeGroups';
import SeasonCalendar from '@/components/leagues/SeasonCalendar';
import LeagueFormatTable from '@/components/leagues/LeagueFormatTable';
import PointsSystem from '@/components/leagues/PointsSystem';
import LeaguesPolicyTabs from '@/components/leagues/LeaguesPolicyTabs';
import RegistrationInfo from '@/components/leagues/RegistrationInfo';
import FeeStructure from '@/components/leagues/FeeStructure';
import AwardsRecognition from '@/components/leagues/AwardsRecognition';
import ResultsFixtures from '@/components/leagues/ResultsFixtures';

export const metadata: Metadata = {
  title: 'Leagues | Age Groups, Fixtures & Registration | DYFL',
  description:
    'Explore DYFL league formats, age groups (Under 12, Under 14, Under 16), season calendar, points system, registration fees, and live results & fixtures for youth football in Nairobi, Kenya.',
  alternates: {
    canonical: 'https://www.dyfl.co.ke/leagues',
  },
  openGraph: {
    title: 'DYFL Leagues — Age Groups, Fixtures & Registration',
    description:
      'League formats, age groups (Under 12, Under 14, Under 16), season calendar, points system, and registration info for youth football in Nairobi, Kenya.',
    url: 'https://www.dyfl.co.ke/leagues',
    type: 'website',
  },
};

const leaguesBreadcrumb = {
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
      name: 'Leagues',
      item: 'https://www.dyfl.co.ke/leagues',
    },
  ],
};

export default function Leagues() {
  return (
    <div className="bg-gradient-to-br from-white via-orange-50/60 to-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(leaguesBreadcrumb) }}
      />
      <LeaguesHero />
      <AgeGroups />
      <SeasonCalendar />
      <LeagueFormatTable />
      <PointsSystem />
      <LeaguesPolicyTabs />
      <RegistrationInfo />
      <FeeStructure />
      <AwardsRecognition />
      <ResultsFixtures />
    </div>
  );
}
