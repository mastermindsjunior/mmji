import BGGrid from "./components/common/BGGrid";
import EcoSystem from "./components/home/EcoSystem";
import Headings from "./components/home/Headings";
import Solutions from "./components/home/Solutions";
import Strength from "./components/home/Strength";

export default function Home() {
  return (
    <div className=" w-full 4xl:pt-40 2xl:pt-32 pt-24 ">
      <BGGrid/>
      <Headings/>
      <Solutions/>
      <EcoSystem/>
      <Strength/>
    </div>
  );
}
