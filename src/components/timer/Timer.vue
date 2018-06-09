<template>
  <div>
    <p class="timer">
      {{ timerAsSeconds }}
      <br>
      {{ timerGetMinutes }}:{{ timerGetSeconds }}
    </p>

    <TimerControllers
      @resetTimer="resetTimer(25)"
      @littleBreakTimer="resetTimer(5)"
      @bigBreakTimer="resetTimer(15)"
    />

  </div>
</template>

<script>
import moment from 'moment'
import TimerControllers from './Controllers'

export default {
  components: {
    TimerControllers
  },

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
      return this.addZero(this.timer.get('seconds'))
    },
    timerGetMinutes () {
      return this.addZero(this.timer.get('minutes'))
    }
  },

  mounted () {
    const interval = setInterval(() => {
      this.timer.subtract(1, 'second')

      if (this.timerAsSeconds === 0) {
        clearInterval(interval)
      }
    }, 1000)
  },

  methods: {
    resetTimer (minutes) {
      this.timer = moment.duration(minutes, 'minutes')
    },

    addZero (number) {
      if (number < 10) {
        return `0${number}`
      }

      // cast to string
      return `${number}`
    }
  }
}
</script>

<style scoped>
.timer {
  font-size: 6rem;
}
</style>
