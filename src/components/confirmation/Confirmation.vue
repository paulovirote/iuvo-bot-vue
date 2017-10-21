<template>
  <div class="wrapp">
    <h2 class="situation-title"> {{ msg }} </h2>

    <div class="weather-image-wrapper">
      <div class="concluded">
        <img src="../../assets/images/tick.svg" alt="">
      </div>
    </div>
    
    <router-link :to="{ name: 'Home' }">
      <vulma-button class="confirm" color='primary'>Ir para Home</vulma-button> 
    </router-link>

  </div>
</template>
<script>
export default {
  name: 'done',

  data () {
    return {
      msg: 'Cadastro Efetuado com Sucesso!'
    }
  }
}
</script>
<style lang="stylus" scoped>
.wrapp
  padding 68px

.confirm 
  font-size: 20px
  width 100%
  height: 66px
  position: absolute
  bottom: 0
  left: 50%
  transform: translate3d(-50%,0,0)

.situation-title
  padding 30px 0
  font-size 38px
  color #fff
  margin: 20px 0

.concluded
  width 200px
  margin 0 auto
</style>
