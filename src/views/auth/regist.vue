
<template>
  <div class="registration">
    <nav-bar title="用户注册">
      <van-icon :color="variables.black" size="18" />
    </nav-bar>
  </div>
</template>

<script>
import variables from '@/styles/variables.scss'

export default {
  name: 'Regist',
  computed: {
    variables() {
      return variables
    }
  }
}
</script>
