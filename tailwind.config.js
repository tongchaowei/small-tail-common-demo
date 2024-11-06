/** @type {import('tailwindcss').Config} */
export default {
  // content:[], 默认为空
  // Tailwind CSS 在如下配置的路径中的文件中生效
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  // 配置 Tailwind CSS 主题
  theme: {
    extend: {},
  },
  // 配置 Tailwind CSS 插件
  plugins: [],
}
