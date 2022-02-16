<template>
  <img :src="imgSrc" />
</template>

<script>
export default {
  name: 'CustomImg',
  props: ['imgSrc']
}
</script>
