"use client"

import Image from "next/image"
import { FaHandshake, FaPalette, FaSeedling, FaUsers } from "react-icons/fa"
import { GiGoat, GiPlantSeed } from "react-icons/gi"
import FadeIn from "../../components/FadeIn"
import ScaleIn from "../../components/ScaleIn"

export default function AboutPage() {
  return (
    <div className="bg-beige-b1 pt-32">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center -mx-4">
            <FadeIn
              direction="left"
              className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0"
            >
              <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-orange-o1 font-medium uppercase rounded-2xl">
                Our Story
              </span>
              <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl text-gray-g1 font-bold font-serif tracking-tighter">
                About Wild Sprouts
              </h1>
              <p className="mb-4 text-lg md:text-xl text-gray-g1 font-medium">
                Wild Sprouts Homestead School was founded on the belief that
                children thrive when they're connected to nature, animals, and
                meaningful work. Our homestead provides a unique learning
                environment where children can explore, create, and grow
                alongside the rhythms of farm life.
              </p>
              <p className="text-lg md:text-xl text-gray-g1 font-medium">
                Every day at Wild Sprouts is an adventure in discovery, where
                children learn through hands-on experiences with our gardens,
                animals, and the changing seasons.
              </p>
            </FadeIn>
            <ScaleIn delay={0.2} className="w-full lg:w-1/2 px-4">
              <div className="relative mx-auto max-w-max">
                <Image
                  className="rounded-2xl shadow-2xl object-cover"
                  src="/real/wildsprouts.png"
                  alt="Wild Sprouts Homestead School"
                  width={600}
                  height={450}
                  priority
                />
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <FadeIn className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-green-g1 font-medium uppercase rounded-2xl">
              Our Philosophy
            </span>
            <h2 className="mb-6 text-4xl md:text-5xl text-gray-g1 font-bold font-serif tracking-tighter">
              Learning Through Nature
            </h2>
            <p className="text-lg md:text-xl text-coolGray-500 font-medium">
              We believe that children are naturally curious, capable, and
              creative. Our approach is rooted in respect for the child,
              connection to nature, and the understanding that real learning
              happens through meaningful, hands-on experiences.
            </p>
          </FadeIn>

          <div className="flex flex-wrap -mx-4">
            <FadeIn delay={0.1} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-12">
              <div className="text-center">
                <div className="inline-flex items-center justify-center mb-4 w-16 h-16 text-white bg-green-g1 rounded-full">
                  <GiPlantSeed className="text-3xl" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-g1">
                  Nature-Based
                </h3>
                <p className="text-coolGray-500 font-medium">
                  Children learn best when they're connected to the natural
                  world. Our outdoor classroom provides endless opportunities
                  for exploration and discovery.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-12">
              <div className="text-center">
                <div className="inline-flex items-center justify-center mb-4 w-16 h-16 text-white bg-green-g1 rounded-full">
                  <GiGoat className="text-3xl" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-g1">
                  Animal Connection
                </h3>
                <p className="text-coolGray-500 font-medium">
                  Caring for animals teaches responsibility, empathy, and
                  respect for all living things. Cooper the horse, sheep Marvin
                  & Maynard, Roo and the girls, bunnies Leo & Tootsie, Dixie the
                  cat, and Bear the dog are beloved members of our community.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-12">
              <div className="text-center">
                <div className="inline-flex items-center justify-center mb-4 w-16 h-16 text-white bg-green-g1 rounded-full">
                  <FaUsers className="text-3xl" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-g1">
                  Mixed-Age Learning
                </h3>
                <p className="text-coolGray-500 font-medium">
                  Our mixed-age approach mirrors family dynamics, allowing
                  children to learn from one another and develop leadership
                  skills naturally.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-12">
              <div className="text-center">
                <div className="inline-flex items-center justify-center mb-4 w-16 h-16 text-white bg-green-g1 rounded-full">
                  <FaPalette className="text-3xl" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-g1">
                  Creative Expression
                </h3>
                <p className="text-coolGray-500 font-medium">
                  Art, music, and imaginative play are woven throughout our day,
                  encouraging children to express themselves and develop their
                  unique voices.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-12">
              <div className="text-center">
                <div className="inline-flex items-center justify-center mb-4 w-16 h-16 text-white bg-green-g1 rounded-full">
                  <FaSeedling className="text-3xl" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-g1">
                  Seasonal Rhythms
                </h3>
                <p className="text-coolGray-500 font-medium">
                  We follow the natural rhythms of the seasons, planting,
                  harvesting, and celebrating the cycles of the year together.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-12">
              <div className="text-center">
                <div className="inline-flex items-center justify-center mb-4 w-16 h-16 text-white bg-green-g1 rounded-full">
                  <FaHandshake className="text-3xl" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-g1">
                  Community Focus
                </h3>
                <p className="text-coolGray-500 font-medium">
                  We believe in building strong relationships with families and
                  fostering a sense of belonging and community among children,
                  staff, and parents.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-g1">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="mb-12 text-4xl md:text-5xl text-white font-bold font-serif tracking-tighter text-center">
                Our Core Values
              </h2>
            </FadeIn>

            <div className="space-y-8">
              <FadeIn delay={0.1} direction="left">
                <div className="bg-white/10 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-orange-o1 mb-3">
                    Respect
                  </h3>
                  <p className="text-white font-medium">
                    We treat children, families, animals, and nature with deep
                    respect. We honor each child's unique journey and support
                    their individual development.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2} direction="right">
                <div className="bg-white/10 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-orange-o1 mb-3">
                    Connection
                  </h3>
                  <p className="text-white font-medium">
                    We foster meaningful connections - to nature, to animals, to
                    each other, and to our community. These relationships are at
                    the heart of everything we do.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.3} direction="left">
                <div className="bg-white/10 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-orange-o1 mb-3">
                    Wonder
                  </h3>
                  <p className="text-white font-medium">
                    We cultivate a sense of wonder and curiosity about the
                    world. Every day brings new discoveries and opportunities
                    for amazement.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.4} direction="right">
                <div className="bg-white/10 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-orange-o1 mb-3">
                    Curiosity
                  </h3>
                  <p className="text-white font-medium">
                    We nurture children's natural sense of wonder, encouraging
                    them to ask questions, explore freely, and discover the
                    magic in everyday moments on the homestead.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-beige-b1">
        <FadeIn className="container px-4 mx-auto text-center">
          <h2 className="mb-6 text-4xl md:text-5xl text-gray-g1 font-bold font-serif tracking-tighter">
            Ready to Visit Our Homestead?
          </h2>
          <p className="mb-8 text-lg md:text-xl text-gray-g1 font-medium max-w-2xl mx-auto">
            Come see our homestead in action at 2125 E. Star Ln in Meridian,
            Idaho. Meet Cooper, Marvin, Maynard, and all our animal friends!
            Classes run Monday-Thursday, 9:30am-1:30pm during our school year
            (September-May).
          </p>
          <a
            href="/contact?interest=tour"
            className="inline-block py-5 px-7 text-base md:text-lg leading-4 text-green-50 font-medium text-center bg-green-g1 hover:bg-[#5a6b50] focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-green-g1 rounded-md shadow-sm transition-all duration-500"
          >
            Schedule a Tour
          </a>
        </FadeIn>
      </section>
    </div>
  )
}
