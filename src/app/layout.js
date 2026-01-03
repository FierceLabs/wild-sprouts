import Header from "../components/Header"
import Footer from "../components/Footer"
import "../../src/styles/global.css"
import "../../src/styles/fonts.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export const metadata = {
  title: "Wild Sprouts Homestead School",
  description: "Nature-based early childhood education in a homestead setting. Where children learn through hands-on experiences with animals, gardens, and the rhythms of farm life.",
  authors: [{ name: "Wild Sprouts Homestead School" }],
  keywords: ["nature school", "homestead education", "early childhood", "farm school", "outdoor learning"],
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

