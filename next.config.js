/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['127.0.0.1', 'api.multiavatar.com'
    ],
  },

  env: {
    AVATAR_API: process.env.AVATAR_API,
  }
}

module.exports = nextConfig
