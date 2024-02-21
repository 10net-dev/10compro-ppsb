import Image from "next/image";
import configCopy from "../config";

export function Stats() {
  return (
    <div className="flex flex-col gap-y-[8px] py-[8px] lg:py-[40px] lg:gap-y-[20px] ">
      
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 text-center">
            {configCopy.stats.map((item, index) => (
              <div className="p-4 sm:w-1/4 w-1/2" key={index}>
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">{item.value}</h2>
                <p className="leading-relaxed">{item.name}</p>
              </div>
            ))}
        </div>
      </div>

    </div>
  );
}
