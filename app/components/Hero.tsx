import Image from "next/image";
import configCopy from "../config";
import ppsb1 from "./../../public/assets/ppsb-1.jpeg"


export function Hero() {
  return (
    <section className="relative flex items-center justify-center h-screen overflow-hidden">

      {/* Gradient Bottom Red Gradient */}
        <div className="absolute inset-0 z-2">
          <div className="absolute h-screen w-screen -translate-x-[60%] translate-y-[90%] rounded-full bg-[#CDAD6C] opacity-80 blur-[90px]"></div>
        </div> 
      
      {/* Gradient Top Red Gradient V1*/}
        <div className="absolute inset-0 z-2">
          <div className="absolute h-screen w-screen translate-x-[60%] -translate-y-[40%] rounded-full bg-[#CDAD6C] opacity-10 blur-[100px]"></div>
        </div> 
        

      <div className="z-10">

        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
          <h1 className="mt-8 text-3xl font-extrabold tracking-tight lg:text-6xl">
          {configCopy.hero.header1}<br/>
          {configCopy.hero.header2}
          </h1>
          <br/>
          <p className="mb-8 lg:text-xl leading-relaxed">{configCopy.hero.detail}</p>
            
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image className="object-cover object-center rounded" 
            width="720" height="600"
            alt="hero" src={ppsb1} />
          </div>
        </div>
      </div>
    </section>
  );
}
