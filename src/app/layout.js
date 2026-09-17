import {
  Albert_Sans,
  Alumni_Sans_Pinstripe,
  Geist,
  Geist_Mono,
  Jost,
  Quicksand,
  Roboto_Flex,
} from "next/font/google";
import localFont from "next/font/local";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar_2";
import "./globals.css";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Digital Marketing Agency in India | MasterMinds Junior India",
  description: "Grow with the best digital marketing agency in India offering SEO, social media marketing, web development, Google Ads, Meta Ads, branding and content marketing.",
};

const robo = Roboto_Flex({
  subsets: ["cyrillic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-roboto",
});

const albert = Albert_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-albert",
});

export const sfThin = localFont({
  src: "./font/SFPRODISPLAYREGULAR.otf",
  variable: "--font-sfThin",
  display: "swap",
});
export const sfBold = localFont({
  src: "./font/SFPRODISPLAYBOLD.otf",
  variable: "--font-sfBold",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-jost",
  display: "swap",
});

const alumini = Alumni_Sans_Pinstripe({
  subsets: ["cyrillic"],
  weight: ["400"],
  variable: "--font-alumini",
});

const sand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sand",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${robo.variable} ${albert.variable} ${sfThin.variable} ${sfBold.variable} ${jost.variable} ${alumini.variable} ${sand.variable} heading-albert antialiased bg-sec `}
      >
      <GoogleTagManager gtmId="G-CEV90C3B4G" />
      <GoogleAnalytics gaId="G-CEV90C3B4G" />
        {/* <NavBar/> */}
        <Navbar />
        {children}
        <Footer />
      </body>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-CEV90C3B4G"
      ></script>

    </html>
  );
}
