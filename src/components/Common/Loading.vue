<template>
  <orbit-spinner
    class="spinner-element"
    :animation-duration="1200"
    :size="40"
    color="#777"
  />
</template>

<style scoped>
.spinner-element {
  margin: auto;
}
</style>

<script>
import { OrbitSpinner } from 'epic-spinners'

export default {
  components: {
    OrbitSpinner,
  },
}
</script>
