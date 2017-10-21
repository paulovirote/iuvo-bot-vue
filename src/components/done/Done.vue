<template>
  <div class="page-wrapper">
    
    <h2 v-if="isLoading" class="situation-title"> Registrando<br>Ocorrência... </h2>
    <h2 v-if="isConcluded" class="situation-title"> Ocorrência<br>Registrada! </h2>

    <div class="weather-image-wrapper">
      <div v-if="isLoading" class="loader"></div>
      <div v-if="isConcluded" class="concluded">
        <img src="../../assets/images/tick.svg" alt="">
      </div>
    </div>
    
    <router-link :to="{ name: 'Home' }">
      <vulma-button v-bind:class="{ disabled: !isConcluded }" class="confirm" color='primary'>Concluir</vulma-button> 
    </router-link>

  </div>
</template>
<script>
  import { saveInformation } from '../../services/save/Save'
  import VueLocalStorage from 'vue-ls'
  import Vue from 'vue'

  Vue.use(VueLocalStorage)
  
  export default {
    name: 'done',

    data () {
      return {
        isLoading: true,
        isConcluded: false
      }
    },

    methods: {
      saveInfo () {
        let dados = this.getDados()

        saveInformation(dados)
          .then(data => {
            Vue.ls.clear()
            this.isLoading = false
            this.isConcluded = true
          })
      },
      getDados () {
        let dados = {}

        dados.lat = Vue.ls.get('lat').toString()
        dados.lng = Vue.ls.get('lng').toString()
        dados.momento = Vue.ls.get('momento')
        dados.situacao = Vue.ls.get('situacao')

        return dados
      }
    },

    mounted () {
      this.saveInfo()
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
    border-left: loader-border solid #eb6e89;
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

.page-wrapper
  font-family: 'Dosis', sans-serif;

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

.confirm.disabled
  cursor not-allowed
  opacity 0.5

.page-title {
    margin: 20px 0;
    font-size: 28px;
    font-weight: inherit;
    font-style: normal;
    color #fff
}
</style>
