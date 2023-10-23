import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'pc-login-backgound': "url('https://res.cloudinary.com/endurance-zone/image/fetch/r_00,f_auto/https://rewards.endurancezone.com/AwareIM/EzRewards_images/login/splash.jpg')",
        'mobile-login-backgound': "url('https://res.cloudinary.com/endurance-zone/image/fetch/r_00,f_auto/https://rewards.endurancezone.com/AwareIM/EzRewards_images/login/Splash_Default_1125_x_2464.jpg')"
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
export default config
