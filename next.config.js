/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/hls/:path*.m3u8',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/vnd.apple.mpegurl',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/hls/:path*.ts',
        headers: [
          {
            key: 'Content-Type',
            value: 'video/mp2t',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig

