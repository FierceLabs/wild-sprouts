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
  const hlsRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Handle looping manually for HLS (native loop attribute doesn't work reliably)
    const handleEnded = () => {
      if (loop) {
        video.currentTime = 0
        video.play().catch(() => {})
      }
    }

    video.addEventListener("ended", handleEnded)

    // Safari (and some iOS browsers) can play HLS natively.
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src
      return () => {
        video.removeEventListener("ended", handleEnded)
      }
    }

    // Chrome/Firefox/Edge: use hls.js
    if (Hls.isSupported()) {
      const hls = new Hls({
        maxBufferLength: 30,
        backBufferLength: 30,
      })

      hlsRef.current = hls
      hls.loadSource(src)
      hls.attachMedia(video)

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        if (autoPlay) {
          video.play().catch(() => {})
        }
      })

      return () => {
        video.removeEventListener("ended", handleEnded)
        hls.destroy()
        hlsRef.current = null
      }
    }

    // Fallback: no HLS support
    console.warn("HLS not supported in this browser.")
    return () => {
      video.removeEventListener("ended", handleEnded)
    }
  }, [src, loop, autoPlay])

  return (
    <video
      ref={videoRef}
      poster={poster}
      controls={controls}
      muted={muted}
      playsInline={playsInline}
      preload="auto"
      className={className}
    />
  )
}
