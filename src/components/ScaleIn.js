"use client"

import { motion } from "framer-motion"

/**
 * ScaleIn - Subtle scale animation for images and cards
 * @param {number} delay - Delay in seconds
 */
export default function ScaleIn({ 
  children, 
  delay = 0, 
  duration = 0.6,
  className = "",
  ...props 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
