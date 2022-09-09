<template>
  <div class="home">
    <Info :name="name" />
  </div>
</template>

<script>
import { getUserInfo } from "@/api/user";
import Info from "@/components/Info.vue";

export default {
  name: "Home",
  components: { Info },
  data() {
    return {
      name: "loading...",
    };
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      getUserInfo().then((res) => {
        this.name = res.data.name;
      });
    },
  },
};
</script>
