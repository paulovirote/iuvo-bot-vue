<template>
  <div>
    
    <h2 class="situation-title"> Momento </h2>
    <div class="weather-image-wrapper">
      <img src="../../assets/images/moment.svg" alt="Tempo Atual" class="location-image">
    </div>
    <form action="">
      <div class="wrapper">
        <div class="wrapp-input">
          <input type="radio" class="option" name="momentGroup" value="pre" v-model="checkedMoment"> 
        </div>
        <label class="label" for="pre">Irá Acontecer</label>
      </div>
      
      <div class="wrapper">
        <div class="wrapp-input">
          <input type="radio" class="option" name="momentGroup" value="durante" v-model="checkedMoment">
        </div>
        <label class="label" for="enchente">Está Acontendo</label>
      </div>

      <div class="wrapper">
        <div class="wrapp-input">
          <input type="radio" class="option" name="momentGroup" value="pos" v-model="checkedMoment">
        </div>
        <label class="label" for="pos">Aconteceu</label>
      </div>
    </form>
    
    <router-link :to="{ name: 'Done' }">
      <vulma-button class="confirm" color='primary' v-on:click="saveInformation">Confirmar</vulma-button> 
    </router-link>

  </div>
</template>
<script>
  import VueLocalStorage from 'vue-ls'
  import Vue from 'vue'

  Vue.use(VueLocalStorage)

  export default {
    name: 'moment',

    data () {
      return {
        checkedMoment: ''
      }
    },

    methods: {
      saveInformation () {
        let checked = this.checkedMoment
        Vue.ls.set('momento', checked)
      }
    }
  }
</script>
<style lang="stylus" scoped>
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
  font-size 28px
  color #fff
  margin: 20px 0

.wrapper 
  background-color: #1c2d3e;
  padding: 18px 27px;

.confirm 
  font-size: 20px;
  width 100%
  height: 66px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate3d(-50%,0,0);


</style>
