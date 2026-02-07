"use client"

import Image from "next/image"
import FadeIn from "./FadeIn"
import ScaleIn from "./ScaleIn"

export default function HowItWorks() {
  return (
    <section className="py-24 overflow-hidden bg-white mt-[-30px]">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 px-2 mb-8 md:mb-0">
            <div className="relative mx-auto md:ml-0 md:mr-0 max-w-max">
              <div className="flex flex-col gap-4 max-w-[400px]">
                <ScaleIn className="max-h-[600px]">
                  <Image
                    className="rounded-2xl -rotate-6 shadow-2xl"
                    src="/real/egg-basket.png"
                    alt="Children collecting eggs at Wild Sprouts Homestead School"
                    width={400}
                    height={500}
                  />
                </ScaleIn>
                <div className="hidden md:flex flex-row gap-4">
                  <div className="w-2/5">
                    <Image
                      className="rounded-2xl rotate-3 shadow-2xl"
                      src="/real/craft.png"
                      alt="Children doing crafts at Wild Sprouts"
                      width={160}
                      height={200}
                    />
                  </div>
                  <div className="w-3/5">
                    <Image
                      className="rounded-2xl -rotate-2 shadow-2xl w-full"
                      src="/real/bear-2.png"
                      alt="Bear the dog at Wild Sprouts"
                      width={280}
                      height={320}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-2">
            <FadeIn direction="right">
              <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-orange-o1 font-medium uppercase rounded-full shadow-sm">
                How We Learn
              </span>
              <h2 className="mb-12 text-4xl text-gray-g1 md:text-5xl leading-tight font-bold tracking-tighter font-serif">
                Our Approach
              </h2>
            </FadeIn>
            <div className="flex flex-wrap -mx-2 text-center md:text-left">
              <FadeIn delay={0.1} className="w-full md:w-1/2 px-2 mb-8">
                <div className="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-green-g1 font-semibold rounded-full font-serif">
                  1
                </div>
                <h3 className="mb-2 text-xl font-bold">Nature Immersion</h3>
                <p className="font-medium text-coolGray-500">
                  Children spend their days outdoors, connecting with the
                  natural world through exploration, observation, and seasonal
                  rhythms.
                </p>
              </FadeIn>
              <FadeIn delay={0.2} className="w-full md:w-1/2 px-2 mb-8">
                <div className="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-green-g1 font-semibold rounded-full font-serif">
                  2
                </div>
                <h3 className="mb-2 text-xl font-bold">Animal Connection</h3>
                <p className="font-medium text-coolGray-500">
                  Daily interactions with Cooper, Marvin & Maynard, the
                  chickens, bunnies, and Bear teach responsibility, empathy, and
                  gentle care.
                </p>
              </FadeIn>
              <FadeIn delay={0.3} className="w-full md:w-1/2 px-2 mb-8">
                <div className="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-green-g1 font-semibold rounded-full font-serif">
                  3
                </div>
                <h3 className="mb-2 text-xl font-bold">Learning by Doing</h3>
                <p className="font-medium text-coolGray-500">
                  Hands-on experiences drive discovery — planting seeds,
                  collecting eggs, building, and creating develop real-world
                  skills naturally.
                </p>
              </FadeIn>
              <FadeIn delay={0.4} className="w-full md:w-1/2 px-2">
                <div className="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-green-g1 font-semibold rounded-full font-serif">
                  4
                </div>
                <h3 className="mb-2 text-xl font-bold">Play-Based Growth</h3>
                <p className="font-medium text-coolGray-500">
                  Imaginative, unstructured play builds creativity,
                  problem-solving, and social skills while honoring childhood's
                  natural joy.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
