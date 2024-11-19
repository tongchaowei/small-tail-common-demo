import stLoginPage1Screenshot from "@/pages/index/demo-page-screenshots/st-login-page-1.ts"
import stDynamicBorder1Screenshot from "@/pages/index/demo-page-screenshots/st-dynamic-border-1.ts"
import stGradientBg1Screenshot from "@/pages/index/demo-page-screenshots/st-gradient-bg-1.ts"

export type DemoPageData = {
  routeName: string;
  title: string;
  desc?: string;
  imgSrc?: string;
  codePath?: string;
  docPath?: string;
}

// GitHub Pages 文档路径的基础路径
export const DOC_BASE_PATH_GHPAGES = 'https://tongchaowei.github.io/small-tail-common-doc'
// Netlify 文档路径的基础路径
export const DOC_BASE_PATH_NETLIFY = 'https://small-tail-common-doc.netlify.app'

// Gitee 源码路径的基础路径
export const CODE_BASE_PATH_GITEE = 'https://gitee.com/tongchaowei/small-tail-admin/tree/dev/front-end/monorepo-vite-vue3-ts/small-tail-common/ui-vue3/src/components'
// GitHub 源码路径的基础路径
export const CODE_BASE_PATH_GH = 'https://github.com/tongchaowei/small-tail-common-doc/tree/main/front-end/monorepo-vite-vue3-ts/small-tail-common/ui-vue3/src/components'

export const demoPageDataList: DemoPageData[] = [
  {
    routeName: 'st-login-page-1',
    title: '登录页面组件 1',
    imgSrc: stLoginPage1Screenshot,
    codePath: '/StLoginPage1',
    docPath: '/ui-vue3/login-page-1/',
  },
  {
    routeName: 'st-dynamic-border-1',
    title: '动态边框组件 1',
    imgSrc: stDynamicBorder1Screenshot,
    codePath: '/StDynamicBorder1',
    docPath: '/ui-vue3/dynamic-border-1/',
  },
  {
    routeName: 'st-gradient-bg-1',
    title: '过渡动画背景组件 1',
    imgSrc: stGradientBg1Screenshot,
    codePath: '/StGradientBg1',
    docPath: '/ui-vue3/gradient-bg-1/',
  },
  {
    routeName: 'st-gradient-bg-2',
    title: '过渡动画背景组件 2',
    imgSrc: stGradientBg1Screenshot,
    codePath: '/StGradientBg2',
    docPath: '/ui-vue3/gradient-bg-2/',
  },
]
