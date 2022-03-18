module.exports = {
   mode: "jit",
   content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         screens: {
            "3xl": "2000px", //ova sami go izmislub=vame posto css nema 3xl 
         },
      },
   },
   plugins: [
      require('tailwind-scrollbar-hide')
   ],
}
