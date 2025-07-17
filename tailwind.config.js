module.exports = {
    content: ["./src/**/*.{html,js}"],
  theme: {
      
    extend: {
        colors: {
          'primary-orange': '#FF9F43',
        },
        maxWidth: {
        'custom': '1440px',
        },
        screens: {
          'xs': '320px', // Custom breakpoint for 320px and above
        },
      },
    },
    plugins: [],
  };
