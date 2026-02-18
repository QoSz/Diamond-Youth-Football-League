import { Instagram, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import CopyrightYear from './CopyrightYear';

const Footer = () => {
  return (
    <footer className="bg-black py-8 relative z-20 mt-auto">
      <div className="container mx-auto px-4">
        {/* Logo Section */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center rounded-xl bg-white p-1 shadow">
            <Image
              src="/dyfl-logo.svg"
              alt="Diamond Youth Football League logo"
              width={192}
              height={192}
              className="h-24 w-auto md:h-28 lg:h-32 object-contain"
              sizes="(max-width: 768px) 6rem, (max-width: 1024px) 7rem, 8rem"
            />
          </div>
          <span className="sr-only">Diamond Youth Football League</span>
        </div>

        {/* Footer Navigation */}
        <nav aria-label="Footer navigation" className="flex justify-center gap-6 mb-6">
          <Link href="/" className="text-sm text-white/70 hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm text-white/70 hover:text-white transition-colors">
            About
          </Link>
          <Link href="/leagues" className="text-sm text-white/70 hover:text-white transition-colors">
            Leagues
          </Link>
        </nav>

        {/* Contact & Socials Row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          {/* Phone Section */}
          <div className="flex items-center gap-2 group">
            <Phone className="w-5 h-5 text-orange-400" />
            <a
              href="tel:+254750920779"
              className="text-orange-400 hover:text-orange-300 transition-colors font-medium"
            >
              07509 20779
            </a>
          </div>

          {/* Vertical divider */}
          <div className="h-px w-16 bg-orange-200 md:h-6 md:w-px"></div>

          {/* Social Media Section */}
          <div className="flex items-center gap-4">
            <span className="text-orange-400 font-medium">Follow Our Socials:</span>
            <Link
              href="https://www.instagram.com/diamondyouthfootballleague/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Follow Diamond Youth Football League on Instagram"
            >
              <Instagram className="w-5 h-5 text-orange-400" />
            </Link>
          </div>
        </div>

        <div className="h-px w-full bg-orange-200 my-6"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-white/80">
            © <CopyrightYear /> Diamond Youth Football League. All rights reserved.
          </p>
          <p className="text-sm text-white/60 mt-2">Nairobi, Kenya</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
