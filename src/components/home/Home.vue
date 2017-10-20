<template>
  <div>
    <menu-component></menu-component>

    <div class="wrapper">
      <tabs></tabs>
      <forecast></forecast>
    </div>
  </div>
</template>
<script>
import tabsComponent from '../tabs/Tabs'
import menuComponent from '../menu/Menu'
import weatherForecastComponent from '../weatherForecast/WeatherForecast'

export default {
  name: 'timeline',

  components: {
    'tabs': tabsComponent,
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

