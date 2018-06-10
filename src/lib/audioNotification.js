class AudioNotification {
  constructor () {
    this.audioElement = new Audio('/audio/notification.mp3')
  }

  play (playCount, intervalTime = 2000) {
    if (!this.audioElement) {
      return
    }

    this.audioElement.play()

    if (playCount > 1) {
      let i = 1

      const interval = setInterval(() => {
        ++i
        this.audioElement.play()

        if (i === playCount) {
          clearInterval(interval)
        }
      }, intervalTime)
    }
  }
}

export default AudioNotification
