#!/usr/bin/env node

/**
 * Image Optimization Script for Wild Sprouts Homestead School
 *
 * This script optimizes images in the public/real folder by:
 * 1. Resizing large images to reasonable web dimensions (max 1920px)
 * 2. Compressing PNG images
 * 3. Replacing originals with optimized versions
 *
 * Usage: node scripts/optimize-images.js
 *
 * Prerequisites: npm install sharp
 */

const sharp = require("sharp")
const fs = require("fs")
const path = require("path")

const INPUT_DIR = path.join(__dirname, "../public/real")

// Max dimension for images
const MAX_DIMENSION = 1920
const PNG_QUALITY = 80

async function optimizeImage(inputPath, filename) {
  const tempPath = inputPath + ".tmp"

  try {
    const image = sharp(inputPath)
    const metadata = await image.metadata()

    const originalSize = fs.statSync(inputPath).size
    const originalSizeKB = (originalSize / 1024).toFixed(0)

    console.log(
      `Processing: ${filename} (${metadata.width}x${metadata.height}, ${originalSizeKB}KB)`
    )

    // Determine if resizing is needed
    const needsResize =
      metadata.width > MAX_DIMENSION || metadata.height > MAX_DIMENSION

    // Process the image
    let processedImage = sharp(inputPath)

    if (needsResize) {
      processedImage = processedImage.resize(MAX_DIMENSION, MAX_DIMENSION, {
        fit: "inside",
        withoutEnlargement: true,
      })
    }

    // Save as optimized PNG
    await processedImage
      .png({
        quality: PNG_QUALITY,
        compressionLevel: 9,
        palette: true,
      })
      .toFile(tempPath)

    // Check new file size
    const newSize = fs.statSync(tempPath).size
    const newSizeKB = (newSize / 1024).toFixed(0)
    const savings = (((originalSize - newSize) / originalSize) * 100).toFixed(1)

    // Only replace if we actually saved space
    if (newSize < originalSize) {
      fs.unlinkSync(inputPath)
      fs.renameSync(tempPath, inputPath)
      console.log(
        `  ✓ Optimized: ${originalSizeKB}KB → ${newSizeKB}KB (saved ${savings}%)`
      )
    } else {
      fs.unlinkSync(tempPath)
      console.log(`  → Skipped: already optimized`)
    }
  } catch (error) {
    // Clean up temp file if it exists
    if (fs.existsSync(tempPath)) {
      fs.unlinkSync(tempPath)
    }
    console.error(`  ✗ Error processing ${filename}:`, error.message)
  }
}

async function main() {
  console.log("Wild Sprouts Image Optimizer")
  console.log("============================\n")

  // Get all image files
  const files = fs.readdirSync(INPUT_DIR).filter(file => {
    const ext = path.extname(file).toLowerCase()
    return [".png", ".jpg", ".jpeg"].includes(ext)
  })

  console.log(`Found ${files.length} images to optimize\n`)

  let totalOriginal = 0
  let totalNew = 0

  // Process each image
  for (const file of files) {
    const inputPath = path.join(INPUT_DIR, file)

    // Skip if it's a directory
    if (fs.statSync(inputPath).isDirectory()) continue

    const originalSize = fs.statSync(inputPath).size
    totalOriginal += originalSize

    await optimizeImage(inputPath, file)

    const newSize = fs.statSync(inputPath).size
    totalNew += newSize
  }

  const totalSavingsMB = ((totalOriginal - totalNew) / (1024 * 1024)).toFixed(1)
  const totalSavingsPercent = (
    ((totalOriginal - totalNew) / totalOriginal) *
    100
  ).toFixed(1)

  console.log("\n============================")
  console.log("✓ Image optimization complete!")
  console.log(
    `  Total savings: ${totalSavingsMB}MB (${totalSavingsPercent}% reduction)`
  )
}

main().catch(console.error)
