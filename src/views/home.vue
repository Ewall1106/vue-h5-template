<template>
  <div class="home">
    <Info :name="userInfo.name" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Info from "@/components/Info.vue";

export default {
  name: "Home",
  components: { Info },
  computed: {
    ...mapGetters(["userInfo"]),
  },
  mounted() {
    this.$store.dispatch("user/getUserInfo");
  },
};
</script>
