"use client"

import React from "react"
import Image from "next/image"

export default function ImageSection() {
  return (
    <section className="relative bg-beige-b1 min-h-screen flex flex-col">
      <h1 className="sr-only">Wild Sprouts Homestead School</h1>

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/barn.jpg"
          alt="Wild Sprouts Homestead barn"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Full-width gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-[5]"></div>

      {/* Content */}
      <div className="relative z-10 flex-grow flex items-center">
        <div className="absolute top-[30%] left-[10vw]">
          <span className="text-5xl lg:text-7xl text-beige-b1 font-serif">
            Growing Minds,
            <br /> Nurturing Nature
          </span>
          <Image
            width={200}
            height={200}
            className="mt-5"
            src="/wild-sprouts-logo.png"
            alt="Wild Sprouts Logo"
            style={{
              width: '200px',
              height: 'auto',
              filter: 'brightness(0) invert(1) sepia(0.2) saturate(0.3) hue-rotate(15deg) brightness(1.1)'
            }}
          />
        </div>
      </div>

      {/* Swoop - always at the bottom */}
      <div className="relative z-10 mt-auto">
        <svg
          width="1920"
          height="155"
          viewBox="0 0 1920 155"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block translate-y-[30px]"
          preserveAspectRatio="none"
        >
          <path
            d="M1919.93 86.1175H1453.41C1111.1 86.1175 773.652 0 480.033 0C186.415 0 0.0664062 86.1175 0.0664062 86.1175V154.66H1919.93V86.1175Z"
            fill="#F5F3E7"
          />
        </svg>
      </div>
    </section>
  )
}
