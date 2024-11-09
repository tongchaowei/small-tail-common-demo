<script setup lang="ts">

</script>

<template>
  <div class="st-dynamic-border-1-demo-page w-full h-screen bg-[#333] flex justify-center items-center gap-4 flex-wrap">
    <st-dynamic-border1 width="200px" height="200px"></st-dynamic-border1>
    <st-dynamic-border1
      width="200px"
      height="200px"
      hoverPause
      :borderColorList="[
        'transparent', 'red 12.5%',
        'transparent 12.5%', 'transparent 25%',
        'transparent 25%', 'yellow 37.5%',
        'transparent 37.5%', 'transparent 50%',
        'transparent 50%', 'green 62.5%',
        'transparent 62.5%', 'transparent 75%',
        'transparent 75%', 'blue 87.5%',
        'transparent 87.5%', 'transparent 100%'
      ]"
    ></st-dynamic-border1>
    <st-dynamic-border1
      width="200px"
      height="200px"
      :backgroundColor="'#ffffff00'"
      customBorderColor
      borderColor="linear-gradient(45deg, red, orange)"
      shine
      shineRange="50px"
    >
      <div class="w-full h-full bg-[#33333399]"></div>
    </st-dynamic-border1>
    <st-dynamic-border1
      width="200px"
      height="200px"
      customBorderColor
      borderColor="linear-gradient(45deg, skyblue, transparent, green)"
      shine
      shineRange="50px"
    ></st-dynamic-border1>
    <st-dynamic-border1
      width="200px"
      height="200px"
      :rotate="false"
      hover
      :borderColorList="[
        'transparent 0%', 'transparent 10%',
        'red 10%', 'red 15%',
        'transparent 15%', 'transparent 35%',
        'red 35%', 'red 40%',
        'transparent 40%', 'transparent 60%',
        'red 60%', 'red 65%',
        'transparent 65%', 'transparent 85%',
        'red 85%', 'red 90%',
        'transparent 90%', 'transparent 100%',
      ]"
    ></st-dynamic-border1>
  </div>
</template>
