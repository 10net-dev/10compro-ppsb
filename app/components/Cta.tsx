import Image from "next/image";
import configCopy from "../config";

export function Cta() {
  return (
    <div className="w-full rounded-[16px] bg-gradient-to-br from-lime-800 via-lime-700 to-yellow-600 py-[56px] px-[32px] text-center lg:my-[60px] lg:px-[324px] lg:py-[89px]">
      <h1 className="text-white text-[32px] font-medium lg:text-[56px] leading-[64px] ">
        {configCopy.cta.header}
      </h1>
      <p className="text-white pt-6 lg:pt-[48px] lg:text-[18px]">
        {configCopy.cta.description}
      </p>

      <div className="mt-[40px] flex flex-col w-full items-center lg:mt-[56px] lg:flex-row lg:justify-center gap-x-[40px]">
        <button className="py-[16px] px-[32px] bg-white rounded-[4px] text-yellow-600 w-fit font-medium">
          {configCopy.cta.button}
        </button>

      </div>
    </div>
  );
}
