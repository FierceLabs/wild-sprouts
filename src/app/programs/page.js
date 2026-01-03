"use client"

import Image from "next/image"
import { GiPlantSeed } from "react-icons/gi"
import { FaTree, FaSeedling } from "react-icons/fa"

export default function ProgramsPage() {
  return (
    <div className="bg-beige-b1 pt-32">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container px-4 mx-auto text-center">
          <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-orange-o1 font-medium uppercase rounded-2xl">
            Our Programs
          </span>
          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl text-gray-g1 font-bold font-serif tracking-tighter">
            Programs & Curriculum
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-g1 font-medium">
            Wild Sprouts offers nature-based programs for children ages 2-6, designed to foster curiosity, creativity, and a deep connection to the natural world.
          </p>
        </div>
      </section>

      {/* Age Groups Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-4xl md:text-5xl text-gray-g1 font-bold font-serif tracking-tighter text-center">
            Age Groups
          </h2>

          <div className="flex flex-wrap -mx-4">
            {/* Little Sprouts (2-3 years) */}
            <div className="w-full lg:w-1/2 px-4 mb-12">
              <div className="bg-beige-b1 rounded-2xl p-8 h-full">
                <div className="inline-flex items-center justify-center mb-4 w-16 h-16 text-white bg-green-g1 rounded-full">
                  <GiPlantSeed className="text-3xl" />
                </div>
                <h3 className="mb-4 text-3xl font-bold text-gray-g1 font-serif">
                  Little Sprouts (Ages 2-3)
                </h3>
                <p className="mb-4 text-lg text-coolGray-500 font-medium">
                  Our youngest learners explore the world through sensory play, gentle animal interactions, and nature walks. This program focuses on building confidence, social skills, and a love for the outdoors.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-g1 mr-2">✓</span>
                    <span className="text-coolGray-500">Gentle introduction to farm animals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-g1 mr-2">✓</span>
                    <span className="text-coolGray-500">Sensory-rich outdoor exploration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-g1 mr-2">✓</span>
                    <span className="text-coolGray-500">Simple gardening activities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-g1 mr-2">✓</span>
                    <span className="text-coolGray-500">Music, movement, and creative play</span>
                  </li>
                </ul>
                <div className="border-t border-gray-300 pt-4">
                  <p className="text-sm font-semibold text-gray-g1">Schedule: Tuesday & Thursday, 9am-12pm</p>
                </div>
              </div>
            </div>

            {/* Growing Sprouts (3-4 years) */}
            <div className="w-full lg:w-1/2 px-4 mb-12">
              <div className="bg-beige-b1 rounded-2xl p-8 h-full">
                <div className="inline-flex items-center justify-center mb-4 w-16 h-16 text-white bg-green-g1 rounded-full">
                  <FaSeedling className="text-3xl" />
                </div>
                <h3 className="mb-4 text-3xl font-bold text-gray-g1 font-serif">
                  Growing Sprouts (Ages 3-4)
                </h3>
                <p className="mb-4 text-lg text-coolGray-500 font-medium">
                  Children at this age are ready for more independence and responsibility. They help care for animals, work in the garden, and engage in creative projects inspired by nature.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-g1 mr-2">✓</span>
                    <span className="text-coolGray-500">Hands-on animal care and feeding</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-g1 mr-2">✓</span>
                    <span className="text-coolGray-500">Garden planting and harvesting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-g1 mr-2">✓</span>
                    <span className="text-coolGray-500">Nature crafts and art projects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-g1 mr-2">✓</span>
                    <span className="text-coolGray-500">Forest exploration and play</span>
                  </li>
                </ul>
                <div className="border-t border-gray-300 pt-4">
                  <p className="text-sm font-semibold text-gray-g1">Schedule: Monday, Wednesday, Friday, 9am-1pm</p>
                </div>
              </div>
            </div>

            {/* Wild Sprouts (4-6 years) */}
            <div className="w-full px-4 mb-12">
              <div className="bg-beige-b1 rounded-2xl p-8">
                <div className="inline-flex items-center justify-center mb-4 w-16 h-16 text-white bg-green-g1 rounded-full">
                  <FaTree className="text-3xl" />
                </div>
                <h3 className="mb-4 text-3xl font-bold text-gray-g1 font-serif">
                  Wild Sprouts (Ages 4-6)
                </h3>
                <p className="mb-4 text-lg text-coolGray-500 font-medium">
                  Our oldest students take on leadership roles, mentor younger children, and engage in complex projects. They develop problem-solving skills, scientific thinking, and a deep understanding of the natural world.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-g1 mr-2">✓</span>
                      <span className="text-coolGray-500">Advanced animal husbandry skills</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-g1 mr-2">✓</span>
                      <span className="text-coolGray-500">Garden planning and maintenance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-g1 mr-2">✓</span>
                      <span className="text-coolGray-500">Nature journaling and observation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-g1 mr-2">✓</span>
                      <span className="text-coolGray-500">Cooking with homegrown ingredients</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-g1 mr-2">✓</span>
                      <span className="text-coolGray-500">STEM activities in nature</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-g1 mr-2">✓</span>
                      <span className="text-coolGray-500">Storytelling and literacy activities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-g1 mr-2">✓</span>
                      <span className="text-coolGray-500">Leadership and mentoring opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-g1 mr-2">✓</span>
                      <span className="text-coolGray-500">Seasonal celebrations and traditions</span>
                    </li>
                  </ul>
                </div>
                <div className="border-t border-gray-300 pt-4">
                  <p className="text-sm font-semibold text-gray-g1">Schedule: Monday-Friday, 9am-2pm (Extended day available until 3:30pm)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-20 bg-gray-g1">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-12 text-4xl md:text-5xl text-white font-bold font-serif tracking-tighter text-center">
              Our Curriculum
            </h2>

            <div className="space-y-8">
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-orange-o1 mb-3">Nature Studies</h3>
                <p className="text-white font-medium">
                  Children learn about plants, animals, weather, and ecosystems through direct observation and hands-on exploration. We follow the seasons, tracking changes in our environment and celebrating nature's rhythms.
                </p>
              </div>

              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-orange-o1 mb-3">Animal Husbandry</h3>
                <p className="text-white font-medium">
                  Daily care of our goats, chickens, and rabbits teaches responsibility, empathy, and biological concepts. Children learn where food comes from and develop respect for all living creatures.
                </p>
              </div>

              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-orange-o1 mb-3">Gardening & Sustainability</h3>
                <p className="text-white font-medium">
                  From seed to harvest, children participate in all aspects of growing food. We compost, save seeds, and learn about sustainable practices that care for the earth.
                </p>
              </div>

              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-orange-o1 mb-3">Arts & Creative Expression</h3>
                <p className="text-white font-medium">
                  Nature-inspired art, music, drama, and storytelling are woven throughout our days. Children work with natural materials and develop their unique creative voices.
                </p>
              </div>

              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-orange-o1 mb-3">Early Literacy & Math</h3>
                <p className="text-white font-medium">
                  Academic skills develop naturally through meaningful activities: counting eggs, measuring garden beds, reading stories, and journaling about observations.
                </p>
              </div>

              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-orange-o1 mb-3">Social & Emotional Learning</h3>
                <p className="text-white font-medium">
                  Through mixed-age interactions, collaborative work, and conflict resolution, children develop strong social skills, emotional intelligence, and a sense of community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Schedule Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-12 text-4xl md:text-5xl text-gray-g1 font-bold font-serif tracking-tighter text-center">
              A Typical Day
            </h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-24 font-bold text-green-g1">9:00am</div>
                <div>
                  <h4 className="font-bold text-gray-g1 mb-2">Morning Arrival & Circle Time</h4>
                  <p className="text-coolGray-500">Children gather for songs, stories, and checking in with our animal friends.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-24 font-bold text-green-g1">9:30am</div>
                <div>
                  <h4 className="font-bold text-gray-g1 mb-2">Morning Work</h4>
                  <p className="text-coolGray-500">Animal care, garden tasks, and seasonal activities.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-24 font-bold text-green-g1">10:30am</div>
                <div>
                  <h4 className="font-bold text-gray-g1 mb-2">Snack & Story Time</h4>
                  <p className="text-coolGray-500">Healthy snacks (often from our garden!) and nature-themed stories.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-24 font-bold text-green-g1">11:00am</div>
                <div>
                  <h4 className="font-bold text-gray-g1 mb-2">Free Play & Exploration</h4>
                  <p className="text-coolGray-500">Unstructured time for building, creating, and following curiosity.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-24 font-bold text-green-g1">12:00pm</div>
                <div>
                  <h4 className="font-bold text-gray-g1 mb-2">Lunch (Full Day Students)</h4>
                  <p className="text-coolGray-500">Family-style lunch with food from our garden when possible.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-24 font-bold text-green-g1">12:30pm</div>
                <div>
                  <h4 className="font-bold text-gray-g1 mb-2">Quiet Time & Creative Activities</h4>
                  <p className="text-coolGray-500">Art projects, nature journals, or rest for younger children.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-24 font-bold text-green-g1">1:30pm</div>
                <div>
                  <h4 className="font-bold text-gray-g1 mb-2">Closing Circle & Goodbye</h4>
                  <p className="text-coolGray-500">Songs, gratitude, and preparing for tomorrow's adventures.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-beige-b1">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-6 text-4xl md:text-5xl text-gray-g1 font-bold font-serif tracking-tighter">
            Ready to Learn More?
          </h2>
          <p className="mb-8 text-lg md:text-xl text-gray-g1 font-medium max-w-2xl mx-auto">
            We'd love to answer your questions and show you our programs in action.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="inline-block py-5 px-7 text-base md:text-lg leading-4 text-green-50 font-medium text-center bg-green-g1 hover:bg-[#5a6b50] focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-green-g1 rounded-md shadow-sm transition-all duration-500"
            >
              Schedule a Tour
            </a>
            <a
              href="/staff"
              className="inline-block py-5 px-7 text-base md:text-lg leading-4 text-coolGray-800 hover:text-white font-medium text-center bg-white hover:bg-green-g1 focus:ring-2 focus:ring-coolGray-200 focus:ring-opacity-50 border border-coolGray-200 rounded-md shadow-sm transition-all duration-500"
            >
              Meet Our Staff
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
