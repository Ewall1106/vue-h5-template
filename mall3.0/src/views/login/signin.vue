<template>
  <Logo />
  <Form />
</template>

<script lang="ts">
import Logo from './components/Logo.vue'
import Form from './components/Form.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Signin',
  components: {
    Logo,
    Form
  },
  setup() {}
})
</script>
