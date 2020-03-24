<template>
  <div>
    <van-count-down v-bind="$attrs">
      <template v-slot="timeData">
        <span class="item">{{ timeData.hours | padZero}}</span>
        <span class="item">{{ timeData.minutes | padZero}}</span>
        <span class="item red">{{ timeData.seconds | padZero}}</span>
      </template>
    </van-count-down>
  </div>
</template>

<script>
export default {
  filters: {
    padZero: function(value) {
      return `${value}`.padStart(2, '0')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.item {
  display: inline-block;
  width: 40px;
  margin-right: 5px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: $gray;
  border-radius: 6px;
}
.red {
  background: $red;
}
</style>
