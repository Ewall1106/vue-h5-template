<template>
  <div class="test">
    this is id : {{$route.params.testId}}
    <br/> this is name : {{$route.params.testName}}

    <router-link to="/test/title1">标题1</router-link>
    <router-link to="/test/title2">内容2</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {

}

</script>
<style scoped></style>
