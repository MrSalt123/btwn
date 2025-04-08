import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr] min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Navbar */}
      <header className="flex items-center justify-between row-start-1 w-full p-8 dark:invert">
        {/* Logo */}
        <Image
          src="/btwn-logo.png"
          alt="Btwn logo"
          width={80}
          height={80}
          priority
        />

        {/* Nav links */}
        <nav className="flex gap-12 text-sm sm:text-xl dark:invert">
          {["Services", "Quotes", "About", "Blog", "Contact"].map((item) => (
            <span
              key={item}
              className="nav-link cursor-pointer relative text-foreground"
            >
              {item}
            </span>
          ))}
        </nav>
      </header>

      {/* Main content placeholder */}
      <main className="row-start-2 flex items-center ml-10 ">
        <span className="text-4xl font-bold">
          <p>BTWN</p>
          <p>THE SPACE WHERE INNOVATION HAPPENS</p>
        </span>
      </main>
    </div>
  );
}
