<template>
  <div class="wrapper-card">
    <card></card>

  </div>
</template>
<script>
import cardComponent from '../cards/Card'

export default {
  name: 'timeline',

  components: {
    'card': cardComponent
  }

  // data () {
  //   return {
  //     cardText: 'Eu preciso de telhas para minha casa'
  //   }
  // }
}
</script>

<style lang="stylus" scoped>
.card 
  margin-bottom: 40px;  

.wrapper-card
  padding 10px 20px
</style>

