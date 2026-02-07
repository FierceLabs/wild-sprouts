import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import "../../src/styles/fonts.css"
import "../../src/styles/global.css"
import Footer from "../components/Footer"
import Header from "../components/Header"

export const metadata = {
  title:
    "Wild Sprouts Homestead School | Nature-Based Preschool in Meridian, ID",
  description:
    "Nature-based early childhood education in Meridian, Idaho. Classes Monday-Thursday 9:30am-1:30pm, September through May. Children learn through hands-on experiences with our animals Cooper the horse, sheep Marvin & Maynard, chickens, bunnies, and more.",
  authors: [{ name: "Wild Sprouts Homestead School" }],
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  keywords: [
    "nature school",
    "homestead education",
    "early childhood",
    "farm school",
    "outdoor learning",
    "Meridian Idaho preschool",
    "nature-based preschool",
    "farm preschool Idaho",
  ],
  openGraph: {
    title:
      "Wild Sprouts Homestead School | Nature-Based Preschool in Meridian, ID",
    description:
      "Nature-based early childhood education where children connect with animals, gardens, and the rhythms of homestead life. Located in Meridian, Idaho.",
    type: "website",
    locale: "en_US",
    siteName: "Wild Sprouts Homestead School",
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
    title: "Wild Sprouts Homestead School",
    description:
      "Nature-based early childhood education in Meridian, Idaho. Classes Monday-Thursday 9:30am-1:30pm.",
    images: ["/wild-sprouts-logo.png"],
  },
  other: {
    "geo.region": "US-ID",
    "geo.placename": "Meridian",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header siteTitle="Wild Sprouts Homestead School" />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
