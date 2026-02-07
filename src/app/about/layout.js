export const metadata = {
  title: "About Us | Wild Sprouts Homestead School - Meridian, ID",
  description:
    "Learn about Wild Sprouts Homestead School's philosophy, values, and approach to nature-based early childhood education in Meridian, Idaho. Meet Cooper, Marvin, Maynard, and our homestead family.",
  openGraph: {
    title: "About Wild Sprouts Homestead School",
    description:
      "Our philosophy centers on connecting children with nature, animals, and meaningful work. Located in Meridian, Idaho.",
    images: [
      {
        url: "/wild-sprouts-logo.png",
        width: 1200,
        height: 630,
        alt: "Wild Sprouts Homestead School Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Wild Sprouts Homestead School",
    description:
      "Our philosophy centers on connecting children with nature, animals, and meaningful work. Located in Meridian, Idaho.",
    images: ["/wild-sprouts-logo.png"],
  },
}

export default function AboutLayout({ children }) {
  return children
}
