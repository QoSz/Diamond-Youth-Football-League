import type { Metadata } from 'next';
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/shared/navigation/Navigation";
import Footer from "@/components/shared/footer/Footer";

const inter = Inter({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.dyfl.co.ke'),
  title: {
    default: 'Diamond Youth Football League | Youth Football Nairobi',
    template: '%s | Diamond Youth Football League',
  },
  description:
    'The Diamond Youth Football League organizes competitive, well-organized youth football in Nairobi, Kenya for Under 12, Under 14, and Under 16 age groups. Register your team today.',
  keywords: [
    'youth football league Nairobi',
    'kids football Kenya',
    'under 12 football Nairobi',
    'under 14 football league Kenya',
    'under 16 football Nairobi',
    'youth football registration Nairobi',
    'DYFL',
    'Diamond Youth Football League',
    'youth football Westlands',
  ],
  authors: [{ name: 'Diamond Youth Football League', url: 'https://www.dyfl.co.ke' }],
  creator: 'Diamond Youth Football League',
  publisher: 'Diamond Youth Football League',
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://www.dyfl.co.ke',
    siteName: 'Diamond Youth Football League',
    title: 'Diamond Youth Football League | Youth Football in Nairobi, Kenya',
    description:
      'Competitive, well-organized youth football in Nairobi, Kenya. Under 12, Under 14, and Under 16 age groups. Register your team today.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Diamond Youth Football League — Youth Football in Nairobi, Kenya',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diamond Youth Football League | Youth Football in Nairobi, Kenya',
    description:
      'Competitive, well-organized youth football in Nairobi, Kenya. Under 12, Under 14, Under 16.',
    images: [{ url: '/opengraph-image', alt: 'Diamond Youth Football League — Youth Football in Nairobi, Kenya' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.dyfl.co.ke',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SportsOrganization',
  name: 'Diamond Youth Football League',
  alternateName: 'DYFL',
  url: 'https://www.dyfl.co.ke',
  logo: 'https://www.dyfl.co.ke/dyfl-logo.png',
  image: 'https://www.dyfl.co.ke/dyfl-logo.png',
  description:
    'Competitive, well-organized youth football league in Nairobi, Kenya for Under 12, Under 14, and Under 16 age groups.',
  sport: 'Football',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Farasi Lane Primary School',
    addressLocality: 'Westlands',
    addressRegion: 'Nairobi',
    addressCountry: 'KE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -1.2428615,
    longitude: 36.7588813,
  },
  telephone: '+254750920779',
  email: 'info@diamondfc.co.ke',
  sameAs: [
    'https://www.instagram.com/diamondyouthfootballleague/',
  ],
  foundingDate: '2024-09',
  areaServed: {
    '@type': 'City',
    name: 'Nairobi',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '08:00',
    closes: '17:00',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-KE">
      <body className={`${inter.className} antialiased flex flex-col min-h-screen`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
