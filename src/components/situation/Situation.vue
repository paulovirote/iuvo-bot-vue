<template>
  <div class="page-wrapper">
    
    <h2 class="page-title"> Situação </h2>

    <form action="">
      <div class="wrapper-check">
        <div class="wrapper">
          <div class="wrapp-input">
            <input type="radio" class="tableCheckbox" name="radioGroup" value="Deslizamento" v-model="checkedSituation"> 
          </div>
          <label class="label" for="deslizamento">Deslizamento</label>
        </div>
        
        <div class="wrapper">
          <div class="wrapp-input">
            <input type="radio" class="tableCheckbox" name="radioGroup" value="Enchente" v-model="checkedSituation">
          </div>
          <label class="label" for="enchente">Enchente</label>
        </div>

        <div class="wrapper">
          <div class="wrapp-input">
            <input type="radio" class="tableCheckbox" name="radioGroup" value="Granizo" v-model="checkedSituation">
          </div>
          <label class="label" for="granizo">Granizo</label>
        </div>

        <div class="wrapper">
          <div class="wrapp-input">
            <input type="radio" class="tableCheckbox" name="radioGroup" value="Resgate" v-model="checkedSituation">
          </div>
          <label class="label" for="resgate">Resgate</label>
        </div>

        <div class="wrapper">
          <div class="wrapp-input">
            <input type="radio" class="tableCheckbox" name="radioGroup" value="Temporal" v-model="checkedSituation">
          </div>
          <label class="label" for="temporal">Temporal</label>
        </div>

        <div class="wrapper">
          <div class="wrapp-input">
            <input type="radio" class="tableCheckbox" name="radioGroup" value="Tornado" v-model="checkedSituation">
          </div>
          <label class="label" for="tornado">Tornado</label>
        </div>

        <div class="wrapper">
          <div class="wrapp-input">
            <input type="radio" class="tableCheckbox" name="radioGroup" value="Outro" v-model="checkedSituation">
          </div>
          <label class="label" for="outro">Outro</label>
        </div>
      </div>
    </form>
    
    <router-link :to="{ name: 'Moment' }">
      <vulma-button class="confirm" color='primary' v-on:click="saveInformation">Confirmar</vulma-button> 
    </router-link>

  </div>
</template>
<script>
import VueLocalStorage from 'vue-ls'
import Vue from 'vue'

Vue.use(VueLocalStorage)

export default {
  name: 'situation',

  data () {
    return {
      checkedSituation: 'Outros'
    }
  },

  methods: {
    saveInformation () {
      let checked = this.checkedSituation
      Vue.ls.set('situacao', checked)
    }
  }
}
</script>
<style lang="stylus" scoped>
.wrapper-check
  margin-bottom 85px

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

.wrapper 
  background-color: #242833;
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

</style>
