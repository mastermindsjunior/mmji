import BGGrid from "./components/common/BGGrid";
import BlogSection from "./components/home/BlogSection";
import CoreCompetencies from "./components/home/Competency";
import CTASection from "./components/home/CTASection";
import EcoSystem from "./components/home/EcoSystem";
import Heading from "./components/home/Heading";
import Headings from "./components/home/Headings";
import Headings_2 from "./components/home/Headings_2";
import HeadingWithSkewCarousel from "./components/home/HeadingWithCarousel";
import Roadmap from "./components/home/Roadmap";
import Solutions from "./components/home/Solutions";
import Strength from "./components/home/Strength";

export default function Home() {
  return (
    <div className=" w-full ">
      {/* <BGGrid/> */}
      {/* <Headings/> */}
      {/* <Headings_2/>
      <Solutions/>
      <EcoSystem/>
      <Strength/>
      <Roadmap/>
      <BlogSection/> */}


      {/* NEW DESIGN */}
      <Heading />
      {/* <HeadingWithSkewCarousel/> */}
      <CoreCompetencies/>
      <CTASection/>
    </div>
  );
}
