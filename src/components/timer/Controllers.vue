<template>
  <div class="buttons">
    <button
      class="button has-text-primary"
      @click="$emit('resetTimer')"
    >
      Let's go again
    </button>
    <button
      class="button has-text-primary"
      @click="$emit('littleBreakTimer')"
    >
      Little break
    </button>
    <button
      class="button has-text-primary"
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
