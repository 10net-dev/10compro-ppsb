import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import User from "../../public/assets/User.svg";
import Menu from "../../public/assets/Menu.svg";
import PPSB from "../../public/assets/PPSB.png";

import Link from "next/link";
import { ThemeToggle } from "./../components/ThemeToggle";

const navLinks = [
  { name: "" },
  { name: "About Us" },
  { name: "Stats" },
  { name: "Features" },
  { name: "News" },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 shadow border-b bg-background h-[10vh] flex items-center">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image 
          src={PPSB}
          className="h-16 w-auto mr-2" 
          alt="Logo PPSB"
          />
        </Link>

        <div className="flex items-center gap-x-5">
          <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
            {navLinks.map((item, index) => (
              <p className="text-[#36485C] font-medium" key={index}>
                {item.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
