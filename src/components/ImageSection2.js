"use client"

import Image from "next/image"

export default function ImageSection() {
  return (
    <section className="relative bg-beige-b1 min-h-screen flex flex-col">
      <h2 className="sr-only">Wild Sprouts Experience</h2>

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/real/airplane.png"
          alt="Children learning through imaginative play at Wild Sprouts"
          fill
          className="object-cover -scale-x-100"
        />
      </div>

      {/* Gradient overlay - right to left */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/30 to-transparent z-[5]"></div>

      {/* Content */}
      <div className="relative z-10 flex-grow flex items-center justify-end">
        <span className="text-5xl lg:text-7xl text-beige-b1 font-serif mr-10 lg:mr-40">
          Learning
          <br /> Through Play
        </span>
      </div>

      {/* White swoop - always at the bottom */}
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
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </section>
  )
}
