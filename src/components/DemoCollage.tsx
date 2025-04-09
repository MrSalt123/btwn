"use client";
import Image from "next/image";

export default function DemoCollage() {
    return (
        <section className="grid grid-cols-12 gap-4 w-full px-8 h-[800px] items-center">
                    {/* First column - 25% (3/12) */}
                    <div className="col-span-3 flex justify-end relative">
                      <div className="relative -translate-y-16 group hover:scale-105 transition-transform duration-300">
                        {/* corner brackets */}
                        <div className="absolute top-7 left-12 w-6 h-6 z-10 border-t-2 border-l-2 border-black scale-0 group-hover:scale-100 transition-transform duration-300" />
                        <div className="absolute top-7 right-12 w-6 h-6 z-10 border-t-2 border-r-2 border-black scale-0 group-hover:scale-100 transition-transform duration-300" />
                        <div className="absolute bottom-7 left-12 w-6 h-6 z-10 border-b-2 border-l-2 border-black scale-0 group-hover:scale-100 transition-transform duration-300" />
                        <div className="absolute bottom-7 right-12 w-6 h-6 z-10 border-b-2 border-r-2 border-black scale-0 group-hover:scale-100 transition-transform duration-300" />
                        <Image
                          src="/mobile1-demo.png"
                          alt="mobile website pic"
                          width={300}
                          height={600}
                          className="rounded-lg transition-transform duration-300 group-hover:scale-105"
                          priority
                        />
                      </div>
                    </div>
        
                    {/* Second column - 50% (6/12) */}
                    <div className="col-span-6 flex justify-center">
                      <div className="relative z-10 group hover:scale-105 transition-transform duration-300">
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
                    </div>
        
                    {/* Third column - 25% (3/12) */}
                    <div className="col-span-3 flex justify-start relative">
                      <div className="relative translate-y-16 translate-x-10 group hover:scale-105 transition-transform duration-300">
                        {/* corner brackets */}
                        <div className="absolute top-7 left-12 w-6 h-6 z-10 border-t-2 border-l-2 border-black scale-0 group-hover:scale-100 transition-transform duration-300" />
                        <div className="absolute top-7 right-12 w-6 h-6 z-10 border-t-2 border-r-2 border-black scale-0 group-hover:scale-100 transition-transform duration-300" />
                        <div className="absolute bottom-7 left-12 w-6 h-6 z-10 border-b-2 border-l-2 border-black scale-0 group-hover:scale-100 transition-transform duration-300" />
                        <div className="absolute bottom-7 right-12 w-6 h-6 z-10 border-b-2 border-r-2 border-black scale-0 group-hover:scale-100 transition-transform duration-300" />
                        <Image
                          src="/mobile1-demo.png"
                          alt="mobile website pic"
                          width={300}
                          height={600}
                          className="rounded-lg transition-transform duration-300 group-hover:scale-105"
                          priority
                        />
                      </div>
                    </div>
                  </section>
    )
}
