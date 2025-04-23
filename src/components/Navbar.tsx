"use client";
import Image from "next/image";
import Link from 'next/link'

type NavbarProps = {
  visible: boolean;
  scrolled: boolean;
  setSection: (section: string) => void;
};

export default function Navbar({ visible, scrolled, setSection }: NavbarProps) {

  return (
    <div
      className={`flex items-center justify-between sticky top-0 z-50 w-full p-8 transition-all duration-700 ease-in-out ${visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } ${scrolled ? "bg-gray-200/70 backdrop-blur-sm dark:bg-gray-100/70" : "bg-transparent"}`}
    >

      <Image src="/btwn-logo.png" alt="Btwn logo" className="dark:invert cursor-pointer" width={80} height={80} priority onClick={() => setSection('home')}/>

      <div className="flex gap-12 text-sm sm:text-xl dark">
        {["services", "quotes", "about", "blog", "contact"].map((item) => (
          <span
            key={item}
            onClick={() => setSection(item)}
            className="nav-link cursor-pointer relative text-foreground capitalize"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
