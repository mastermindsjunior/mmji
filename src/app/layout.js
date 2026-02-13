import { Albert_Sans, Alumni_Sans_Pinstripe, Geist, Geist_Mono, Jost, Quicksand, Roboto_Flex } from "next/font/google";
import localFont from 'next/font/local';
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar_2";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Masterminds junior India",
  description: "MMJI",
};

const robo = Roboto_Flex({
  subsets:["cyrillic"],
  weight:['100', '200','300','400','500','600','700','800','900'],
  variable:'--font-roboto'
})

const albert = Albert_Sans({
  subsets:['latin'],
  weight:['100','200','300','400','500','600','700','800','900'],
  variable:'--font-albert'
});

export const sfThin = localFont({
  src:'./font/SFPRODISPLAYREGULAR.otf',
  variable: '--font-sfThin',
  display: 'swap',
})
export const sfBold = localFont({
  src:'./font/SFPRODISPLAYBOLD.otf',
  variable: '--font-sfBold',
  display: 'swap',
})

const jost = Jost({
  subsets:['latin'],
  weight:['100','200','300','400','500','600','700','800','900'],
  variable:'--font-jost',
  display:'swap',
})

const alumini = Alumni_Sans_Pinstripe({
  subsets:['cyrillic'],
  weight:['400'],
  variable:'--font-alumini'
})

const sand = Quicksand({
  subsets:['latin'],
  weight:['300','400','500','600','700'],
  variable:'--font-sand'
})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${robo.variable} ${albert.variable} ${sfThin.variable} ${sfBold.variable} ${jost.variable} ${alumini.variable} ${sand.variable} heading-albert antialiased bg-gradient-to-b from-[#D9EDFF] to-white `}
      > 
      {/* <NavBar/> */}
      <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
