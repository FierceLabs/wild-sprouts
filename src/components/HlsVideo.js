"use client"

import Hls from "hls.js"
import { useEffect, useRef } from "react"

export default function HlsVideo({
  src,
  poster,
  controls = false,
  autoPlay = true,
  muted = true,
  loop = true,
  playsInline = true,
  className = "",
}) {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Safari (and some iOS browsers) can play HLS natively.
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src
      return
    }

    // Chrome/Firefox/Edge: use hls.js
    if (Hls.isSupported()) {
      const hls = new Hls({
        // Helps with quicker start / fewer stalls on typical websites
        maxBufferLength: 30,
        backBufferLength: 30,
      })

      hls.loadSource(src)
      hls.attachMedia(video)

      return () => {
        hls.destroy()
      }
    }

    // Fallback: no HLS support
    console.warn("HLS not supported in this browser.")
  }, [src])

  return (
    <video
      ref={videoRef}
      poster={poster}
      controls={controls}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      preload="metadata"
      className={className}
    />
  )
}
