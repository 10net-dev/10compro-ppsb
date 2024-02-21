import Image from "next/image";
import configCopy from "../config";


export function Hero() {
  return (
    <section className="relative flex items-center justify-center h-screen overflow-hidden">
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
          <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
        </div>
      </div>
    </section>
  );
}
