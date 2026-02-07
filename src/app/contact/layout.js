export const metadata = {
  title: "Contact Us | Wild Sprouts Homestead School - Meridian, ID",
  description:
    "Contact Wild Sprouts Homestead School at 2125 E. Star Ln, Meridian, ID 83646. Schedule a tour and meet our animals. Classes Monday-Thursday 9:30am-1:30pm, September through May.",
  openGraph: {
    title: "Contact Wild Sprouts Homestead School",
    description:
      "Schedule a tour of our homestead in Meridian, Idaho. Meet Cooper, Marvin, Maynard, and all our animal friends!",
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
    title: "Contact Wild Sprouts Homestead School",
    description:
      "Schedule a tour of our homestead in Meridian, Idaho. Meet Cooper, Marvin, Maynard, and all our animal friends!",
    images: ["/wild-sprouts-logo.png"],
  },
}

export default function ContactLayout({ children }) {
  return children
}
