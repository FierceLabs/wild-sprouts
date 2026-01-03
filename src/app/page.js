import ImageSection from "../components/ImageSection1"
import ImageSection2 from "../components/ImageSection2"
import AffiliateSites from "../components/AffiliateSites"
import HowItWorks from "../components/HowItWorks"
import SwirlSection from "../components/SwirlSection"
import WhiteSection from "../components/WhiteSection"
import BlueMountainSection from "../components/BlueMountainSection"
import FAQ from "../components/FAQ"

export default function Home() {
  return (
    <div className="bg-beige-b1">
      <ImageSection />
      <AffiliateSites />
      <ImageSection2 />
      <HowItWorks />
      <SwirlSection />
      <WhiteSection />
      <BlueMountainSection />
      <FAQ />
    </div>
  )
}

