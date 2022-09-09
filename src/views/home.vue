<template>
  <div class="login-container">
    <div class="header">
      <!-- <img class="header__logo" src="@/assets/logo.png" alt="logo" /> -->
      <!-- <p class="header__title">Vue-H5-Template</p> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.login-container {
  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .header__logo {
      display: block;
      width: 150px;
      height: 150px;
      padding-top: 80px;
    }
    .header__title {
      font-size: 36px;
      color: #000;
      font-weight: normal;
      padding-top: 30px;
    }
  }
}
</style>
