import { Facebook, Instagram } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


// 
const Footer = () => {
  return (
    <footer className="w-[calc(100%-2rem)] mx-auto mb-4  bg-[#000] z-30 text-white px-[10%] py-12 relative border border-gray-700 border-t-primary-blue rounded-3xl ">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 items-start text-sm gap-10 text-center md:text-left">

        {/* left - Logo & Description */}

        <div className="flex flex-col items-center justify-center text-center ">
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
          <div className=' flex justify-center items-center gap-2 pt-2'>
            <Link href={'https://www.instagram.com/mastermindsjunior_india/'}>
              <Instagram color='#fff' className='' />
            </Link>
            <Link href={'https://www.facebook.com/profile.php?id=61563957392798'}>
              <Facebook color='#fff' className='' />
            </Link>
          </div>
        </div>

        {/* right - Navigation */}
        <div className="flex flex-col gap-2 md:items-end">
          <h4 className="text-lg font-semibold mb-2">Navigation</h4>
          <a href="/" className="hover:underline">Home</a>
          <a href="/About" className="hover:underline">About</a>
          <a href="/Services" className="hover:underline">Services</a>
          <a href="/Career" className="hover:underline">Career</a>
          <a href="/Contact" className="hover:underline">Contact</a>
        </div>

        {/* right - Navigation */}
        <div className="flex flex-col gap-2 md:items-end">
          <h4 className="text-lg font-semibold mb-2">Services</h4>
          <a href="#" className="hover:underline">SEO Optimization</a>
          <a href="#" className="hover:underline">Graphic Designing</a>
          <a href="#" className="hover:underline">Content Writing</a>
          <a href="#" className="hover:underline">Web Development</a>
          <a href="#" className="hover:underline">Social Media Marketing</a>
        </div>

        {/* Right - Contact Info */}
        <div className="flex flex-col gap-2 md:items-end text-right">
          <h4 className="text-lg font-semibold mb-2">Contact</h4>
          <p>Email: admin@mastermindsjunior.com</p>
          <p>Phone: +1 234 567 8901</p>
          <p>Location: 1st Floor, Unit# 105, P NO 8, near VPM Classes, B yojna, Radha kunj, Mansarovar, Jaipur, Rajasthan 302020</p>
        </div>
      </div>

      {/* Bottom - Copyright */}
      <div className="mt-12 pt-4 border-t border-white/20 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Masterminds Junior. All rights reserved.
      </div>

      <div className=' absolute z-0 bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-24 bg-blue-600 rounded-t-[100%] blur-3xl opacity-20' />
    </footer>
  );
};

export default Footer;
