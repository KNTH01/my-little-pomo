<template>
  <div class="home">
    <section class="hero is-small">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-primary has-text-centered">Pomoment</h1>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <timer/>
      </div>
    </section>
  </div>
</template>

<script>
import Timer from '@/components/timer/Timer.vue';

export default {
  name: 'Home',

  components: {
    Timer
  }
}
</script>
