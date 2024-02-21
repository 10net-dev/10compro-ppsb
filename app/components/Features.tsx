import Image from "next/image";
import configCopy from "../config";

export function Features() {
  return (
    <div className="flex flex-col gap-y-[8px] py-[8px] lg:py-[40px] lg:gap-y-[20px] ">
      <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-lime-800 tracking-widest font-medium title-font mb-1">
        {configCopy.feature.header}
      </h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
        {configCopy.feature.detail} 
      </h1>
    </div>
    <div className="flex flex-wrap -m-4">
      {configCopy.feature.list.map((item, index) => (
        <div className="p-4 md:w-1/3" key={index}>
          <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-lime-800 text-white flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 className="text-gray-900 text-lg title-font font-medium">{item.title}</h2>
            </div>
            <div className="flex-grow">
              <p className="leading-relaxed text-base">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
      
      
    </div>
  </div>
    </div>
  );
}
