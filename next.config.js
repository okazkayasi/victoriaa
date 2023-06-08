const { i18n } = require("./next-i18next.config.js")

module.exports = {
  i18n,
  reactStrictMode: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "encrypted-tbn0.gstatic.com",
      "placehold.co",
      "cdn.shopify.com",
    ],
  },
}
