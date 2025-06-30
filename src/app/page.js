import BGGrid from "./components/common/BGGrid";
import BlogSection from "./components/home/BlogSection";
import CTASection from "./components/home/CTASection";
import EcoSystem from "./components/home/EcoSystem";
import Headings from "./components/home/Headings";
import Headings_2 from "./components/home/Headings_2";
import Roadmap from "./components/home/Roadmap";
import Solutions from "./components/home/Solutions";
import Strength from "./components/home/Strength";

export default function Home() {
  return (
    <div className=" w-full ">
      <BGGrid/>
      {/* <Headings/> */}
      <Headings_2/>
      <Solutions/>
      <EcoSystem/>
      <Strength/>
      <Roadmap/>
      <BlogSection/>
      <CTASection/>
    </div>
  );
}
