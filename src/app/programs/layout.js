export const metadata = {
  title: "Our Day | Wild Sprouts Homestead School - Meridian, ID",
  description:
    "See what a day looks like at Wild Sprouts in Meridian, Idaho. Photo gallery, daily schedule, and learning activities. Classes Monday-Thursday 9:30am-1:30pm, September through May.",
  openGraph: {
    title: "Our Day | Wild Sprouts Homestead School",
    description:
      "Explore life at Wild Sprouts through our photo gallery. See what children learn and experience on a typical day at the homestead.",
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
    title: "Our Day | Wild Sprouts Homestead School",
    description:
      "Explore life at Wild Sprouts through our photo gallery. See what children learn and experience on a typical day at the homestead.",
    images: ["/wild-sprouts-logo.png"],
  },
}

export default function ProgramsLayout({ children }) {
  return children
}
