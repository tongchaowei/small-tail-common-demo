<script setup lang="ts">
import {
  demoPageDataList,
  DOC_BASE_PATH_GHPAGES,
  DOC_BASE_PATH_NETLIFY,
  CODE_BASE_PATH_GITEE,
  CODE_BASE_PATH_GH
} from "@/pages/index/demo-page-data.ts"
import {useRouter} from "vue-router"
import {onMounted, ref} from "vue"

// 路由对象
const router = useRouter()
// 环境变量对象
const env = import.meta.env

// 是否显示过渡动画的标题文本
const showTitleTransition = ref(false)
/**
 * 页面挂载后开启定时器隐藏出现动画的标题文本，显示过渡动画的标题文本
 */
onMounted(() => {
  // 隐藏出现动画标题文本的时间
  const hideTitleAnimationTime = env.VITE_SITE_TITLE.length * 100 + 1000
  setTimeout(() => {
    showTitleTransition.value = true
  }, hideTitleAnimationTime)
})
</script>

<template>
  <div class="index-page w-full h-screen">
    <st-gradient-bg2>
      <div class="index-page__content w-full h-full pb-6 overflow-auto">
        <div class="index-page__content_title relative px-4 py-24 text-7xl font-bold text-white">
          <st-ghost-text
            v-show="!showTitleTransition"
            :content="env.VITE_SITE_TITLE"
            horizontal-align="center"
          ></st-ghost-text>
          <st-ghost-text-hover
            v-show="showTitleTransition"
            :content="env.VITE_SITE_TITLE"
            horizontal-align="center"
          ></st-ghost-text-hover>
        </div>
        <div class="index-page__content__demo-list flex-1 flex justify-center items-start flex-wrap gap-6">
          <st-info-card-2
            v-for="demoPageData in demoPageDataList"
            :key="demoPageData.routeName"
            class="bg-white cursor-pointer"
            width="275px"
            height="auto"
            :title="demoPageData.title"
            :img-src="demoPageData.imgSrc"
            :img-height="300"
          >
            <template #title>
              <div class="pt-8 text-2xl font-bold text-center">{{ demoPageData.title }}</div>
            </template>
            <template #content>
              <div class="mt-4 flex flex-col gap-4">
                <div class="flex flex-wrap justify-center items-center gap-4 text-sky-500">
                  <a :href="DOC_BASE_PATH_GHPAGES + demoPageData.docPath" target="_blank">组件文档（GitHub Pages）</a>
                  <a :href="DOC_BASE_PATH_NETLIFY + demoPageData.docPath" target="_blank">组件文档（Netlify）</a>
                </div>
                <div class="flex flex-wrap justify-center items-center gap-4 text-sky-500">
                  <a :href="CODE_BASE_PATH_GITEE + demoPageData.codePath" target="_blank">组件源码（Gitee）</a>
                  <a :href="CODE_BASE_PATH_GH + demoPageData.codePath" target="_blank">组件源码（GitHub）</a>
                </div>
                <div>
                </div>
                <n-button
                  type="primary"
                  block
                  ghost
                  dashed
                  size="small"
                  round
                  @click="() => router.push({name: demoPageData.routeName})"
                >查看示例效果
                </n-button>
              </div>
            </template>
          </st-info-card-2>
        </div>
      </div>
    </st-gradient-bg2>
  </div>
</template>

<style scoped lang="scss">

</style>
