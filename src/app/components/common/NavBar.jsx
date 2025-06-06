"use client";

import { animate, utils } from 'animejs';
import gsap from 'gsap';
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

const NavBar = () => {

    useEffect(() => {
        
        const tl = gsap.timeline();

        tl.to(".navInner", {
            opacity:1,
            duration:0.1,
        })
        tl.to(".navInner", {
            width:"100%",
            duration:1,
            delay:0.1,
        })
        tl.to(".navLogo", {
            opacity: 1,
            duration:0.5,
            delay:0.1
        }, "<")
        tl.set(".navLinks", {
            display: "flex",
        }, "<")
        tl.to(".navLinks a", {
            opacity: 1,
            translateY:"0",
            duration:0.7,
            delay:0.5,
            stagger:0.15
        }, "<")
    },[])
  return (
    <header className=' w-full fixed z-50 top-0 left-0 px-20 py-4 flex justify-center items-center '>
        <div className=' bg-dark shadow px-12 py-2 relative flex justify-end items-center h-28 w-28 opacity-0 navInner'>
            <div className=' absolute top-1/2 -translate-y-1/2 left-4 opacity-0 navLogo'>
                <Image src={'/logo-india.png'} width={400} height={200} alt=' logo' className=' h-24 w-auto object-contain' />
            </div>

            <nav className=' w-3/5 h-24 justify-between items-center gap-4 hidden navLinks font-robo font-bold '>
                <Link className=' opacity-0 translate-y-2 text-xl' href={"/"}>Home</Link>
                <Link className=' opacity-0 translate-y-2 text-xl' href={"/"}>About</Link>
                <Link className=' opacity-0 translate-y-2 text-xl' href={"/"}>Services</Link>
                <Link className=' opacity-0 translate-y-2 text-xl' href={"/"}>Career</Link>
                <Link className=' opacity-0 translate-y-2 text-xl' href={"/"}>Contact</Link>
            </nav>
        </div>
    </header>
  )
}

export default NavBar
