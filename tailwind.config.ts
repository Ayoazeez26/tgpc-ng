import type { Config } from 'tailwindcss'

// Default are on https://tailwindcss.nuxtjs.org/tailwind/config#default-configuration
export default <Partial<Config>>{
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        black: "#0A0A0A",
        primary: "#525252",
        "black-2": "#161616",
        // white: '#FFF',
        // whiter: '#FFFFFF',
        // 'light-green': '#CDEAEC',
        grey: "#ECECEC",
        "grey-2": "#EBEBEB",
        "grey-3": "#D7D7D7",
        green: "#003E29",
        "grey-4": "#E5E5E5",
        // 'grey-5': '#808484',
        // 'grey-6': '#333B3B',
        // 'grey-7': '#E5E7E7'
      },
      backgroundImage: {
        "join-bg": "url('/img/join-bg.png')",
        "join-bg-mob": "url('/img/join-bg-mob.png')",
        "service-bg": "url('/img/service-bg.png')",
        "service-bg-mob": "url('/img/service-bg-mob.png')",
      },
    },
  },
  plugins: [],
  content: [],
};
