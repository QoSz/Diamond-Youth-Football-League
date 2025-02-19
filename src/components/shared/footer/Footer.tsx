import { Instagram, Phone } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black py-8 relative z-20 mt-auto">
      <div className="container mx-auto px-4">
        {/* Logo Section */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-[#ff4500] to-[#ff6347] bg-clip-text text-transparent">
            Diamond Youth Football League
          </h2>
        </div>

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
            >
              <Instagram className="w-5 h-5 text-orange-400" />
            </Link>
          </div>
        </div>

        <div className="h-px w-full bg-orange-200 my-6"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-white/80">
            © {new Date().getFullYear()} Diamond Youth Football League. All rights reserved.
          </p>
          <p className="text-sm text-white/60 mt-2">Nairobi, Kenya</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
