<!-- 
  1. Please ensure already install these component devDependencies:

  xxx@1.0.0

  2. How Father use it:

  <CustomText content="123123">
-->
<template>
  <div class="custom-text">{{ content }}</div>
</template>

<script>
export default {
  name: 'CustomText',
  props: ['content']
}
</script>
