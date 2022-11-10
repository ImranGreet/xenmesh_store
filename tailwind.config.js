/** @type {import('tailwindcss').Config} */
module.exports = {
     content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
     theme: {
          extend: {
               fontFamily: {
                    'work-sans': '"Work Sans"',
               },
          },
     },
     plugins: [require('@tailwindcss/forms')],
     presets: [require('./tailwindPreset/animation')],
};
