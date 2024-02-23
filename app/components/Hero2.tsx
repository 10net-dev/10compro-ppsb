import Image from "next/image";
import configCopy from "../config";
import ppsb1 from "./../../public/assets/ppsb-1.jpeg"


export function Hero() {
  return (
    <section className="relative flex items-center justify-center h-screen overflow-hidden">

      {/* Gradient Bottom Red Gradient */}
        {/* <div className="absolute inset-0 z-2">
          <div className="absolute h-screen w-screen -translate-x-[0%] translate-y-[90%] rounded-full bg-[#CDAD6C] opacity-80 blur-[90px]"></div>
        </div>  */}
      {/* Gradient Red Slope */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#CDAD6C_100%)]"></div>
        </div>

      <div className="z-10">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <Image className="object-cover object-center rounded" 
            width="720" height="600"
            alt="hero" src={ppsb1} />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="mt-8 text-3xl font-extrabold tracking-tight lg:text-6xl">
          {configCopy.hero.header1}<br/>
          {/* {configCopy.hero.header2} */}
          </h1>
          <br/>
          <p className="mb-8 lg:text-xl leading-relaxed">{configCopy.hero.detail}</p>
          
        </div>
      </div>
      </div>
    </section>
  );
}
