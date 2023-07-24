// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    baseURL: "/",
    head: {
      charset: "utf-8",
      title: "Website Title",
      meta: [
        {
          name: "description",
          content: "Website description"
        }
      ],
    }
  },
  // nitro: {
  //   devProxy: {
  //     "/priceSuggestion/start-steps": {
  //       target: "https://jsonplaceholder.typicode.com/posts",
  //       changeOrigin: true,
  //       prependPath: true
  //     },
  //   }
  // },
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_BASE_URL,
    }
  },
  modules: [
    "@pinia/nuxt"
  ]
});
