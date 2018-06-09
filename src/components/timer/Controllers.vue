<template>
  <div class="buttons">
    <button
      class="button is-light"
      @click="$emit('resetTimer')"
    >
      Let's go again
    </button>
    <button
      class="button is-light"
      @click="$emit('littleBreakTimer')"
    >
      Little break
    </button>
    <button
      class="button is-light"
      @click="$emit('bigBreakTimer')"
    >
      Big break
    </button>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
