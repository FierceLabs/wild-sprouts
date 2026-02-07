"use client"

import { FaCarrot, FaTree } from "react-icons/fa"
import { GiGoat, GiPlantSeed } from "react-icons/gi"
import FadeIn from "./FadeIn"

export default function AffiliateSites() {
  return (
    <section className="py-20 xl:py-24 bg-beige-b1 z-20 overflow-hidden mt-[-80px]">
      <div className="wave wave-top w-full mb-[-2px]">
        <svg
          width="1920"
          height="155"
          viewBox="0 0 1920 155"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1919.93 86.1175H1453.41C1111.1 86.1175 773.652 0 480.033 0C186.415 0 0.0664062 86.1175 0.0664062 86.1175V154.66H1919.93V86.1175Z"
            fill="#F5F3E7"
          />
        </svg>
      </div>
      <div className="container px-4 mx-auto max-w-5xl">
        <FadeIn className="mb-12 text-center">
          <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-orange-o1 font-medium uppercase rounded-2xl">
            Nature-Based Learning
          </span>
          <h2 className="mb-6 text-4xl md:text-5xl text-gray-g1 font-bold font-serif tracking-tighter">
            Join Our Growing Community
          </h2>
          <p className="text-lg md:text-xl text-gray-g1 font-medium max-w-3xl mx-auto">
            At Wild Sprouts Homestead School, children connect with nature
            through meaningful, hands-on experiences. Our curriculum is rooted
            in the daily rhythms of homestead life, where learning happens
            naturally through caring for animals, tending gardens, and exploring
            the forest.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <FadeIn delay={0.1} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-b1 rounded-full flex items-center justify-center mr-4">
                <GiGoat className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-g1 font-serif">
                Animal Care & Connection
              </h3>
            </div>
            <p className="text-gray-600">
              Children develop empathy and responsibility through daily
              interactions with Cooper the horse, sheep Marvin and Maynard,
              bunnies Leo and Tootsie, Dixie the cat, and Bear the dog. They
              learn to observe, care for, and respect all living creatures.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-b1 rounded-full flex items-center justify-center mr-4">
                <GiPlantSeed className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-g1 font-serif">
                Gardens & Growing
              </h3>
            </div>
            <p className="text-gray-600">
              From seed to harvest, children experience the full cycle of
              growing food. They dig in the dirt, water seedlings, and discover
              where their food comes from through hands-on garden work.
            </p>
          </FadeIn>

          <FadeIn delay={0.3} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-b1 rounded-full flex items-center justify-center mr-4">
                <FaTree className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-g1 font-serif">
                Outdoor Exploration
              </h3>
            </div>
            <p className="text-gray-600">
              Our outdoor classroom offers endless opportunities for discovery,
              imaginative play, and building confidence through unstructured
              outdoor time. Children explore with Bear, collect leaves, and
              create in nature.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-b1 rounded-full flex items-center justify-center mr-4">
                <FaCarrot className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-g1 font-serif">
                Farm to Table
              </h3>
            </div>
            <p className="text-gray-600">
              Children participate in preparing snacks and meals with eggs from
              the girls and vegetables from our garden, learning about
              nutrition, food preparation, and the joy of sharing food they
              helped produce.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
