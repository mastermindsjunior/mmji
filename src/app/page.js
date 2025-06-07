import BGGrid from "./components/common/BGGrid";
import EcoSystem from "./components/home/EcoSystem";
import Headings from "./components/home/Headings";
import Solutions from "./components/home/Solutions";

export default function Home() {
  return (
    <div className=" w-full pt-40 ">
      <BGGrid/>
      <Headings/>
      <Solutions/>
      <EcoSystem/>
    </div>
  );
}
