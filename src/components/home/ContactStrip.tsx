import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';

export default function ContactStrip() {
  return (
    <div className="py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
          {/* Phone */}
          <Link 
            href="tel:+254727839014"
            className="flex items-center gap-2 sm:gap-3 text-gray-600 hover:text-[#FF4500] transition-colors"
          >
            <div className="bg-orange-50 p-1.5 sm:p-2 rounded-lg">
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF4500]" />
            </div>
            <span className="text-xs sm:text-sm font-medium">+254 727 839 014</span>
          </Link>

          {/* Email */}
          <Link 
            href="mailto:info@diamondfc.co.ke"
            className="flex items-center gap-2 sm:gap-3 text-gray-600 hover:text-[#FF4500] transition-colors"
          >
            <div className="bg-orange-50 p-1.5 sm:p-2 rounded-lg">
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF4500]" />
            </div>
            <span className="text-xs sm:text-sm font-medium">info@diamondfc.co.ke</span>
          </Link>
        </div>
      </div>
    </div>
  );
} 