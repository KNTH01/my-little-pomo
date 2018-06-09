<template>
  <div>
    <p class="timer">
      {{ displayedTimer }}
    </p>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  data () {
    return {
      timer: moment.duration(1, 'minutes')
    }
  },

  computed: {
    displayedTimer () {
      // return this.timer.as('minutes')
      return this.timer.as('seconds')
    }
  },

  mounted () {
    const interval = setInterval(() => {
      this.timer.subtract(1, 'second')

      if (this.timer.get('seconds') === 0) {
        clearInterval(interval)
      }
    }, 1000)
  }
}
</script>

<style scoped>
.timer {
  font-size: 6rem;
}
</style>
