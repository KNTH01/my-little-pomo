<template>
  <div>
    <p class="timer">
      {{ timerAsSeconds }}
      <br>
      {{ timerGetMinutes }} : {{ timerGetSeconds }}
    </p>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  data () {
    return {
      timer: moment.duration(25, 'minutes')
    }
  },

  computed: {
    timerAsSeconds () {
      return this.timer.as('seconds')
    },
    timerGetSeconds () {
      return this.timer.get('seconds')
    },
    timerGetMinutes () {
      return this.timer.get('minutes')
    }
  },

  mounted () {
    const interval = setInterval(() => {
      this.timer.subtract(1, 'second')

      if (this.timerAsSeconds === 0) {
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
