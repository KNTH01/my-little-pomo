<template>
  <div class="home">
    <!-- <img src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1 class="title">My Little Pomo!</h1>
    <timer/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Timer from '@/components/timer/Timer.vue'

export default {
  name: 'Home',

  components: {
    Timer
  }
}
</script>
