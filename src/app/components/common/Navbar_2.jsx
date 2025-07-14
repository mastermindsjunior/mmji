
'use client';

import { MenuIcon, XIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const links = ['Home', 'About', 'Services', 'Career', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 ${scrolled ? 'bg-black/50' : 'bg-transparent'} backdrop-blur-md`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-12 py-4">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo-india.png"
            alt="MasterMinds Junior"
            width={160}
            height={40}
            className="h-16 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-8 font-jost text-white">
          {links.map((label) => (
            <Link
              key={label}
              href={label === 'Home' ? '/' : `/${label}`}
              className="relative group px-1 hover:text-primary-blue transition-colors text-lg"
            >
              {label}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          ))}
        </nav>

        {/* CTA Button (desktop) */}
        <div className="hidden lg:block space-x-2">
          <Link
            href="/quote"
            className="px-6 py-2 bg-primary-blue text-black font-sfth rounded-full hover:opacity-90 transition-opacity"
          >
            Get a Quote
          </Link>
          <Link
            href="/contact"
            className="px-6 py-2 bg-primary-orange text-white font-sfth rounded-full hover:opacity-90 transition-opacity"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-md text-white hover:bg-white/20 transition"
        >
          {open ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-black/80 backdrop-blur-md">
          <nav className="flex flex-col space-y-4 px-6 py-6 font-jost text-white">
            {links.map((label) => (
              <Link
                key={label}
                href={label === 'Home' ? '/' : `/${label.toLowerCase()}`}
                className="hover:text-primary-blue transition-colors"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/quote"
              className="mt-2 inline-block px-6 py-2 bg-primary-blue text-black font-jost rounded-full hover:opacity-90 transition-opacity"
            >
              Get a Quote
            </Link>
            <Link
              href="/quote"
              className="mt-2 inline-block px-6 py-2 bg-primary-blue text-black font-jost rounded-full hover:opacity-90 transition-opacity"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}