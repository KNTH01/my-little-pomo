<template>
  <div>
    <button
      class="button"
      @click="$emit('resetTimer')"
    >
      let's go again
    </button>
    <button
      class="button"
      @click="$emit('littleBreakTimer')"
    >
      little break
    </button>
    <button
      class="button"
      @click="$emit('bigBreakTimer')"
    >
      big break
    </button>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
