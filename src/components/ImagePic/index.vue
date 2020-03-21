<template>
  <div>
    <!-- https://youzan.github.io/vant/#/zh-CN/image#api -->
    <van-image v-bind="$attrs" lazy-load>
      <template v-slot:error>加载失败</template>
    </van-image>
  </div>
</template>
