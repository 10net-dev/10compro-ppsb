import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import User from "../../public/assets/User.svg";
import Menu from "../../public/assets/Menu.svg";

import Link from "next/link";
import { ThemeToggle } from "./../components/ThemeToggle";

const navLinks = [
  { name: "" },
  // { name: "Pricing" },
  // { name: "Enterprise" },
  // { name: "Careers" },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 shadow border-b bg-background h-[10vh] flex items-center">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <h1 className="font-bold text-3xl">
            10<span className="text-primary"> Net</span>
          </h1>
        </Link>

        <div className="flex items-center gap-x-5">
          <a href="https://forms.gle/4ZHFbT5BTuWnfXWz7" 
          className="bg-primary text-white border-0 py-2 px-8 hover:bg-foreground rounded text-lg text-center"
          target="_blank">
              Contact Us
          </a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
