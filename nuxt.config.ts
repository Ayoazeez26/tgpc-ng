// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  app: {
    head: {
      title: "The Good Practice Company Nigeria",
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/video.js/8.3.0/video-js.min.css",
        },
      ],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Providing you access to a global talent pool and  helping your business offshore with ease. Find  your  perfect staff from our diverse pool of professionals.",
        },
      ],
      script: [
        {
          hid: "tawk.to",
          src: "https://embed.tawk.to/64b6bac7cc26a871b0293389/1h5ksj7mj",
          async: true,
          defer: true,
        },
      ],
    },
  },
  css: ["~/assets/main.scss", "~/assets/fonts/fonts.css"],
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@nuxtjs/google-fonts"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/_colors.scss" as *;',
        },
      },
    },
  },
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
      Sora: [400, 500, 600, 700],
    },
  },
  build: {
    transpile: ["gsap"],
  },
});
