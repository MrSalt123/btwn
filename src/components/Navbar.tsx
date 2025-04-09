"use client";
import Image from "next/image";

type NavbarProps = {
  visible: boolean;
  scrolled: boolean;
};
export default function Navbar({ visible, scrolled }: NavbarProps) {
  return (
    <div
      className={`flex items-center justify-between sticky top-0 z-50 w-full p-8 transition-all duration-700 ease-in-out ${visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } ${scrolled ? "bg-gray-200/70 backdrop-blur-sm dark:bg-gray-100/70" : "bg-transparent"}`}
    >

      <Image src="/btwn-logo.png" alt="Btwn logo" className="dark:invert" width={80} height={80} priority />

      <nav className="flex gap-12 text-sm sm:text-xl dark">
        {["Services", "Quotes", "About", "Blog", "Contact"].map((item) => (
          <span
            key={item}
            className="nav-link cursor-pointer relative text-foreground"
          >
            {item}
          </span>
        ))}
      </nav>
    </div>
  );
}
