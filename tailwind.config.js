module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Open Sans Condensed", "ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      abcdheading: ["Syne Mono", "Georgia"],
    },
    extend: {
      backgroundImage: (theme) => ({
        "about-smile": "url('/female2.jpg')",
        "free": "url('/free.jpeg')",
        "black": "url('/black.jpg')",
        "beauty": "url('/beauty.jpg')",
        "stars": "url('/stars.jpg')",
        "green": "url('/green.jpg')",
        "nasa": "url('/nasa.jpg')",
      }),
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
