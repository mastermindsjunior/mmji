"use client";

import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const NavBar = () => {


useEffect(() => {
  const tl = gsap.timeline();

  // Smoothly animate scale, opacity, and width together
  tl.to(".navInner", {
    opacity: 1,
    scale: 1,
    width: "100%",
    duration: 1.5,
    ease: "power3.out",
    transformOrigin: "center center",
  });

  // Logo appears halfway through expansion
  tl.to(".navLogo", {
    opacity: 1,
    duration: 0.6,
    ease: "power2.out",
  }, "-=1"); // starts 1s before the end of previous

  // Display nav links container
  tl.set(".navLinks", {
    display: "flex",
  }, "<");

  // Animate nav links as width expands
  tl.to(".navLinks a", {
    opacity: 1,
    translateY: "0",
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out",
  }, "-=1.2"); // starts early during expansion
}, []);


  return (
    <header className="w-full fixed z-50 top-0 left-0 px-20 py-4 flex justify-center items-center">
      <div
        className="bg-white/5 backdrop-blur-md shadow px-12 py-2 relative flex justify-end items-center 
                   2xl:h-24 h-20 2xl:w-24 w-20 opacity-0 scale-50 navInner origin-center transition-all duration-300"
      >
        {/* Logo */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 opacity-0 navLogo">
          <Image
            src={"/logo-india.png"}
            width={400}
            height={200}
            alt=" logo"
            className="2xl:h-20 h-16 w-auto object-contain"
          />
        </div>

        {/* Nav Links */}
        <nav className="w-3/5 2xl:h-20 h-16 justify-between items-center gap-4 hidden navLinks font-robo">
          {["Home", "About", "Services", "Career", "Contact"].map((link, i) => (
            <Link
              key={i}
              href={ link === "Home" ? "/" : `/${link}`}
              className="opacity-0 translate-y-2 2xl:text-lg text-base transition-all duration-300 font-sfth"
            >
              {link}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
