<template>
  <div class="game">
    <TheStars />
    <TheGameArea />
    <TheMenuButton />
<!--    <TheTitleScreen v-if="$store.state.blackjack.isTitleShowing" />-->
  </div>
</template>

<script>
import TheTitleScreen from './components/TheTitleScreen'
import TheSidebar from './components/TheSidebar'
import TheStars from './components/TheGameArea/TheStars'
import TheGameArea from './components/TheGameArea'
import TheMenuButton from './components/TheMenuButton'
export default {
  components: {
    TheTitleScreen,
    TheSidebar,
    TheStars,
    TheGameArea,
    TheMenuButton
  },
  mounted () {
    setTimeout(() => { this.$store.dispatch('startNewGame') }, 2000)
  }
}
</script>

<style lang="scss">

.game {
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
  flex-flow: row nowrap;
  background-color: rgb(63, 111, 194);
}
html, body {
  margin:0;
  padding:0;
  height:100%;
}
html {
  font-size: 16px;
}
body {
  background: rgb(63, 111, 194);
  font-family: 'Helvetica', 'Arial', sans-serif;
}
:focus {
  outline: 0 !important;
}
* {
  user-select: none;
}
.text-red {
  color: #E04030;
}
.text-secondary-color {
  color: rgb(12, 36, 48);
}
.text-gold {
  color: #E1AE0F;
}
.text-white {
  color: #f4f2e0;;
}
</style>
