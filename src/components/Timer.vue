<template>
  <div>
    <p class="timer">
      {{ timer }}
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      timer: null
    }
  },

  mounted () {
    this.timer = '00:00'
  }
}
</script>

<style scoped>
.timer {
  font-size: 6rem;
}
</style>
