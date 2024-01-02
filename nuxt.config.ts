// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [],
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
      script: [
        'https://apis.google.com/js/platform.js'
      ]
    }
  },
  css: [
    "@fortawesome/fontawesome-svg-core/styles.css",
    '~/assets/scss/bootstrap.scss',
  ],
  postcss: {
    plugins: {
      autoprefixer: {}
    }
  },
  runtimeConfig: {
    public: {
      appName: "Cloud Linker",
      backendHost: "http://127.0.0.1:8000"
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_colors.scss" as *;'
        }
      }
    }
  }
})
