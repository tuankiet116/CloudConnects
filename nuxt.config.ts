// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    layoutTransition: {

    },
    head: {
      title: "Cloud Linker",
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1"
        },
        {
          "charset": "utf-8"
        }
      ],
    }
  },
  css: [
    "@fortawesome/fontawesome-svg-core/styles.css",
    '~/assets/scss/bootstrap.scss'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  runtimeConfig: {
    public: {
      appName: "Cloud Linker"
    }
  }
})
