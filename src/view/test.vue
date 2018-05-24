<template>
  <div class="test">
  	This is id: {{$route.params.testId}}
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: 'hello vue'
    }

  }
}

</script>
<style scoped></style>
