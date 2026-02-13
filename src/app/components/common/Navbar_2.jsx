'use client';

import { MenuIcon, XIcon, ChevronDownIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpportunitiesOpen, setMobileOpportunitiesOpen] = useState(false);

  
  // Define your nav structure
  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/About' },
    { label: 'Services', href: '/Services' },
    {
      label: 'Opportunities',
      children: [
        { label: 'Career', href: '/Career' },
        { label: 'Courses', href: '/courses' },
      ],
    },
    {
      label: 'Locations',
      children: [
        { label: 'Jaipur', href: '/jaipur' },
        { label: 'Nashik', href: '/nashik' },
        { label: 'Chandigarh', href: '/chandigarh' },
        { label: 'Mumbai', href: '/mumbai' },
        { label: 'Delhi', href: '/delhi' },
        { label: 'Hyderabad', href: '/hyderabad' },
        { label: 'Bengaluru', href: '/bengaluru' },
      ],
    },
    { label: 'Contact', href: '/Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 ${
        scrolled ? 'bg-white/50' : 'bg-white/20'
      } backdrop-blur-md`}
    >
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
        <nav className="hidden lg:flex space-x-8 font-jost text-black">
          {links.map((link) =>
            link.children ? (
              <div key={link.label} className="relative group">
                <button className="flex items-center px-1 text-lg hover:text-primary-blue transition-colors">
                  {link.label}
                  <ChevronDownIcon className="w-4 h-4 ml-1" />
                </button>
                <div className="absolute top-full left-0 pt-2 hidden w-40 group-hover:block bg-black/80 backdrop-blur-md rounded-md shadow-lg">
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block px-4 py-2 text-white hover:bg-gray-700 transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="relative group px-1 text-lg hover:text-primary-blue transition-colors"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            )
          )}
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
            className="px-6 py-2 bg-primary-orange text-black font-sfth rounded-full hover:opacity-90 transition-opacity"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden p-2 rounded-md text-black hover:bg-white/20 transition"
        >
          {open ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-black/80 backdrop-blur-md">
          <nav className="flex flex-col space-y-4 px-6 py-6 font-jost text-black">
            {links.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    onClick={() =>
                      setMobileOpportunitiesOpen((o) => !o)
                    }
                    className="w-full flex justify-between items-center py-2 text-left hover:text-primary-blue transition-colors"
                  >
                    {link.label}
                    <ChevronDownIcon
                      className={`w-4 h-4 transform transition-transform ${
                        mobileOpportunitiesOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {mobileOpportunitiesOpen && (
                    <div className="flex flex-col pl-4 space-y-2 ">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="py-1 hover:text-primary-blue transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="py-2 hover:text-primary-blue transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/quote"
              className="mt-2 inline-block px-6 py-2 bg-primary-blue text-black font-jost rounded-full hover:opacity-90 transition-opacity"
            >
              Get a Quote
            </Link>
            <Link
              href="/contact"
              className="mt-2 inline-block px-6 py-2 bg-primary-orange text-black font-jost rounded-full hover:opacity-90 transition-opacity"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
