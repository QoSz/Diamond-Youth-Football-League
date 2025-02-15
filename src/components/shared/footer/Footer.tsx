import { Instagram, Facebook } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black py-6 relative z-20 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-6">
          <p className="text-lg font-semibold bg-gradient-to-r from-[#FF4500] to-[#FF6B00] text-transparent bg-clip-text">
            Follow Our Socials
          </p>
          
          <div className="flex space-x-6">
            <Link 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <Instagram size={24} color="#E4405F" />
            </Link>
            <Link 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <Facebook size={24} color="#1877F2" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
