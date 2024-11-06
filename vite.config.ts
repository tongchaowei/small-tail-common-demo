import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
// 按需自动加载组件的 Vite 插件
import Components from 'unplugin-vue-components/vite'
// 按需自动加载 st-common-ui-vue3 组件的解析器，用于帮助按需自动加载组件的 Vite 插件自动按需加载 st-common-ui-vue3 组件
import {StCommonUIVue3Resolver} from "st-common-ui-vue3"
// Node.js 内置的 path 模块
import * as path from 'path'

// 项目中 src 目录的绝对路径
// __dirname 表示当前文件所在目录的绝对路径
const srcAbsolutePath: string = path.resolve(__dirname, './src')

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 配置按需自动加载组件的 Vite 插件
    Components({
      // 配置解析器，用于帮助按需自动加载组件的 Vite 插件解析并按需加载组件
      resolvers: [
        StCommonUIVue3Resolver()
      ],
    })
  ],
  // vite 构建工具中的解析器配置
  resolve: {
    // 配置别名解析
    alias: {
      // 将项目文件中使用的 `@` 解析为 `src` 目录的绝对路径
      '@': srcAbsolutePath,
    },
  },
})
