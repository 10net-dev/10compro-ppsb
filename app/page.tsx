import { Hero } from "./components/Hero";
// import { Hero } from "./components/Hero2";
import { AboutUs } from "./components/AboutUs";
import { Cta } from "./components/Cta";
import { Stats } from "./components/Stats";
import { Features } from "./components/Features";
import { News } from "./components/News";

export default function Home() {
  return (
    <>
      <div className="px-[20px] lg:container lg:px-20 mx-auto">
        <Hero />
        <AboutUs />
        <Stats />
        <Features />
        <News />
        <Cta />
      </div>
    </>
  );
}
