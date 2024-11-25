<script setup lang="ts">

</script>

<template>
  <div class="st-3d-text-demo-page w-full h-screen">
    <StGradientBg1>
      <div class="st-3d-tilt-container-box max-w-[550px] p-8">
        <St3DTiltContainer
          :start-x="10"
          :start-y="20"
          full-page-listening
        >
          <St3DText
            content="St 3D Text Demo Page"
            font-size="5rem"
            color="#fefefe"
            base-color="#59B6EB"
          />
        </St3DTiltContainer>
      </div>
    </StGradientBg1>
  </div>
</template>

<style scoped>

</style>
