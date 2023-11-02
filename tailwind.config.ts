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
      fontFamily: {
        'login-title': ['Renogare', 'sans-serif'],
      },
      boxShadow: {
        middle: "var(--tw-ring-offset-shadow,0 0 #000000)"
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
  darkMode: "class",
  corePlugins: { 
    preflight: true,
  }
}
// preflight: false 访问EZ-home 这个h1的样式就是原生浏览器定义的样式了 Taildwind的预设样式并不会生效，当然tialwind是把他们的预设样式都除掉的，所有的配置都由你自己来配置原子类
export default config