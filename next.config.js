/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['127.0.0.1', 'api.multiavatar.com'
    ],
  },

  env: {
    AVATAR_URL: process.env.AVATAR_URL,
  }
}

module.exports = nextConfig
