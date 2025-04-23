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
  const [section, setSection] = useState("home");

  useEffect(() => {
    let scrollContainer: HTMLElement | Window | null = null;
    let lastY = 0;
    let lastTime = performance.now();

    const handleScroll = () => {
      const now = performance.now();
      const y =
        section === "home"
          ? (parallaxRef.current?.container.current?.scrollTop || 0)
          : window.scrollY;

      const dy = Math.abs(y - lastY);
      const dt = now - lastTime;

      const speed = dy / dt * 1000;

      if (y < 20 || y < lastY) {
        setVisible(true);
      } else if (speed > 400) {
        setVisible(false);
      }

      setScrolled(y > 10);
      lastY = y;
      lastTime = now;
    };

    if (section === "home") {
      scrollContainer = parallaxRef.current?.container.current;
      scrollContainer?.addEventListener("scroll", handleScroll);
    } else {
      scrollContainer = window;
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (section === "home") {
        scrollContainer?.removeEventListener("scroll", handleScroll);
      } else {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [section]);



  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <ParticlesBackground />
      {/* Navbar */}
      <Navbar visible={visible} scrolled={scrolled} setSection={setSection} />

      {section === "home" && (
        <Parallax pages={5} ref={parallaxRef} style={{ top: 0, left: 0 }}>
          <ParallaxLayer offset={0} speed={0} sticky={{ start: 0, end: .4 }} factor={.5}>
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
            <section className="flex flex-col items-center text-center text-4xl h-full px-6 py-12">
              <div className="font-[family-name:var(--font-noto-sans)]">
                <span className="font-bold mb-16 block">
                  A powerful online presence isn't a luxury — it's your first impression.
                </span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8 justify-items-center">
                  {/* Card 1 */}
                  <div className="bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col items-center h-[400px] max-w-sm w-full p-4">
                    <img
                      src="/website.gif"
                      alt="Website credibility design"
                      className="w-full h-[65%] object-cover rounded-xl mb-4"
                    />
                    <div className="h-[35%] flex items-center justify-center px-2">
                      <p className="text-lg">
                        <span className="text-red-500">75% </span>
                        of users judge credibility <span className="text-red-500">based on design</span>
                      </p>
                    </div>
                  </div>


                  {/* Card 2 */}
                  <div className="bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col items-center h-[400px] max-w-sm w-full p-4">
                    <div className="w-full h-[65%] bg-gray-200 rounded-xl mb-4">
                      {/* Replace this div with an <Image> component later */}
                    </div>
                    <div className="h-[35%] flex items-center justify-center px-2">
                      <p className="text-lg">
                        Your website is open <span className="text-red-500">24/7</span> — is it <span className="text-red-500">working for you?</span>
                      </p>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col items-center h-[400px] max-w-sm w-full p-4">
                    <div className="w-full h-[65%] bg-gray-200 rounded-xl mb-4">
                      {/* Replace this div with an <Image> component later */}
                    </div>
                    <div className="h-[35%] flex items-center justify-center px-2">
                      <p className="text-lg">
                        <span className="text-red-500">Mobile-first, speed, and clarity</span> aren't optional — they’re <span className="text-red-500">expected</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>



          </ParallaxLayer>

          {/* demo collage section */}
          <ParallaxLayer offset={3} speed={0}>
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
          <ParallaxLayer offset={4} speed={.1}>
            <WhyBtwn />
          </ParallaxLayer>

        </Parallax>
      )}

      {section === "services" && (
        <div className="h-full w-screen flex items-center justify-center text-4xl">
          Services Section
        </div>
      )}

      {section === "quotes" && (
        <div className="h-full flex items-center justify-center text-4xl">
          Quotes Section
        </div>
      )}

      {section === "about" && (
        <div className="h-full flex items-center justify-center text-4xl">
          About Section
        </div>
      )}

      {section === "blog" && (
        <div className="h-full flex items-center justify-center text-4xl">
          Blog Section
        </div>
      )}

      {section === "contact" && (
        <div className="min-h-screen flex items-center justify-center text-4xl">
          Contact Section
        </div>
      )}
    </div>
  );
}
