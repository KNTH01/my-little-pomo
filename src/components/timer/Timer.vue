<template>
  <div class="has-text-centered">
    <div class="timerContainer">
      <loading-progress
        :progress="timerProgress"
        :indeterminate="false"
        :counter-clockwise="false"
        :hide-background="false"
        size="350"
        fill-duration="2"
        rotation-duration="15"
      />

      <p
        class="timer has-text-primary"
        @click="changeTimerDisplay"
      >
        {{ timerDisplay }}
      </p>
    </div>

    <div class="columns">
      <TimerControllers
        class="column"
        @resetTimer="resetTimer(25)"
        @littleBreakTimer="resetTimer(5)"
        @bigBreakTimer="resetTimer(15)"
      />
    </div>
  </div>
</template>

<script>
import moment from 'moment'

import Vue from 'vue'
import VueProgress from 'vue-progress-path'

import TimerControllers from './Controllers.vue'
import AudioNotification from '../../lib/audioNotification'
import 'vue-progress-path/dist/vue-progress-path.css'

Vue.use(VueProgress, {
  defaultShape: 'circle'
})

export default {
  components: {
    TimerControllers
  },

  data () {
    return {
      timer: moment.duration(25, 'minutes'),
      timerDisplayMode: 1,
      timerInterval: null,
      timerProgress: 0,
      audioNotification: null
    }
  },

  computed: {
    timerDisplay () {
      return this.timerDisplayMode === 0
        ? `${this.timerAsSeconds}`
        : `${this.timerGetMinutes}:${this.timerGetSeconds}`
    },
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
    this.askNotificationPermission()
    this.audioNotification = new AudioNotification()
  },

  methods: {
    resetTimer (minutes) {
      this.timer = moment.duration(minutes, 'minutes')
      this.startSession()
    },

    startSession () {
      clearInterval(this.timerInterval)
      const maxSeconds = this.timerAsSeconds

      this.timerInterval = setInterval(() => {
        // TODO extract to method.
        this.timer.subtract(1, 'second')
        this.timerProgress = 1 - (this.timerAsSeconds / maxSeconds)

        if (this.timerAsSeconds === 0) {
          this.endSession(this.timerInterval)
        }
      }, 1000)
    },

    endSession (interval) {
      clearInterval(interval)
      this.notifySessionEnd()
      this.audioNotification.play(3)
    },

    changeTimerDisplay () {
      this.timerDisplayMode = this.timerDisplayMode === 0 ? 1 : 0
    },

    addZero (number) {
      if (number < 10) {
        return `0${number}`
      }

      // cast to string
      return `${number}`
    },

    askNotificationPermission () {
      if (!('Notification' in window)) {
        return
      }

      if (Notification.permission !== 'denied') {
        Notification.requestPermission(function (permission) {
          if (!('permission' in Notification)) {
            // store user choice
            Notification.permission = permission
          }
        })
      }
    },

    notifySessionEnd () {
      if (Notification.permission === 'granted') {
        /* eslint-disable no-new */
        new Notification('Your little pomo session has ended, go take a break! ;)')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.timerContainer {
  display: inline-flex;
}

.timer {
  width: 400px;
  height: 400px;
  font-size: 6rem;
  cursor: pointer;
  padding-top: 8rem;
  margin: auto;
}

.vue-progress-path {
  position: absolute;
}
</style>

<style lang="scss">
.timerContainer {
  .vue-progress-path path {
    stroke-width: 6;
  }

  .vue-progress-path .progress {
    stroke: rgb(121, 87, 213);
  }

  .vue-progress-path .background {
    stroke: rgba(121, 87, 213, 0.2);
  }
}
</style>
