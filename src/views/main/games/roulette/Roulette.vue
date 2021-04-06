<template>
  <div id="roulette">
    <vue-winwheel :segments="options" />
  </div>
</template>

<script>
import VueWinwheel from "vue-winwheel/vue-winwheel";
import options from "@/config/roulette/options";

export default {
  name: "roulette",
  components: {
    VueWinwheel
  },
  data() {
    return {
      options
    };
  }
};
</script>

<style>
#roulette {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
