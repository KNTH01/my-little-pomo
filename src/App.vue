<template>
  <div id="app">

    <div id="nav">
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>

  </div>
</template>

<script>

const mapBackground = [
  '/img/background/asanoha-400px.png',
  '/img/background/circles-and-roundabouts.png.png',
  '/img/background/confectionary.png',
  '/img/background/hypnotize.png',
  '/img/background/ignasi_pattern_s.png',
  '/img/background/playstation-pattern.png',
  '/img/background/seigaiha.png',
  '/img/background/topography.png'
]

export default {

  mounted () {
    const randomNumber = Math.floor(Math.random() * 8)

    document.body.style.backgroundImage = `url('${mapBackground[randomNumber]}')`
  }

}
</script>

<style lang="scss">
html,
body {
    height: 100%;
}

#app {
  text-align: center;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
