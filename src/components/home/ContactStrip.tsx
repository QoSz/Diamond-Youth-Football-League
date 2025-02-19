import Link from 'next/link';
import { Phone, Instagram } from 'lucide-react';

export default function ContactStrip() {
  return (
    <div className="w-full bg-gradient-to-r from-amber-50 to-orange-50 border-b border-orange-100 shadow-sm">
      <div className="px-4 py-2 w-full flex justify-center">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          {/* Phone Section */}
          <div className="flex items-center gap-2 group">
            <Phone className="w-5 h-5 text-orange-600 group-hover:text-orange-700 transition-colors" />
            <a 
              href="tel:+254750920779"
              className="text-orange-800 hover:text-orange-900 font-medium transition-colors"
            >
              07509 20779
            </a>
          </div>

          {/* Vertical divider */}
          <div className="h-px w-16 bg-orange-200 md:h-6 md:w-px"></div>

          {/* Social Media Section */}
          <div className="flex items-center gap-4">
            <span className="text-orange-800 font-medium">Follow Our Socials:</span>
            <Link
              href="https://www.instagram.com/diamondyouthfootballleague/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-orange-100 hover:bg-orange-200 transition-colors group"
            >
              <Instagram className="w-5 h-5 text-orange-600 group-hover:text-orange-700 transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 