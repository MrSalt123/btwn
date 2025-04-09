"use client";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import ParticlesBackground from "@/components/ParticlesBackground";
import Navbar from "@/components/Navbar";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { motion } from "framer-motion";

export default function Home() {
  const parallaxRef = useRef<any>(null);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const container = parallaxRef.current?.container.current;
    let lastY = 0;
    let lastTime = performance.now();

    const handleScroll = () => {
      const now = performance.now();
      const y = container?.scrollTop || 0;

      const dy = Math.abs(y - lastY);
      const dt = now - lastTime;

      const speed = dy / dt * 1000; // pixels per second

      // console.log("Scroll speed:", speed.toFixed(2), "px/s");

      // Hide if fast scrolling (>300 px/s), show if slower
      if (y < 20 || (y < lastY)) {
        setVisible(true);
      }
      else if (speed > 400) {
        setVisible(false);
      }

      // Add translucent background if scrolled at all
      setScrolled(y > 10);

      lastY = y;
      lastTime = now;
    };

    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <ParticlesBackground />
      {/* Navbar */}
      <Navbar visible={visible} scrolled={scrolled} />

      <Parallax pages={3} ref={parallaxRef} style={{ top: 0, left: 0 }}>
        <ParallaxLayer offset={0} speed={.5}>
          {/* Hero section */}
          <div className="flex flex-col w-full items-center justify-center text-4xl font-bold h-screen">
            <span>BTWN</span>
            <span>THE SPACE WHERE INNOVATION HAPPENS</span>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2}>
          <div className="flex flex-col justify-center items-center gap-32 min-h-screen px-8">
            {/* Section 1 */}
            <section className="flex flex-col items-center text-4xl h-full mb-30">
              <div className="flex flex-col gap-10">
                <span className="font-bold mb-8">A powerful online presence isn't a luxury — it's your first impression.</span>
                <div className="flex flex-col mt-8 gap-3">
                  <span><span className="text-red-500">75% </span>of users judge credibility <span className="text-red-500">based on design </span></span>
                  <span>Your website is open 24/7 — is it working for you?</span>
                  <span>Mobile-first, speed, and clarity aren't optional — they’re expected</span>
                </div>
              </div>
            </section>

            <section className="flex items-center justify-center w-full">
              <div className="relative group hover:scale-105 transition-transform duration-300">
                {/* corner brackets */}
                <div className="absolute -top-5 -left-7 w-6 h-6 z-10 border-t-2 border-l-2 border-black scale-0 group-hover:scale-100 transition-transform duration-300" />
                <div className="absolute -top-5 -right-7 w-6 h-6 z-10 border-t-2 border-r-2 border-black scale-0 group-hover:scale-100 transition-transform duration-300" />
                <div className="absolute -bottom-5 -left-7 w-6 h-6 z-10 border-b-2 border-l-2 border-black scale-0 group-hover:scale-100 transition-transform duration-300" />
                <div className="absolute -bottom-5 -right-7 w-6 h-6 z-10 border-b-2 border-r-2 border-black scale-0 group-hover:scale-100 transition-transform duration-300" />
                <Image
                  src="/demo-pic.jpg"
                  alt="website pic"
                  width={700}
                  height={700}
                  className="rounded-lg transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
            </section>

            {/* Section 2: Why Btwn */}
            <section className="flex items-center justify-center gap-8 w-full">
              <div className="text-4xl text-gray-400">
                <motion.svg
                  viewBox="0 0 100 100"
                  className="w-64 h-64"
                  fill="none"
                  stroke="black"
                  strokeWidth="5"
                >
                  <motion.path
                    d="M 10 90 L 30 50 L 50 70 L 70 30"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 2,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "loop",
                      repeatDelay: 1,
                    }}
                  />
                </motion.svg>
              </div>

              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold mb-4">Why Btwn?</h2>
                <p className="text-lg leading-relaxed dark">
                  In this era, a modern, well-designed website is essential for not only online presence, but an engine for growth.
                  Btwn helps your brand connect, convert, and scale with an elegant digital experience.
                  Whether you're refreshing your existing site or building from scratch, we bridge the gap btwn your
                  business and the people who matter most.
                </p>
              </div>
            </section>

            {/* Section 3: Image */}

          </div>
        </ParallaxLayer>


        {/* Why Btwn section */}

      </Parallax>
    </div>
  );
}
