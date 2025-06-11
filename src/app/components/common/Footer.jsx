import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full mt-8 bg-[#000] relative z-30 text-white px-[10%] py-12">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 items-start text-sm gap-10 text-center md:text-left">
        
        {/* Left - Navigation */}
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-semibold mb-2">Navigation</h4>
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Services</a>
          <a href="#" className="hover:underline">Blog</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>

        {/* Center - Logo & Description */}
        <div className="flex flex-col items-center justify-center text-center">
            <Image
            src={"/logo-india.png"}
            width={400}
            height={200}
            alt="logo"
            className="2xl:h-20 h-16 w-auto object-contain"
          />
          <p className="text-white/70 max-w-xs">
            Building better digital experiences through design, code, and creativity.
          </p>
        </div>

        {/* Right - Contact Info */}
        <div className="flex flex-col gap-2 md:items-end">
          <h4 className="text-lg font-semibold mb-2">Contact</h4>
          <p>Email: hello@example.com</p>
          <p>Phone: +1 234 567 8901</p>
          <p>Location: San Francisco, CA</p>
        </div>
      </div>

      {/* Bottom - Copyright */}
      <div className="mt-12 pt-4 border-t border-white/20 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Masterminds Junior. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
