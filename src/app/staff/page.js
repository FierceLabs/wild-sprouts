"use client"

import Image from "next/image"
import { FaGraduationCap, FaCheckCircle, FaHeartbeat, FaHeart, FaUsers, FaBook } from "react-icons/fa"

export default function StaffPage() {
  return (
    <div className="bg-beige-b1 pt-32">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container px-4 mx-auto text-center">
          <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-orange-o1 font-medium uppercase rounded-2xl">
            Meet Our Team
          </span>
          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl text-gray-g1 font-bold font-serif tracking-tighter">
            Our Dedicated Staff
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-g1 font-medium">
            Our experienced, passionate educators bring a deep love of nature, children, and homesteading to Wild Sprouts. Each staff member is committed to creating a nurturing, engaging environment where children can thrive.
          </p>
        </div>
      </section>

      {/* Staff Members Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          {/* Lead Teacher */}
          <div className="flex flex-wrap items-center -mx-4 mb-20">
            <div className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0">
              <div className="relative mx-auto max-w-max">
                <Image
                  className="rounded-2xl shadow-xl"
                  src="/woman.png"
                  alt="Sarah Martinez"
                  width={400}
                  height={400}
                />
                <div className="absolute -bottom-4 -right-4 bg-green-g1 text-white px-4 py-2 rounded-lg font-bold">
                  Lead Teacher
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/3 px-4">
              <h2 className="mb-4 text-3xl md:text-4xl text-gray-g1 font-bold font-serif">
                Sarah Martinez
              </h2>
              <p className="mb-4 text-lg text-coolGray-500 font-medium">
                Sarah brings over 15 years of experience in early childhood education and a lifelong passion for sustainable living. She founded Wild Sprouts in 2018 with a vision of creating a school where children could learn through meaningful connection with nature and animals.
              </p>
              <p className="mb-4 text-lg text-coolGray-500 font-medium">
                With her Master's degree in Environmental Education and certifications in Forest School pedagogy, Sarah creates curriculum that honors children's natural curiosity while fostering deep environmental awareness.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-green-g1 mr-2">✓</span>
                  <span className="text-coolGray-500">M.Ed. Environmental Education</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-g1 mr-2">✓</span>
                  <span className="text-coolGray-500">Certified Forest School Practitioner</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-g1 mr-2">✓</span>
                  <span className="text-coolGray-500">Wilderness First Responder</span>
                </div>
              </div>
            </div>
          </div>

          {/* Assistant Teacher */}
          <div className="flex flex-wrap items-center -mx-4 mb-20 flex-row-reverse">
            <div className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0">
              <div className="relative mx-auto max-w-max">
                <Image
                  className="rounded-2xl shadow-xl"
                  src="/woman.png"
                  alt="James Chen"
                  width={400}
                  height={400}
                />
                <div className="absolute -bottom-4 -left-4 bg-green-g1 text-white px-4 py-2 rounded-lg font-bold">
                  Assistant Teacher
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/3 px-4">
              <h2 className="mb-4 text-3xl md:text-4xl text-gray-g1 font-bold font-serif">
                James Chen
              </h2>
              <p className="mb-4 text-lg text-coolGray-500 font-medium">
                James joined Wild Sprouts in 2020, bringing his background in agriculture and his gentle, patient teaching style. Growing up on a family farm, he has a deep understanding of the rhythms of homestead life and loves sharing that knowledge with children.
              </p>
              <p className="mb-4 text-lg text-coolGray-500 font-medium">
                James specializes in animal husbandry and garden education, helping children develop hands-on skills and confidence in caring for living things.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-green-g1 mr-2">✓</span>
                  <span className="text-coolGray-500">B.S. Sustainable Agriculture</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-g1 mr-2">✓</span>
                  <span className="text-coolGray-500">Master Gardener Certification</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-g1 mr-2">✓</span>
                  <span className="text-coolGray-500">CPR & First Aid Certified</span>
                </div>
              </div>
            </div>
          </div>

          {/* Nature Educator */}
          <div className="flex flex-wrap items-center -mx-4 mb-20">
            <div className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0">
              <div className="relative mx-auto max-w-max">
                <Image
                  className="rounded-2xl shadow-xl"
                  src="/woman.png"
                  alt="Emma Thompson"
                  width={400}
                  height={400}
                />
                <div className="absolute -bottom-4 -right-4 bg-green-g1 text-white px-4 py-2 rounded-lg font-bold">
                  Nature Educator
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/3 px-4">
              <h2 className="mb-4 text-3xl md:text-4xl text-gray-g1 font-bold font-serif">
                Emma Thompson
              </h2>
              <p className="mb-4 text-lg text-coolGray-500 font-medium">
                Emma is a naturalist with a gift for helping children see the wonder in the world around them. Whether tracking animal footprints, identifying bird calls, or discovering insects, Emma brings infectious enthusiasm to nature exploration.
              </p>
              <p className="mb-4 text-lg text-coolGray-500 font-medium">
                She leads our forest walks and nature journaling activities, helping children develop observation skills and scientific thinking through hands-on discovery.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-green-g1 mr-2">✓</span>
                  <span className="text-coolGray-500">B.S. Environmental Science</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-g1 mr-2">✓</span>
                  <span className="text-coolGray-500">Certified Nature Interpreter</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-g1 mr-2">✓</span>
                  <span className="text-coolGray-500">Leave No Trace Trainer</span>
                </div>
              </div>
            </div>
          </div>

          {/* Creative Arts Teacher */}
          <div className="flex flex-wrap items-center -mx-4 flex-row-reverse">
            <div className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0">
              <div className="relative mx-auto max-w-max">
                <Image
                  className="rounded-2xl shadow-xl"
                  src="/woman.png"
                  alt="Maria Rodriguez"
                  width={400}
                  height={400}
                />
                <div className="absolute -bottom-4 -left-4 bg-green-g1 text-white px-4 py-2 rounded-lg font-bold">
                  Arts Teacher
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/3 px-4">
              <h2 className="mb-4 text-3xl md:text-4xl text-gray-g1 font-bold font-serif">
                Maria Rodriguez
              </h2>
              <p className="mb-4 text-lg text-coolGray-500 font-medium">
                Maria brings joy, creativity, and cultural richness to Wild Sprouts. Her background in art education and love of nature-based crafts inspire children to express themselves through multiple mediums.
              </p>
              <p className="mb-4 text-lg text-coolGray-500 font-medium">
                From natural dyes to clay sculpting to music-making with found objects, Maria helps children discover their creative voices while honoring the materials that nature provides.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-green-g1 mr-2">✓</span>
                  <span className="text-coolGray-500">B.F.A. Art Education</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-g1 mr-2">✓</span>
                  <span className="text-coolGray-500">Reggio Emilia Trained</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-g1 mr-2">✓</span>
                  <span className="text-coolGray-500">Music & Movement Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-20 bg-gray-g1">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-12 text-4xl md:text-5xl text-white font-bold font-serif tracking-tighter text-center">
              Our Commitment to Excellence
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <FaGraduationCap className="text-orange-o1 text-2xl mr-3" />
                  <h3 className="text-xl font-bold text-orange-o1">Qualified & Experienced</h3>
                </div>
                <p className="text-white font-medium">
                  All staff hold degrees in education or related fields and undergo ongoing professional development in nature-based and early childhood education.
                </p>
              </div>

              <div className="bg-white/10 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <FaCheckCircle className="text-orange-o1 text-2xl mr-3" />
                  <h3 className="text-xl font-bold text-orange-o1">Background Checked</h3>
                </div>
                <p className="text-white font-medium">
                  Every team member completes comprehensive background checks and reference verification before joining our school.
                </p>
              </div>

              <div className="bg-white/10 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <FaHeartbeat className="text-orange-o1 text-2xl mr-3" />
                  <h3 className="text-xl font-bold text-orange-o1">Safety Certified</h3>
                </div>
                <p className="text-white font-medium">
                  All staff maintain current CPR, First Aid, and child safety certifications. Several team members hold Wilderness First Responder credentials.
                </p>
              </div>

              <div className="bg-white/10 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <FaHeart className="text-orange-o1 text-2xl mr-3" />
                  <h3 className="text-xl font-bold text-orange-o1">Passionate Educators</h3>
                </div>
                <p className="text-white font-medium">
                  Beyond credentials, our team shares a genuine love for children, nature, and creating meaningful learning experiences every day.
                </p>
              </div>

              <div className="bg-white/10 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <FaUsers className="text-orange-o1 text-2xl mr-3" />
                  <h3 className="text-xl font-bold text-orange-o1">Low Ratios</h3>
                </div>
                <p className="text-white font-medium">
                  We maintain a 1:6 teacher-to-child ratio (and 1:4 for our youngest learners) to ensure each child receives individual attention.
                </p>
              </div>

              <div className="bg-white/10 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <FaBook className="text-orange-o1 text-2xl mr-3" />
                  <h3 className="text-xl font-bold text-orange-o1">Continuous Learning</h3>
                </div>
                <p className="text-white font-medium">
                  Our staff regularly attend workshops, conferences, and training to stay current with best practices in outdoor and early childhood education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-beige-b1">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-6 text-4xl md:text-5xl text-gray-g1 font-bold font-serif tracking-tighter">
            Meet Us in Person
          </h2>
          <p className="mb-8 text-lg md:text-xl text-gray-g1 font-medium max-w-2xl mx-auto">
            The best way to get to know our team is to visit us at the homestead. Schedule a tour and see our staff in action!
          </p>
          <a
            href="/contact"
            className="inline-block py-5 px-7 text-base md:text-lg leading-4 text-green-50 font-medium text-center bg-green-g1 hover:bg-[#5a6b50] focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-green-g1 rounded-md shadow-sm transition-all duration-500"
          >
            Schedule a Tour
          </a>
        </div>
      </section>
    </div>
  )
}
