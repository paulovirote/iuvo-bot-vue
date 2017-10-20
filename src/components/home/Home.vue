<template>
    <forecast></forecast>
</template>
<script>
import menuComponent from '../menu/Menu'
import weatherForecastComponent from '../weatherForecast/WeatherForecast'

export default {
  name: 'timeline',

  components: {
    'menu-component': menuComponent,
    'forecast': weatherForecastComponent
  },

  data () {
    return true
  }
}
</script>

<style lang="stylus" scoped>

</style>

