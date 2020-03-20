<template>
  <div class="icon-font">
    <van-nav-bar title="svg图标" left-text="返回" left-arrow  @click-left="onClickLeft"/>

    <svg-icon icon-class="backtop" :width="30" :height="30" />
    <svg-icon icon-class="wechat" :width="30" :height="30" />
    <span style="color:red">
      <svg-icon icon-class="qq" :width="30" :height="30" />
    </span>
    <span fill="red">
      <svg-icon icon-class="search" :width="30" :height="30" />
    </span>
    <svg-icon icon-class="user" :width="30" :height="30" />
  </div>
</template>

<script>
export default {
  name: 'IconFont',
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    }
  }
}
</script>
