import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 按需自动加载组件的 Vite 插件
import Components from 'unplugin-vue-components/vite'
// 按需自动加载 st-common-ui-vue3 组件的解析器，用于帮助按需自动加载组件的 Vite 插件自动按需加载 st-common-ui-vue3 组件
import {StCommonUIVue3Resolver} from "st-common-ui-vue3"

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
})
