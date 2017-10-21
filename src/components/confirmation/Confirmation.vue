<template>
  <div class="wrapp">
    <h2 class="situation-title"> Cadastro<br>Efetuado com<br>Sucesso! </h2>

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
    return {}
  }
}
</script>
<style lang="stylus" scoped>
.wrapp {
  padding: 20px 25px;
  font-family: 'Dosis', sans-serif;
}

.confirm
  padding-left: 2.75em
  padding-right: 2.75em
  transition: background-color .3s ease
  background-color #6a94e6
  width: 70%;
  max-width 300px
  border-radius: 100px;
  position fixed
  bottom 15px
  left 50%
  transform translate3d(-50%, 0, 0)
  font-size 1.25rem
  font-family: 'Dosis', sans-serif;

.confirm:active, .confirm:hover
  background-color #6086d0

.situation-title
  padding: 28px 0;
  font-size: 38px;
  color: #fff;
  margin: 0px 0;

.concluded
  width 100px
  margin 0 auto
</style>
