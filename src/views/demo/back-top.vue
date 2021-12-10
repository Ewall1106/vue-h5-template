<template>
  <div>
    <van-cell v-for="item in 100" :key="item" :title="item" />
    <back-top />
  </div>
</template>

<script>
import BackTop from "@/components/BackTop";

export default {
  name: "User",
  components: {
    BackTop,
  },
};
</script>
