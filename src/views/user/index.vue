<template>
  <div class="user">
    <Info />
    <Tools />
  </div>
</template>

<script>
import Info from "./Info";
import Tools from "./Tools";

export default {
  name: "User",
  components: {
    Info,
    Tools,
  },
};
</script>
