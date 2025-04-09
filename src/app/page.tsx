"use client";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import ParticlesBackground from "@/components/ParticlesBackground";
import Navbar from "@/components/Navbar";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import WhyBtwn from "@/components/WhyBtwn";
import DemoCollage from "@/components/DemoCollage";
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

      <Parallax pages={4} ref={parallaxRef} style={{ top: 0, left: 0 }}>
        <ParallaxLayer offset={0} speed={0} sticky={{ start: 0, end: .4}} factor={.5}>
          {/* Hero section */}
          <div className="flex flex-col w-full items-center justify-center text-4xl font-bold h-screen">
            <span>BTWN</span>
            <span>THE SPACE WHERE INNOVATION HAPPENS</span>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0}>
          {/* horizontal desktop image of demo website*/}
          <section className="flex items-center justify-center p-8 w-full h-screen ">
            <div className="relative group  transition-transform duration-300">
              <Image
                src="/demo-pic.jpg"
                alt="website pic"
                width={1400}
                height={1400}
                className="rounded-lg transition-transform duration-300"
                priority
              />
            </div>
          </section>
        </ParallaxLayer>


        {/* opening text */}
        <ParallaxLayer offset={2} speed={.3}>
          <section className="flex flex-col items-center text-4xl h-full">
            <div className="flex flex-col gap-10">
              <span className="font-bold mb-8">A powerful online presence isn't a luxury — it's your first impression.</span>
              <div className="flex flex-col mt-8 gap-3">
                <span><span className="text-red-500">75% </span>of users judge credibility <span className="text-red-500">based on design </span></span>
                <span>Your website is open <span className="text-red-500">24/7 </span> — is it <span className="text-red-500">working for you?</span></span>
                <span><span className="text-red-500">Mobile-first, speed, and clarity</span> aren't optional — they’re <span className="text-red-500">expected</span></span>
              </div>
            </div>
          </section>
        </ParallaxLayer>

        {/* demo collage section */}
        <ParallaxLayer offset={2.5} speed={0}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <DemoCollage />
          </motion.div>
        </ParallaxLayer>

        {/* why btwn section */}
        <ParallaxLayer offset={3.2} speed={.1}>
          <WhyBtwn />
        </ParallaxLayer>

      </Parallax>
    </div>
  );
}
