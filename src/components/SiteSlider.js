"use client"

import Image from "next/image"
import { default as Slider } from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"

const animals = [
  {
    title: "Cooper the Horse",
    description:
      "Our gentle horse Cooper watches over the homestead and loves visits from the children.",
    imageAlt: "Cooper the horse with sheep at Wild Sprouts",
    image: "/real/cooper.png",
  },
  {
    title: "Marvin & Maynard",
    description:
      "Our adorable Valais Blacknose sheep brothers are the fluffiest members of our homestead family.",
    imageAlt: "Marvin and Maynard the sheep",
    image: "/real/marvin-maynard.png",
  },
  {
    title: "Roo & The Girls",
    description:
      "Our silkie rooster Roo leads the flock while the girls provide fresh eggs for learning and cooking.",
    imageAlt: "Roo the rooster at Wild Sprouts",
    image: "/real/roo.png",
  },
  {
    title: "Leo & Tootsie",
    description:
      "Our sweet lop-eared bunnies teach children about gentle care and animal responsibility.",
    imageAlt: "Leo the bunny",
    image: "/real/leo.png",
  },
  {
    title: "Dixie the Cat",
    description:
      "Our cozy tabby cat Dixie loves snuggling up during story time and craft activities.",
    imageAlt: "Dixie the cat",
    image: "/real/dixie.png",
  },
  {
    title: "Bear the Dog",
    description:
      "Our friendly dog Bear greets every child with a wagging tail and endless love.",
    imageAlt: "Bear the dog with children",
    image: "/real/bear-1.png",
  },
]

