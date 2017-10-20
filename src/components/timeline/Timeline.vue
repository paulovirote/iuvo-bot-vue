<template>
  <div class="wrapper-card"></div>
</template>
<script>
import menuComponent from '../menu/Menu'

export default {
  name: 'timeline',

  components: {
    'menu-component': menuComponent
  }
  // data () {
  //   return {
  //     projects: []
  //   }
  // }
}
</script>

<style lang="stylus" scoped>
.card 
  margin-bottom: 40px;  
</style>

