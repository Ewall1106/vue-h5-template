<template>
  <div class="test">
    <button @click="get">click me</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: 'hello vue'
    }
  },
  methods: {
    get() {
      this.$http.get('package.json', {
        params: {
          
        },
        headers: {
          token: '123'
        }
      }).then(res => {
        this.msg = res.data;
      })
    }
  }
}

</script>
<style scoped></style>
