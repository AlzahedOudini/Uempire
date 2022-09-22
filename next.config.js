/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    domains: ['images.unsplash.com', 'i.ibb.co']
  },
  // i18n: {
  //   locales: ['en-US','fr'],
  //   defaultLocale: 'fr',
  // },
}
