/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: {
         spacing: {
            'fatTopAppBar': 'var(--topAppBar-height)',
            'slimTopAppBar': 'calc(var(--topAppBar-height) - 2rem)',
         },
         colors: {
            bronze: '#88715B',
            bronze_1: '#776452',
            bronze_2: '#89715b',
            black_1: '#090909',
            black_2: '#111111',
            black_3: '#141414',
         },
         backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            'gradient-conic':
               'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
         },
         height: {
            //   fatTopAppBar: 'var(--topAppBar-height)',
            // slimTopAppBar: 'calc(var(--topAppBar-height) - 2rem)',
            fatBarScreen: 'calc(100vh - var(--topAppBar-height))',
            slimBarScreen: 'calc(100vh - calc(var(--topAppBar-height) - 2rem))',
         },
         padding: {
            fatTopAppBar: 'var(--topAppBar-height)',
            slimTopAppBar: 'calc(var(--topAppBar-height) - 2rem)',
         },
         margin: {
            fatTopAppBar: 'var(--topAppBar-height)',
            slimTopAppBar: 'calc(var(--topAppBar-height) - 2rem)',
         },
      },
   },
   plugins: [],
}
