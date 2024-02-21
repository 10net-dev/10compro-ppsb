import { Hero } from "./components/Hero";
import { AboutUs } from "./components/AboutUs";
import { Cta } from "./components/Cta";
import { Stats } from "./components/Stats";
import { Features } from "./components/Features";

export default function Home() {
  return (
    <>
      <div className="px-[20px] lg:container lg:px-20 mx-auto">
        <Hero />
        <Stats />
        <AboutUs />
        <Features />
        <Cta />
      </div>
    </>
  );
}
