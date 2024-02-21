import Image from "next/image";
import configCopy from "../config";

export function AboutUs() {
  return (
    <div className="flex flex-col gap-y-[8px] py-[8px] lg:py-[40px] lg:gap-y-[20px] ">
      
      <div className="flex flex-col gap-x-6 sm:flex-row gap-y-4">
        <div className="">
          <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
        </div>
        
        <div className="sm:w-1/2 lg:py-[56px] lg:pl-[56px]">
          <h3 className="font-medium text-[#5e773c] lg:text-[24px] ">
            About Us
          </h3>
          <p className="py-[24px] text-[#36485C] lg:text-lg">
            {configCopy.aboutUs.description}
          </p>
          <br/>
          <h3 className="font-medium text-[#5e773c] lg:text-[24px] ">
            UMKM Hub
          </h3>
          <p className="py-[24px] text-[#36485C] lg:text-lg">
            {configCopy.aboutUs.umkmHub}
          </p>
        </div>
        {/* <div className="sm:w-1/2 lg:py-[56px] lg:pl-[56px]">
          <h3 className="font-medium text-[#5e773c] lg:text-[24px] ">
            UMKM Hub
          </h3>
          <p className="py-[24px] text-[#36485C] lg:text-lg">
            {configCopy.aboutUs.umkmHub}
          </p>
        </div> */}
      </div>

    </div>
  );
}
