module.exports = {
  content: ['./public/index.html', './src/**/*.svelte'],
  plugins: [require('daisyui')],
  theme: {
    extend: {
      colors: {
        'tab-color':'#007BCA',
      }
    },
  }, 
  variants:{
    extend:{
      display: ["group-hover"]
    }
  }
};
