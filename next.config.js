/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: [
        'media.licdn.com',
        'images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com',
        'yt3.googleusercontent.com',
        'pbs.twimg.com'
      ],
    },
  }
  
  module.exports = nextConfig