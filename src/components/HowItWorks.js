"use client"

import Image from "next/image"
import React from "react"

export default function HowItWorks() {
  return (
    <section className="py-24 overflow-hidden bg-white mt-[-30px]">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 px-2 mb-8 md:mb-0">
            <div className="relative mx-auto md:ml-0 md:mr-0 max-w-max">
              <div className="flex flex-col gap-4 max-w-[400px]">
                <div className="max-h-[600px]">
                  <Image
                    className="rounded-2xl -rotate-6 shadow-2xl"
                    src="/classroom.jpg"
                    alt="Children at Wild Sprouts Homestead School"
                    width={400}
                    height={600}
                  />
                </div>
                <div className="hidden md:flex flex-row gap-4">
                  <div className="w-1/2">
                    <Image
                      className="rounded-2xl rotate-3 shadow-2xl"
                      src="/more-barn.jpg"
                      alt="Wild Sprouts barn"
                      width={190}
                      height={285}
                    />
                  </div>
                  <div className="w-1/2">
                    <Image
                      className="rounded-2xl -rotate-2 shadow-2xl"
                      src="/play.jpg"
                      alt="Children playing at Wild Sprouts"
                      width={190}
                      height={285}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-2">
            <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-orange-o1 font-medium uppercase rounded-full shadow-sm">
              Our Approach
            </span>
            <h2 className="mb-12 text-4xl text-gray-g1 md:text-5xl leading-tight font-bold tracking-tighter font-serif">
              A Day at Wild Sprouts
            </h2>
            <div className="flex flex-wrap -mx-2 text-center md:text-left">
              <div className="w-full md:w-1/2 px-2 mb-8">
                <div className="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-green-g1 font-semibold rounded-full font-serif">
                  1
                </div>
                <h3 className="mb-2 text-xl font-bold">Morning Circle</h3>
                <p className="font-medium text-coolGray-500">
                  We gather together to welcome the day, check on our animal
                  friends, and set intentions for our adventures.
                </p>
              </div>
              <div className="w-full md:w-1/2 px-2 mb-8">
                <div className="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-green-g1 font-semibold rounded-full font-serif">
                  2
                </div>
                <h3 className="mb-2 text-xl font-bold">Hands-On Learning</h3>
                <p className="font-medium text-coolGray-500">
                  Children engage in meaningful work: tending gardens, caring
                  for animals, and exploring the rhythms of the seasons.
                </p>
              </div>
              <div className="w-full md:w-1/2 px-2 mb-8">
                <div className="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-green-g1 font-semibold rounded-full font-serif">
                  3
                </div>
                <h3 className="mb-2 text-xl font-bold">Free Play</h3>
                <p className="font-medium text-coolGray-500">
                  Unstructured time in nature allows children to follow their
                  curiosity, build forts, create art, and develop social skills.
                </p>
              </div>
              <div className="w-full md:w-1/2 px-2">
                <div className="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-green-g1 font-semibold rounded-full font-serif">
                  4
                </div>
                <h3 className="mb-2 text-xl font-bold">Closing & Reflection</h3>
                <p className="font-medium text-coolGray-500">
                  We share stories, songs, and gratitude for the day's
                  experiences before saying goodbye to our friends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
