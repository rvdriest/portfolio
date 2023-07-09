// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  routeRules: {
    "/": { prerender: true },
  },
  // runtimeConfig: {
  //   public: {
  //     formsApiKey: "03972b7b-c2cc-4643-bcb3-bff17160cedd",
  //   },
  // },
});
