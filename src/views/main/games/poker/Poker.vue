<template>
 <Poker></Poker>
</template>

<script>
import Poker from "./views/Game";


export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {

    Poker
  },
  mounted: function () {
    console.info('App mounted.')

  }
}
</script>
