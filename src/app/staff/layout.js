export const metadata = {
  title: "Meet Your Teacher | Wild Sprouts Homestead School - Meridian, ID",
  description:
    "Meet Torie Nagle, lead teacher at Wild Sprouts Homestead School in Meridian, Idaho. Passionate about nature-based learning and creating meaningful experiences for children.",
  openGraph: {
    title: "Meet Your Teacher - Wild Sprouts Homestead School",
    description:
      "Meet Torie Nagle, lead teacher at Wild Sprouts. Passionate about nature-based learning and nurturing children at our Meridian, Idaho homestead.",
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
    title: "Meet Your Teacher - Wild Sprouts Homestead School",
    description:
      "Meet Torie Nagle, lead teacher at Wild Sprouts. Passionate about nature-based learning and nurturing children at our Meridian, Idaho homestead.",
    images: ["/wild-sprouts-logo.png"],
  },
}

export default function StaffLayout({ children }) {
  return children
}
