<template>
  <div class="home">
    <!-- <img src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <section class="hero is-small is-fullheight">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-primary">My Little Pomo!</h1>
          <timer/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Timer from '@/components/timer/Timer.vue';

export default {
  name: 'Home',

  components: {
    Timer
  }
}
</script>
