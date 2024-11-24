<script setup lang="ts">
import {ref, onMounted} from 'vue'

const content = ref('St Ghost Text Demo')
const isHover = ref(false)

onMounted(() => {
  let time = content.value.length * 100 + 1000
  setTimeout(() => {
    isHover.value = true
  }, time)
})
</script>

<template>
  <div class="st-ghost-text-demo-page w-full h-screen">
    <StGradientBg2>
      <div class="st-ghost-text-demo-page__content-box w-full h-full flex justify-center items-center text-6xl font-bold text-white">
        <StGhostText v-if="!isHover" :content="content" :horizontalAlign="'center'"/>
        <StGhostTextHover v-else :content="content" :horizontalAlign="'center'"/>
      </div>
    </StGradientBg2>
  </div>
</template>

<style scoped>

</style>
