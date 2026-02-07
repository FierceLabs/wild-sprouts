"use client"

import Image from "next/image"
import {
  FaCheckCircle,
  FaGraduationCap,
  FaHeart,
  FaHeartbeat,
} from "react-icons/fa"
import FadeIn from "../../components/FadeIn"
import ScaleIn from "../../components/ScaleIn"

export default function StaffPage() {
  return (
    <div className="bg-beige-b1 pt-32">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <FadeIn className="container px-4 mx-auto text-center">
          <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-orange-o1 font-medium uppercase rounded-2xl">
            Your Guide
          </span>
          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl text-gray-g1 font-bold font-serif tracking-tighter">
            Meet Your Teacher
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-g1 font-medium">
            At Wild Sprouts, your child will learn from a passionate educator
            who brings a deep love of nature, children, and homesteading to
            every day.
          </p>
        </FadeIn>
      </section>

      {/* Teacher Profile Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* Landscape Image */}
            <ScaleIn className="mb-12">
              <Image
                className="rounded-2xl shadow-xl w-full object-cover"
                src="/real/torrie.png"
                alt="Torie Nagle at Wild Sprouts Homestead"
                width={900}
                height={500}
                priority
              />
            </ScaleIn>

            {/* Bio Content */}
            <FadeIn>
              <div className="text-center mb-8">
                <h2 className="mb-4 text-3xl md:text-4xl text-gray-g1 font-bold font-serif">
                  Torie Nagle
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-lg text-coolGray-500 font-medium mb-4">
                    Torie brings a lifelong passion for nature, animals, and
                    early childhood education to Wild Sprouts. She created Wild
                    Sprouts with a vision of a school where children could learn
                    through meaningful connection with nature and animals on the
                    homestead.
                  </p>
                  <p className="text-lg text-coolGray-500 font-medium">
                    With hands-on experience in homesteading and a gentle,
                    nurturing teaching style, Torie creates a curriculum that
                    honors children's natural curiosity while fostering deep
                    environmental awareness and a love for all living things.
                  </p>
                </div>
                <div className="bg-beige-b1 rounded-xl p-6">
                  <h3 className="font-bold text-gray-g1 mb-4 text-lg">
                    Qualifications
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="text-green-g1 mr-3 text-lg">✓</span>
                      <span className="text-coolGray-600 font-medium">
                        Early Childhood Education
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-g1 mr-3 text-lg">✓</span>
                      <span className="text-coolGray-600 font-medium">
                        Nature-Based Learning
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-g1 mr-3 text-lg">✓</span>
                      <span className="text-coolGray-600 font-medium">
                        CPR & First Aid Certified
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-g1 mr-3 text-lg">✓</span>
                      <span className="text-coolGray-600 font-medium">
                        Background Checked
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 bg-gray-g1">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="mb-12 text-4xl md:text-5xl text-white font-bold font-serif tracking-tighter text-center">
                Our Commitment to Your Child
              </h2>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-8">
              <FadeIn delay={0.1}>
                <div className="bg-white/10 rounded-lg p-6 h-full">
                  <div className="flex items-center mb-3">
                    <FaGraduationCap className="text-orange-o1 text-2xl mr-3" />
                    <h3 className="text-xl font-bold text-orange-o1">
                      Experienced Educator
                    </h3>
                  </div>
                  <p className="text-white font-medium">
                    Torie brings years of experience working with young children
                    and a deep commitment to nature-based education.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="bg-white/10 rounded-lg p-6 h-full">
                  <div className="flex items-center mb-3">
                    <FaCheckCircle className="text-orange-o1 text-2xl mr-3" />
                    <h3 className="text-xl font-bold text-orange-o1">
                      Background Checked
                    </h3>
                  </div>
                  <p className="text-white font-medium">
                    Complete background checks and references verified to ensure
                    a safe environment for your child.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-white/10 rounded-lg p-6 h-full">
                  <div className="flex items-center mb-3">
                    <FaHeartbeat className="text-orange-o1 text-2xl mr-3" />
                    <h3 className="text-xl font-bold text-orange-o1">
                      Safety Certified
                    </h3>
                  </div>
                  <p className="text-white font-medium">
                    Current CPR, First Aid, and child safety certifications
                    maintained at all times.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.25}>
                <div className="bg-white/10 rounded-lg p-6 h-full">
                  <div className="flex items-center mb-3">
                    <FaHeart className="text-orange-o1 text-2xl mr-3" />
                    <h3 className="text-xl font-bold text-orange-o1">
                      Passionate & Caring
                    </h3>
                  </div>
                  <p className="text-white font-medium">
                    A genuine love for children, nature, and creating meaningful
                    learning experiences every single day.
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
            Come Say Hello
          </h2>
          <p className="mb-8 text-lg md:text-xl text-gray-g1 font-medium max-w-2xl mx-auto">
            The best way to get to know Torie is to visit us at the homestead.
            Schedule a tour and see Wild Sprouts in action!
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
