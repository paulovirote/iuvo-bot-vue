<template>
  <div class="page-wrapper">
    
    <h2 class="page-title"> Momento </h2>
    <div class="weather-image-wrapper">
      <img src="../../assets/images/moment.svg" alt="Tempo Atual" class="location-image">
    </div>
    <form action="">
      <div class="wrapper">
        <div class="wrapp-input">
          <input type="radio" class="tableCheckbox" name="momentGroup" value="pre" v-model="checkedMoment"> 
        </div>
        <label class="label" for="pre">Irá Acontecer</label>
      </div>
      
      <div class="wrapper">
        <div class="wrapp-input">
          <input type="radio" class="tableCheckbox" name="momentGroup" value="durante" v-model="checkedMoment">
        </div>
        <label class="label" for="enchente">Está Acontendo</label>
      </div>

      <div class="wrapper">
        <div class="wrapp-input">
          <input type="radio" class="tableCheckbox" name="momentGroup" value="pos" v-model="checkedMoment">
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
  margin-right 15px

  .option
    height 15px
    width 15px

.label 
  display inline-block
  vertical-align middle
  color #fff
  font-weight 500
  font-size 20px

.situation-title
  font-size 28px
  color #fff
  margin: 20px 0

.wrapper 
  background-color: #1c2d3e;
  padding: 18px 27px;

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

.page-title {
    margin: 20px 0;
    font-size: 28px;
    font-weight: inherit;
    font-style: normal;
    color #fff
}

input.tableCheckbox {
    -webkit-appearance: none;
    background-color: transparent;
    border: 1px solid #6a94e6;
    box-shadow: none;
    padding: 9px;
    border-radius:3px;
    display: inline-block;
    position: relative;
    width: 25px;
    height: 25px;
    margin-right: 15px;

    &:active, &:checked:active{
        box-shadow: none;
    }

    &:focus{
        outline: 0;
    }

    &:checked {
        background-color: transparent;
        border: 1px solid #6a94e6;
        box-shadow: none;
        color: #99a1a7;
        font-family: FontAwesome;

        &:after {
            content: "\f00c";
            font-size: 25px;
            left: 1px;
            top: -5px;
            position: absolute;
            font-size: 22px;
            color #6a94e6
        }
    }
}

.wrapper 
  background-color: #242833;
  padding: 18px 27px;

</style>
