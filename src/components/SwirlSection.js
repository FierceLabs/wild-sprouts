"use client"

import React from "react"
import Image from "next/image"
import SiteSlider from "./SiteSlider"
import { GiGoat, GiPlantSeed } from "react-icons/gi"
import { FaTree } from "react-icons/fa"

export default function SwirlSection() {
  return (
    <section className="wave-top wave-bottom overflow-hidden bg-white">
      <div className="wave wave-top w-full text-coolGray-900 mb-[-2px]">
        <svg
          width="1920"
          height="155"
          viewBox="0 0 1920 155"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1919.93 86.1175H1453.41C1111.1 86.1175 773.652 0 480.033 0C186.415 0 0.0664062 86.1175 0.0664062 86.1175V154.66H1919.93V86.1175Z"
            fill="#46594D"
          />
        </svg>
      </div>
      <div className="py-16 md:py-24 bg-gray-g1">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col justify-center">
            <div className="w-full md:w-1/2 px-4 mb-20 lg:mb-0">
              <div className="max-w-md mx-auto">
                <h2 className="mb-8 text-4xl md:text-5xl font-heading font-bold font-serif text-orange-o1 md:leading-15">
                  Meet Our Homestead Friends
                </h2>
                <ul className="mb-8">
                  <li className="flex items-center mb-4">
                    <div className="mr-3 w-8 h-8 bg-orange-o1 rounded-full flex items-center justify-center flex-shrink-0">
                      <GiGoat className="text-gray-g1 text-xl" />
                    </div>
                    <span className="text-lg md:text-xl font-heading text-white">
                      Friendly goats, chickens, and rabbits
                    </span>
                  </li>
                  <li className="flex items-center mb-4">
                    <div className="mr-3 w-8 h-8 bg-orange-o1 rounded-full flex items-center justify-center flex-shrink-0">
                      <GiPlantSeed className="text-gray-g1 text-xl" />
                    </div>
                    <span className="text-lg md:text-xl font-heading text-white">
                      Seasonal gardens and harvest activities
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3 w-8 h-8 bg-orange-o1 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaTree className="text-gray-g1 text-xl" />
                    </div>
                    <span className="text-lg md:text-xl font-heading text-white">
                      Nature trails and outdoor exploration
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-4 mt-20">
              <SiteSlider />
            </div>
          </div>
        </div>
      </div>
      <div className="wave wave-bottom w-full rotate-180 mt-[-2px]">
        <svg
          width="1920"
          height="155"
          viewBox="0 0 1920 155"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1919.93 86.1175H1453.41C1111.1 86.1175 773.652 0 480.033 0C186.415 0 0.0664062 86.1175 0.0664062 86.1175V154.66H1919.93V86.1175Z"
            fill="#46594D"
          />
        </svg>
      </div>
    </section>
  )
}
