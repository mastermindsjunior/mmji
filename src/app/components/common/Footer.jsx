import { Facebook, Instagram } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="relative w-full bg-gradient-to-br from-[#020b14] via-[#04162e] to-[#042c5c] text-white pt-20 pb-10 px-6 overflow-hidden">

      {/* top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">

        {/* BRAND */}
        <div className="space-y-4 text-center md:text-left">

          <Image
            src="/logo-india.png"
            width={300}
            height={100}
            alt="logo"
            className="h-20 w-auto object-left"
          />

          <p className="text-white/60 max-w-xs">
            Building better digital experiences through design, code, and creativity.
          </p>

          <div className="flex gap-4 justify-center md:justify-start">

            <Link href="https://www.instagram.com/mastermindsjunior_india/">
              <Instagram className="w-5 h-5 text-white/70 hover:text-white transition" />
            </Link>

            <Link href="https://www.facebook.com/profile.php?id=61563957392798">
              <Facebook className="w-5 h-5 text-white/70 hover:text-white transition" />
            </Link>

          </div>

        </div>

        {/* NAVIGATION */}
        <div className="space-y-3 md:text-right text-center">

          <h4 className="font-semibold text-base mb-3">Navigation</h4>

          {['Home','About','Services','Career','Contact'].map((item) => (
            <Link
              key={item}
              href={`/${item === 'Home' ? '' : item}`}
              className="block text-white/60 hover:text-white transition"
            >
              {item}
            </Link>
          ))}

        </div>

        {/* SERVICES */}
        <div className="space-y-3 md:text-right text-center">

          <h4 className="font-semibold text-base mb-3">Locations</h4>

          {[
            {label:'Jaipur',link:"/jaipur"},
            {label:'Nashik',link:"/nashik"},
            {label:'Chandigarh',link:"/chandigarh"},


          ].map((item) => (
            <Link key={item.link} href={item.link}>
            <span className="block text-white/60">
              {item.label}
            </span>
            </Link>
          ))}

        </div>

        {/* CONTACT */}
        <div className="space-y-3 md:text-right text-center">

          <h4 className="font-semibold text-base mb-3">Contact</h4>

          <p className="text-white/60">admin@mastermindsjunior.com</p>
          <p className="text-white/60">+1 234 567 8901</p>

          <p className="text-white/60 text-xs leading-relaxed">
            1st Floor, Unit#105, near VPM Classes, Mansarovar, Jaipur, Rajasthan 302020
          </p>

        </div>

      </div>

      {/* divider */}
      <div className="mt-16 border-t border-white/10 pt-6 text-center text-xs text-white/40">

        © {new Date().getFullYear()} Masterminds Junior. All rights reserved.

      </div>

      {/* bottom ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-32 bg-blue-500 rounded-t-full blur-3xl opacity-20" />

    </footer>
  )
}

export default Footer
