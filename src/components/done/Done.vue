<template>
  <div>
    
    <h2 v-if="isLoading" class="situation-title"> Registrando Ocorrência... </h2>
    <h2 v-if="isConcluded" class="situation-title"> Ocorrência Registrada! </h2>

    <div class="weather-image-wrapper">
      <div v-if="isLoading" class="loader"></div>
      <div v-if="isConcluded" class="concluded">
        <img src="../../assets/images/tick.svg" alt="">
      </div>
    </div>
    
    <vulma-button v-if="isLoading" disabled class="confirm" color='primary'>Concluir</vulma-button> 
    
    <router-link :to="{ name: 'Home' }">
      <vulma-button v-if="isConcluded" class="confirm" color='primary'>Concluir</vulma-button> 
    </router-link>

  </div>
</template>
<script>
export default {
  name: 'done',

  data () {
    return {
      isLoading: false,
      isConcluded: true
    }
  }
}
</script>
<style lang="stylus" scoped>

loader-border= 3px;
loader-border-secondary-color= 0.4;

.loader {
    border-radius: 50%;
    width: 80px;
    margin 0 auto
    height: 80px;
    font-size: 10px;
    margin-top: 4px;
    border-top: loader-border solid rgba(255, 255, 255, loader-border-secondary-color);
    border-right: loader-border solid rgba(255, 255, 255, loader-border-secondary-color);
    border-bottom: loader-border solid rgba(255, 255, 255, loader-border-secondary-color);
    border-left: loader-border solid #ffffff;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load 0.8s infinite linear;
    animation: load 0.8s infinite linear;
}

.weather-image-wrapper
  text-align center
  width 100%
  padding-bottom 30px

  img 
    width 100px

.wrapper 
  width 80%
  margin 0 auto 10px
  text-align left 

.wrapp-input
  width 20px
  height 20px
  position relative
  display inline-block
  vertical-align middle

  .option
    height 15px
    width 15px

.label 
  display inline-block
  vertical-align middle
  color #fff
  font-size 18px
  font-weight 500

.situation-title
  padding 30px 0 90px
  font-size 38px
  color #fff
  margin: 20px 0

.wrapper 
  background-color: #1c2d3e
  padding: 18px 27px

.confirm 
  font-size: 20px
  width 100%
  height: 66px
  position: absolute
  bottom: 0
  left: 50%
  transform: translate3d(-50%,0,0)

@-webkit-keyframes load {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
@keyframes load {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
</style>
