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
import TimerControllers from './Controllers.vue'

export default {
  components: {
    TimerControllers
  },

  data () {
    return {
      audioNotification: new Audio('/audio/notification.mp3'),
      timer: moment.duration(0.1, 'minutes')
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
    this.startSession()
  },

  methods: {
    resetTimer (minutes) {
      this.timer = moment.duration(minutes, 'minutes')
    },

    startSession () {
      const interval = setInterval(() => {
        this.timer.subtract(1, 'second')

        if (this.timerAsSeconds === 0) {
          this.finishSession(interval)
        }
      }, 1000)
    },

    finishSession (interval) {
      clearInterval(interval)
      this.audioNotification.play()

      let i = 0

      const audioInterval = setInterval(() => {
        this.audioNotification.play()
        ++i

        if (i === 2) {
          clearInterval(audioInterval)
        }
      }, 1500)
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
