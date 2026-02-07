"use client"

import Image from "next/image"
import { useState } from "react"
import FadeIn from "../../components/FadeIn"
import ScaleIn from "../../components/ScaleIn"

import Lightbox from "yet-another-react-lightbox"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"
import "yet-another-react-lightbox/plugins/thumbnails.css"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import "yet-another-react-lightbox/styles.css"

export default function OurDayPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(12)

  const galleryImages = [
    // Named images
    {
      src: "/real/feeding-the-girls.png",
      alt: "Children feeding the chickens",
      title: "Feeding the Girls",
    },
    {
      src: "/real/cooper.png",
      alt: "Cooper the horse with sheep",
      title: "Cooper & Friends",
    },
    {
      src: "/real/craft.png",
      alt: "Nature crafts and creative projects",
      title: "Creative Projects",
    },
    {
      src: "/real/garden.png",
      alt: "Children learning in the garden",
      title: "Garden Time",
    },
    {
      src: "/real/eggs.png",
      alt: "Fresh eggs from the girls",
      title: "Fresh Eggs",
    },
    {
      src: "/real/marvin-maynard.png",
      alt: "Marvin and Maynard the sheep",
      title: "Marvin & Maynard",
    },
    {
      src: "/real/bear-1.png",
      alt: "Bear the dog greeting children",
      title: "Bear Says Hello",
    },
    { src: "/real/leo.png", alt: "Leo the bunny", title: "Leo the Bunny" },
    {
      src: "/real/pumpkins.png",
      alt: "Pumpkin harvest time",
      title: "Pumpkin Harvest",
    },
    {
      src: "/real/leaves.png",
      alt: "Exploring fall leaves",
      title: "Fall Exploration",
    },
    {
      src: "/real/strawberries.png",
      alt: "Fresh strawberries from the garden",
      title: "Strawberry Picking",
    },
    { src: "/real/dixie.png", alt: "Dixie the cat", title: "Dixie the Cat" },
    {
      src: "/real/bear-2.png",
      alt: "Bear relaxing on the homestead",
      title: "Bear at Rest",
    },
    {
      src: "/real/chicken.png",
      alt: "Chickens on the homestead",
      title: "The Girls",
    },
    { src: "/real/corn.png", alt: "Fresh corn harvest", title: "Corn Harvest" },
    {
      src: "/real/ducks.png",
      alt: "Ducks at the homestead",
      title: "Duck Friends",
    },
    {
      src: "/real/egg-basket.png",
      alt: "Basket full of fresh eggs",
      title: "Egg Collection",
    },
    {
      src: "/real/farm.png",
      alt: "View of the homestead",
      title: "The Homestead",
    },
    {
      src: "/real/fridge.png",
      alt: "Farm fresh produce",
      title: "Fresh from the Farm",
    },
    {
      src: "/real/globe.png",
      alt: "Learning about the world",
      title: "Exploring the World",
    },
    {
      src: "/real/leo-1.png",
      alt: "Leo the bunny closeup",
      title: "Leo Closeup",
    },
    { src: "/real/roo.png", alt: "Roo the rooster", title: "Roo the Rooster" },
    {
      src: "/real/airplane.png",
      alt: "Imaginative play time",
      title: "Imaginative Play",
    },
    {
      src: "/real/garbage-truck.png",
      alt: "Learning through play",
      title: "Truck Time",
    },
    {
      src: "/real/toy-train.png",
      alt: "Train play time",
      title: "Train Adventures",
    },
    {
      src: "/real/wildsprouts.png",
      alt: "Wild Sprouts Homestead",
      title: "Wild Sprouts",
    },
    // Additional photos (img1-img24)
    {
      src: "/real/img1.png",
      alt: "Life at Wild Sprouts",
      title: "Homestead Life",
    },
    {
      src: "/real/img2.png",
      alt: "Daily adventures",
      title: "Daily Adventures",
    },
    {
      src: "/real/img3.png",
      alt: "Exploring nature",
      title: "Nature Exploration",
    },
    {
      src: "/real/img4.png",
      alt: "Learning together",
      title: "Learning Together",
    },
    { src: "/real/img5.png", alt: "Outdoor fun", title: "Outdoor Fun" },
    {
      src: "/real/img6.png",
      alt: "Hands-on learning",
      title: "Hands-On Learning",
    },
    { src: "/real/img7.png", alt: "Creative play", title: "Creative Play" },
    { src: "/real/img8.png", alt: "Animal care time", title: "Animal Care" },
    { src: "/real/img9.png", alt: "Morning activities", title: "Morning Time" },
    {
      src: "/real/img10.png",
      alt: "Garden exploration",
      title: "Garden Exploration",
    },
    { src: "/real/img11.png", alt: "Play time", title: "Play Time" },
    {
      src: "/real/img12.png",
      alt: "Friends at the farm",
      title: "Farm Friends",
    },
    {
      src: "/real/img13.png",
      alt: "Seasonal activities",
      title: "Seasonal Fun",
    },
    { src: "/real/img14.png", alt: "Discovery time", title: "Discovery Time" },
    {
      src: "/real/img15.png",
      alt: "Growing and learning",
      title: "Growing Together",
    },
    {
      src: "/real/img16.png",
      alt: "Homestead moments",
      title: "Special Moments",
    },
    { src: "/real/img17.png", alt: "Winter activities", title: "Winter Fun" },
    {
      src: "/real/img18.png",
      alt: "Exploring outdoors",
      title: "Outdoor Exploration",
    },
    {
      src: "/real/img19.png",
      alt: "Learning in nature",
      title: "Nature Learning",
    },
    { src: "/real/img20.png", alt: "Animal friends", title: "Animal Friends" },
    {
      src: "/real/img21.png",
      alt: "Summer adventures",
      title: "Summer Adventures",
    },
    { src: "/real/img22.png", alt: "Summer fun", title: "Summer Fun" },
    {
      src: "/real/img23.png",
      alt: "Summertime at the homestead",
      title: "Summertime",
    },
    {
      src: "/real/img24.png",
      alt: "Homestead adventures",
      title: "More Adventures",
    },
  ]

  // Convert to lightbox format
  const lightboxSlides = galleryImages.map(img => ({
    src: img.src,
    alt: img.alt,
    title: img.title,
  }))

  const visibleImages = galleryImages.slice(0, visibleCount)
  const hasMore = visibleCount < galleryImages.length

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 12, galleryImages.length))
  }

  const openLightbox = index => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <div className="bg-beige-b1 pt-32">
      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={lightboxSlides}
        plugins={[Zoom, Thumbnails]}
        zoom={{
          maxZoomPixelRatio: 3,
          scrollToZoom: true,
        }}
        thumbnails={{
          position: "bottom",
          width: 100,
          height: 80,
          gap: 8,
        }}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.9)" },
        }}
        carousel={{
          padding: "16px",
        }}
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center -mx-4">
            <FadeIn
              direction="left"
              className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0"
            >
              <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-orange-o1 font-medium uppercase rounded-2xl">
                Life at Wild Sprouts
              </span>
              <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl text-gray-g1 font-bold font-serif tracking-tighter">
                Our Day
              </h1>
              <p className="text-lg md:text-xl text-gray-g1 font-medium">
                Every day at Wild Sprouts is an adventure. Children ages 3-5
                explore, discover, and grow through hands-on experiences with
                animals, gardens, and nature. Our school year runs from Labor
                Day through Memorial Day, with classes Monday through Thursday,
                9:30am to 1:30pm.
              </p>
            </FadeIn>
            <ScaleIn delay={0.2} className="w-full lg:w-1/2 px-4">
              <div className="relative">
                <Image
                  src="/real/coffee.png"
                  alt="Morning coffee time at Wild Sprouts"
                  width={600}
                  height={450}
                  className="rounded-2xl shadow-2xl object-cover w-full"
                  priority
                />
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* Daily Schedule Section with Images */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-4 items-center">
            <FadeIn className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <h2 className="mb-8 text-4xl md:text-5xl text-gray-g1 font-bold font-serif tracking-tighter">
                A Typical Day
              </h2>

              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-20 font-bold text-green-g1">
                    9:30am
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-g1">Morning Circle</h4>
                    <p className="text-coolGray-500 text-sm">
                      Songs, stories, and greeting Bear
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-20 font-bold text-green-g1">
                    10:00am
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-g1">Morning Work</h4>
                    <p className="text-coolGray-500 text-sm">
                      Animal care and garden tasks
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-20 font-bold text-green-g1">
                    11:00am
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-g1">Snack & Stories</h4>
                    <p className="text-coolGray-500 text-sm">
                      Garden snacks and nature tales
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-20 font-bold text-green-g1">
                    11:30am
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-g1">Free Exploration</h4>
                    <p className="text-coolGray-500 text-sm">
                      Building, creating, discovering
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-20 font-bold text-green-g1">
                    12:15pm
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-g1">Lunch</h4>
                    <p className="text-coolGray-500 text-sm">
                      Family-style with garden produce
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-20 font-bold text-green-g1">
                    12:45pm
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-g1">Quiet Time</h4>
                    <p className="text-coolGray-500 text-sm">
                      Art, journals, or rest
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-20 font-bold text-green-g1">
                    1:30pm
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-g1">Closing Circle</h4>
                    <p className="text-coolGray-500 text-sm">
                      Songs and gratitude
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <ScaleIn delay={0.2} className="w-full lg:w-1/2 px-4">
              <div className="space-y-4">
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <Image
                    src="/real/img15.png"
                    alt="Life at Wild Sprouts"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative aspect-square rounded-xl overflow-hidden">
                    <Image
                      src="/real/eggs.png"
                      alt="Fresh eggs from the girls"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-xl overflow-hidden">
                    <Image
                      src="/real/toy-train.png"
                      alt="Train play time"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 bg-beige-b1">
        <div className="container px-4 mx-auto">
          <FadeIn>
            <h2 className="mb-4 text-4xl md:text-5xl text-gray-g1 font-bold font-serif tracking-tighter text-center">
              Life on the Homestead
            </h2>
            <p className="mb-12 text-lg text-coolGray-500 text-center max-w-2xl mx-auto">
              A glimpse into everyday adventures at Wild Sprouts — from animal
              care to garden harvests, crafts to exploration. Click any photo to
              explore.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {visibleImages.map((image, index) => (
              <ScaleIn
                key={index}
                delay={Math.min(index * 0.03, 0.3)}
                className="aspect-square"
              >
                <button
                  onClick={() => openLightbox(index)}
                  className="relative w-full h-full overflow-hidden rounded-xl group cursor-pointer focus:outline-none focus:ring-4 focus:ring-green-g1/50"
                  aria-label={`View ${image.title}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium text-sm bg-black/50 px-3 py-1 rounded-full">
                      {image.title}
                    </span>
                  </div>
                </button>
              </ScaleIn>
            ))}
          </div>

          {hasMore && (
            <div className="mt-10 text-center">
              <button
                onClick={loadMore}
                className="inline-block py-4 px-8 text-base md:text-lg leading-4 text-green-50 font-medium text-center bg-green-g1 hover:bg-[#5a6b50] focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-green-g1 rounded-md shadow-sm transition-all duration-300"
              >
                Load More Photos ({galleryImages.length - visibleCount}{" "}
                remaining)
              </button>
            </div>
          )}
        </div>
      </section>

      {/* What We Learn Section */}
      <section className="py-20 bg-gray-g1">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="mb-12 text-4xl md:text-5xl text-white font-bold font-serif tracking-tighter text-center">
                What We Learn
              </h2>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-6">
              <FadeIn delay={0.1}>
                <div className="bg-white/10 rounded-lg p-6 h-full">
                  <h3 className="text-2xl font-bold text-orange-o1 mb-3">
                    Nature Studies
                  </h3>
                  <p className="text-white font-medium">
                    Children learn about plants, animals, weather, and
                    ecosystems through direct observation and hands-on
                    exploration. We follow the seasons, tracking changes in our
                    environment.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="bg-white/10 rounded-lg p-6 h-full">
                  <h3 className="text-2xl font-bold text-orange-o1 mb-3">
                    Animal Care
                  </h3>
                  <p className="text-white font-medium">
                    Daily care of Cooper, Marvin & Maynard, Roo and the girls,
                    Leo & Tootsie, Dixie, and Bear teaches responsibility,
                    empathy, and where our food comes from.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-white/10 rounded-lg p-6 h-full">
                  <h3 className="text-2xl font-bold text-orange-o1 mb-3">
                    Gardening
                  </h3>
                  <p className="text-white font-medium">
                    From seed to harvest, children participate in all aspects of
                    growing food. We compost, save seeds, and learn sustainable
                    practices that care for the earth.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.25}>
                <div className="bg-white/10 rounded-lg p-6 h-full">
                  <h3 className="text-2xl font-bold text-orange-o1 mb-3">
                    Creative Arts
                  </h3>
                  <p className="text-white font-medium">
                    Nature-inspired art, music, drama, and storytelling are
                    woven throughout our days. Children work with natural
                    materials and develop their unique creative voices.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="bg-white/10 rounded-lg p-6 h-full">
                  <h3 className="text-2xl font-bold text-orange-o1 mb-3">
                    Early Academics
                  </h3>
                  <p className="text-white font-medium">
                    Academic skills develop naturally through meaningful
                    activities: counting eggs, measuring garden beds, reading
                    stories, and journaling observations.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.35}>
                <div className="bg-white/10 rounded-lg p-6 h-full">
                  <h3 className="text-2xl font-bold text-orange-o1 mb-3">
                    Social Skills
                  </h3>
                  <p className="text-white font-medium">
                    Through mixed-age interactions, collaborative work, and
                    conflict resolution, children develop emotional intelligence
                    and a strong sense of community.
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
            Ready to Visit?
          </h2>
          <p className="mb-8 text-lg md:text-xl text-gray-g1 font-medium max-w-2xl mx-auto">
            We'd love to show you around the homestead and answer your
            questions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact?interest=tour"
              className="inline-block py-5 px-7 text-base md:text-lg leading-4 text-green-50 font-medium text-center bg-green-g1 hover:bg-[#5a6b50] focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-green-g1 rounded-md shadow-sm transition-all duration-500"
            >
              Schedule a Tour
            </a>
            <a
              href="/staff"
              className="inline-block py-5 px-7 text-base md:text-lg leading-4 text-coolGray-800 hover:text-white font-medium text-center bg-white hover:bg-green-g1 focus:ring-2 focus:ring-coolGray-200 focus:ring-opacity-50 border border-coolGray-200 rounded-md shadow-sm transition-all duration-500"
            >
              Meet Your Teacher
            </a>
          </div>
        </FadeIn>
      </section>
    </div>
  )
}
