export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'frontend',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "uikit/dist/css/uikit.min.css",
    "uikit/dist/css/uikit.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/uikit.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/apollo',
  ],

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.VUE_APP_GRAPHQL_URL || "http://localhost:1337/graphql"
      }
    }
  },

  env: {
    strapiApiUrl: process.env.VUE_APP_STRAPI_API_URL || 'http://localhost:1337'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // Configuration for a statically generated site
  // https://nuxtjs.org/docs/2.x/deployment/netlify-deployment
  target: 'static'
}
