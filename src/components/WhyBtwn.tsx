"use client";
import { motion } from "framer-motion";

export default function WhyBtwn() {
    return (
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
    )
}
