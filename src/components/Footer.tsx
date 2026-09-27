import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="col-span-1 md:col-span-4">
            <Link href="/" className="inline-block mb-8">
              <Image src="/logo.png" alt="Bengal Cyber" width={160} height={50} className="object-contain h-10 w-auto brightness-0 invert" />
            </Link>
            <p className="text-gray-400 max-w-sm mb-6 leading-relaxed">
              Bengal Cyber is a creative marketing agency that accelerates brand growth through data-driven Media Buying, Social Media Marketing, Graphic Design, Video Editing, and world-class Customer Service.
            </p>
            <div className="space-y-2 mb-8 text-xs text-gray-400">
              <p><span className="text-white font-semibold">Headquarters:</span> The Business Center, Gulshan 1, Dhaka</p>
              <p><span className="text-white font-semibold">Secondary Office:</span> Dream Palace: 2, Road 11-12, AlamNagar Housing, Hemayetpur, Savar</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary transition-all duration-300 hover:-translate-y-1">
                <FaFacebook className="w-5 h-5 text-gray-300 hover:text-white" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary transition-all duration-300 hover:-translate-y-1">
                <FaTwitter className="w-5 h-5 text-gray-300 hover:text-white" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary transition-all duration-300 hover:-translate-y-1">
                <FaLinkedin className="w-5 h-5 text-gray-300 hover:text-white" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary transition-all duration-300 hover:-translate-y-1">
                <FaInstagram className="w-5 h-5 text-gray-300 hover:text-white" />
              </a>
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-2 md:col-start-7">
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="/about" className="text-gray-400 hover:text-brand-primary transition-colors">About Us</a></li>
              <li><a href="/career" className="text-gray-400 hover:text-brand-primary transition-colors">Career</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-brand-primary transition-colors">Team</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-brand-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-lg font-bold mb-6">Support</h4>
            <ul className="space-y-4">
              <li><a href="#faq" className="text-gray-400 hover:text-brand-primary transition-colors">FAQ</a></li>
              <li><a href="#process" className="text-gray-400 hover:text-brand-primary transition-colors">Process</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-brand-primary transition-colors">Services</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="text-lg font-bold mb-6">Legal Policies</h4>
            <ul className="space-y-4">
              <li><a href="#terms" className="text-gray-400 hover:text-brand-primary transition-colors">Terms & Conditions</a></li>
              <li><a href="#privacy" className="text-gray-400 hover:text-brand-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Bengal Cyber. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
