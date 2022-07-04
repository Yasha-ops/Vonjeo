module.exports = {
  content: ['./public/index.html', './src/**/*.svelte'],
  plugins: [require('daisyui')],
  theme: {
    extend: {
      colors: {
        'tab-color':'#007BCA',
        'spotify-font' : '#191414'
      },
      fontFamily: {
        Spotify: ['Source Sans Pro', 'sans-serif'],
        Spotify_win: ['Inter', 'sans-serif']
      }
    },
  }, 
  variants:{
    extend:{
      display: ["group-hover"]
    }
  }
};
