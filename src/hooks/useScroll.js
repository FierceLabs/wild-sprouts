import { useEffect, useState } from "react"

const useScroll = (
  initialVariant,
  secondaryVariant,
  scrollDepth = 500,
  reverse = false
) => {
  const [variant, setVariant] = useState(initialVariant)

  useEffect(() => {
    let color
    let direction
    let oldValue = 0
    const handleScroll = () => {
      // Get the new Value
      let newValue = window.pageYOffset

      //Subtract the two and conclude
      if (oldValue - newValue < 0) {
        direction = "down"
      } else if (oldValue - newValue > 0) {
        direction = "up"
      }

      if (reverse) {
        if (window.scrollY > scrollDepth && direction !== "up") {
          color = secondaryVariant
        } else {
          color = initialVariant
        }
      } else {
        if (window.scrollY > scrollDepth) {
          color = secondaryVariant
        } else {
          color = initialVariant
        }
      }
      setVariant(color)

      // Update the old value
      oldValue = newValue
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [initialVariant, secondaryVariant, scrollDepth])
  return variant
}

export default useScroll
