<template>
  <div>
    <menu-component></menu-component>

    <div class="wrapper">
      <tabs></tabs>
    
      <div class="wrapper-card">
        
      </div>
    </div>
  </div>
</template>
<script>
import tabsComponent from '../tabs/Tabs'
import menuComponent from '../menu/Menu'

export default {
  name: 'timeline',

  components: {
    'tabs': tabsComponent,
    'menu-component': menuComponent
  }
  // data () {
  //   return {
  //     projects: []
  //   }
  // },
}
</script>

<style lang="stylus" scoped>
.card 
  margin-bottom: 40px;  
</style>