function AnimalSliderItem({ title, description, alt, index, image }) {
  const isEven = index => index % 2 === 0

  return (
    <div className="flex w-[100%] flex-col items-center justify-center pb-10 md:pb-20">
      <div className="font-serif font-bold text-center mb-5 text-3xl text-orange-o1">
        {title}
      </div>
      <div className="w-full block relative border-t-2 border-0 border-black-b1 mb-1 z-10">
        <div className="absolute top-[-16px] left-[50%]">
          <svg
            width="20pt"
            height="20pt"
            version="1.1"
            viewBox="0 0 1200 1200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m1068.8 506.25h-349.31l-20.625-106.69c-2.5586-13.613-0.023438-27.695 7.125-39.562l82.5-137.62c8.5586-13.934 13.246-29.898 13.578-46.246 0.32812-16.348-3.7109-32.488-11.703-46.754-31.875-55.688-106.5-91.875-190.31-91.875s-158.44 36.188-190.12 91.875c-8.0703 14.234-12.172 30.371-11.875 46.73s4.9805 32.34 13.562 46.27l82.688 137.81c7.0156 11.848 9.4844 25.844 6.9375 39.375l-20.625 106.69h-349.31c-24.863 0-48.711 9.8789-66.293 27.457-17.578 17.582-27.457 41.43-27.457 66.293v468.75c0 24.863 9.8789 48.711 27.457 66.293 17.582 17.578 41.43 27.457 66.293 27.457h204.56c5.0195 0.019531 9.8281-2.0156 13.312-5.625 1.125-1.3125 29.812-30 30.562-31.5l-0.22656-0.375h0.48828c-0.082031 0.12891-0.16797 0.25391-0.26172 0.375l5.8125 9.75c10.199 16.895 28.453 27.266 48.188 27.375h332.62c19.684-0.11719 37.906-10.402 48.188-27.188l5.8125-9.9375c-0.09375-0.12109-0.17969-0.24609-0.26172-0.375h0.48828l-0.22656 0.375c0.75 1.5 29.438 30.188 30.562 31.5 3.4844 3.6094 8.293 5.6445 13.312 5.625h204.56c24.863 0 48.711-9.8789 66.293-27.457 17.578-17.582 27.457-41.43 27.457-66.293v-468.75c0-24.863-9.8789-48.711-27.457-66.293-17.582-17.578-41.43-27.457-66.293-27.457zm-18.75 93.75c0-6.6992 3.5742-12.887 9.375-16.238 5.8008-3.3477 12.949-3.3477 18.75 0 5.8008 3.3516 9.375 9.5391 9.375 16.238v93.75c0 6.6992-3.5742 12.887-9.375 16.238-5.8008 3.3477-12.949 3.3477-18.75 0-5.8008-3.3516-9.375-9.5391-9.375-16.238zm18.75 150c4.9727 0 9.7422 1.9766 13.258 5.4922 3.5156 3.5156 5.4922 8.2852 5.4922 13.258s-1.9766 9.7422-5.4922 13.258c-3.5156 3.5156-8.2852 5.4922-13.258 5.4922s-9.7422-1.9766-13.258-5.4922c-3.5156-3.5156-5.4922-8.2852-5.4922-13.258s1.9766-9.7422 5.4922-13.258c3.5156-3.5156 8.2852-5.4922 13.258-5.4922zm-624.94-546.75c-5.1406-8.2188-7.9922-17.664-8.2578-27.359-0.26172-9.6914 2.0703-19.277 6.7578-27.766 24.938-43.688 88.312-73.125 157.69-73.125s132.75 29.438 157.88 73.125c4.6133 8.5195 6.8906 18.105 6.5938 27.789-0.29688 9.6836-3.1562 19.117-8.2812 27.336l-82.312 137.44c-12.125 19.723-16.344 43.297-11.812 66l19.125 99.562h-162.38l19.125-99.562c4.5234-22.617 0.375-46.113-11.625-65.812zm-20.25 797.06c-4.9023 25.621-15.828 49.707-31.875 70.273 1.8047 5.4414 2.6875 11.145 2.6055 16.875h-37.5c0.070312-4.8984-1.8203-9.625-5.25-13.125l-23.605-24.336h-252.94v-37.5h260.81c5.0195-0.019531 9.8281 2.0156 13.312 5.625l19.688 20.195c8.7617-13.793 14.867-29.098 18-45.133l86.625-449.44h38.062zm245.06 124.69c-6.2656-7.4844-11.324-15.895-15-24.938l-6.75-17.438c-2-4.2852-5.2188-7.8867-9.2539-10.355-4.0352-2.4648-8.707-3.6914-13.434-3.5195h-48.375c-4.7266-0.17188-9.3984 1.0547-13.434 3.5195-4.0352 2.4688-7.2539 6.0703-9.2539 10.355l-6.75 17.438c-3.6758 9.043-8.7344 17.453-15 24.938h-81.375c12.926 0.38281 25.668-3.1094 36.594-10.027 10.926-6.9141 19.535-16.938 24.719-28.785l6.9375-17.25c4.7617-11.293 12.781-20.906 23.035-27.621 10.254-6.7109 22.273-10.219 34.527-10.066h48.375c12.254-0.15234 24.273 3.3555 34.527 10.066 10.254 6.7148 18.273 16.328 23.035 27.621l6.9375 17.25c5.1836 11.848 13.793 21.871 24.719 28.785 10.926 6.918 23.668 10.41 36.594 10.027zm456.38-75h-252.94l-23.625 24.375c-3.4297 3.5-5.3203 8.2266-5.25 13.125h-37.5c-0.078125-5.7305 0.80078-11.434 2.6055-16.875-16.047-20.566-26.973-44.652-31.875-70.273l-87.918-456.6h38.062l86.625 449.44c3.1328 16.035 9.2383 31.34 18 45.133l19.688-20.195c3.4844-3.6094 8.293-5.6445 13.312-5.625h260.81z"
              fill="#F0AB6F"
            />
          </svg>
        </div>
      </div>
      <section
        className={`flex flex-col justify-center w-[200px] md:w-[300px] ${
          isEven(index) ? "rotate-3" : "-rotate-2"
        }`}
      >
        <div className="flex justify-center w-[100%] relative">
          <Image
            width={300}
            height={300}
            className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-xl shadow-md object-cover"
            src={image}
            alt={alt}
          />
        </div>
        <div className="mt-4 px-2">
          <p className="text-center text-sm font-bold text-white leading-snug">
            {description}
          </p>
        </div>
      </section>
    </div>
  )
}

const animalSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
}

export default function SiteSlider() {
  return (
    <div className="">
      <Slider className="project-slider" {...animalSettings}>
        {animals.map((item, index) => (
          <AnimalSliderItem
            key={item.title}
            index={index}
            title={item.title}
            description={item.description}
            alt={item.imageAlt}
            image={item.image}
          />
        ))}
      </Slider>
    </div>
  )
}
