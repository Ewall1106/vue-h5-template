<template>
  <div class="search-filter">
    <van-dropdown-menu style="flex:1">
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
      <van-dropdown-item v-model="value2" :options="option3" />
    </van-dropdown-menu>
    <div class="filter">
      <span style="font-size:15px;margin-right:2px">筛选</span>
      <van-icon size="12" name="filter-o" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 0,
      value2: 'a',
      option1: [
        { text: '综合', value: 0 },
        { text: '最新上架', value: 1 },
        { text: '价格最低', value: 2 },
        { text: '价格最高', value: 3 },
        { text: '评论最多', value: 4 }
      ],
      option2: [
        { text: '默认排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' }
      ],
      option3: [
        { text: '销量', value: 'a' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.search-filter {
  font-size: 10px;
  display: flex;
  flex-direction: row;
  .filter {
    flex-basis: 25%;
    color: #323233;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
