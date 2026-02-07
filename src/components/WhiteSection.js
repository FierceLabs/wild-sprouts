"use client"

import Image from "next/image"
import FadeIn from "./FadeIn"
import ScaleIn from "./ScaleIn"

export default function WhiteSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div></div>
      <div className="py-20 md:py-28">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap xl:items-center -mx-4">
            <ScaleIn className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
              <div className="relative mx-auto md:ml-0 max-w-max">
                <Image
                  className="relative rounded-2xl shadow-lg"
                  src="/real/chicken.png"
                  alt="Chickens at Wild Sprouts Homestead School"
                  width={600}
                  height={450}
                />
              </div>
            </ScaleIn>
            <FadeIn direction="right" className="w-full md:w-1/2 px-4">
              <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-green-g1 font-medium uppercase rounded-2xl">
                Our Mission
              </span>
              <h2 className="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight font-serif text-gray-g1">
                Where Nature Meets Nurture
              </h2>
              <p className="mb-4 text-lg md:text-xl text-coolGray-500 font-medium">
                At Wild Sprouts Homestead School, we believe children learn best
                when they're connected to nature, animals, and meaningful work.
                Our hands-on approach fosters independence, creativity, and a
                lifelong love of learning.
              </p>
              <p className="mb-4 text-lg md:text-xl text-coolGray-500 font-medium">
                Every day, children experience the rhythms of homestead life —
                caring for Cooper the horse, feeding Marvin and Maynard,
                collecting eggs from the girls, and tending our gardens. These
                aren't just activities; they're the foundation of how we learn.
              </p>
              <p className="mb-8 text-lg md:text-xl text-coolGray-500 font-medium">
                We honor childhood as a time of wonder and discovery. Through
                play-based exploration and real-world experiences, children
                develop confidence, empathy, and the skills they need to thrive
                — all while forming deep connections with the natural world
                around them.
              </p>
              <a
                className="inline-block py-5 px-7 text-base md:text-lg leading-4 text-green-50 font-medium text-center bg-green-g1 hover:bg-[#5a6b50] focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-green-g1 rounded-md shadow-sm transition-all duration-500"
                href="/contact?interest=tour"
              >
                Schedule a Tour
              </a>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
