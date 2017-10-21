<template>
  <div>
    
    <h2 class="situation-title"> Situação </h2>

    <form action="">
      <div class="wrapper-check">
        <div class="wrapper">
          <div class="wrapp-input">
            <input type="radio" class="option" name="radioGroup" value="Deslizamento" v-model="checkedSituation"> 
          </div>
          <label class="label" for="deslizamento">Deslizamento</label>
        </div>
        
        <div class="wrapper">
          <div class="wrapp-input">
            <input type="radio" class="option" name="radioGroup" value="Enchente" v-model="checkedSituation">
          </div>
          <label class="label" for="enchente">Enchente</label>
        </div>

        <div class="wrapper">
          <div class="wrapp-input">
            <input type="radio" class="option" name="radioGroup" value="Granizo" v-model="checkedSituation">
          </div>
          <label class="label" for="granizo">Granizo</label>
        </div>

        <div class="wrapper">
          <div class="wrapp-input">
            <input type="radio" class="option" name="radioGroup" value="Resgate" v-model="checkedSituation">
          </div>
          <label class="label" for="resgate">Resgate</label>
        </div>

        <div class="wrapper">
          <div class="wrapp-input">
            <input type="radio" class="option" name="radioGroup" value="Temporal" v-model="checkedSituation">
          </div>
          <label class="label" for="temporal">Temporal</label>
        </div>

        <div class="wrapper">
          <div class="wrapp-input">
            <input type="radio" class="option" name="radioGroup" value="Tornado" v-model="checkedSituation">
          </div>
          <label class="label" for="tornado">Tornado</label>
        </div>

        <div class="wrapper">
          <div class="wrapp-input">
            <input type="radio" class="option" name="radioGroup" value="Outro" v-model="checkedSituation">
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
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate3d(-50%,0,0);


</style>
