"use client"

import Image from "next/image"
import FadeIn from "./FadeIn"
import ScaleIn from "./ScaleIn"

export default function BlueMountainSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div></div>
      <div className="py-20 md:py-28">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap xl:items-center -mx-4">
            <FadeIn
              direction="left"
              className="w-full md:w-1/2 px-4 mb-16 md:mb-0"
            >
              <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-orange-o1 font-medium uppercase rounded-2xl">
                Enrollment
              </span>
              <h2 className="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight font-serif text-gray-g1">
                Ready to Join Our Community?
              </h2>
              <p className="mb-8 text-lg md:text-xl text-coolGray-500 font-medium">
                We welcome families who share our values of nature-based
                education, hands-on learning, and building strong community
                connections. Come visit our homestead and see if Wild Sprouts is
                the right fit for your family.
              </p>
              <div className="flex flex-wrap">
                <div className="w-full md:w-auto py-1 md:py-0 md:mr-4">
                  <a
                    className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-green-50 font-medium text-center bg-green-g1 hover:bg-[#5a6b50] focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-green-g1 rounded-md shadow-sm transition-all duration-500"
                    href="/contact"
                  >
                    Contact Us
                  </a>
                </div>
                <div className="w-full md:w-auto py-1 md:py-0">
                  <a
                    className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-coolGray-800 hover:text-white font-medium text-center bg-white hover:bg-green-g1 focus:ring-2 focus:ring-coolGray-200 focus:ring-opacity-50 border border-coolGray-200 rounded-md shadow-sm transition-all duration-500"
                    href="/programs"
                  >
                    See Our Day
                  </a>
                </div>
              </div>
            </FadeIn>
            <ScaleIn delay={0.2} className="w-full md:w-1/2 px-4">
              <div className="relative mx-auto md:mr-0 max-w-max">
                <Image
                  className="relative rounded-2xl shadow-lg"
                  src="/real/cooper.png"
                  alt="Cooper the horse with sheep Marvin and Maynard at Wild Sprouts"
                  width={600}
                  height={800}
                />
              </div>
            </ScaleIn>
          </div>
        </div>
      </div>
    </section>
  )
}
