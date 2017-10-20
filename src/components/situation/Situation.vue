<template>
  <div>
    
    <h2 class="situation-title"> Situação </h2>

    <form action="">
      <div class="wrapper">
        <div class="wrapp-input">
          <input type="checkbox" class="option" name="deslizamento"> 
        </div>
        <label class="label" for="deslizamento">Deslizamento</label>
      </div>
      
      <div class="wrapper">
        <div class="wrapp-input">
          <input type="checkbox" class="option" name="enchente">
        </div>
        <label class="label" for="enchente">Enchente</label>
      </div>

      <div class="wrapper">
        <div class="wrapp-input">
          <input type="checkbox" class="option" name="granizo">
        </div>
        <label class="label" for="granizo">Granizo</label>
      </div>

      <div class="wrapper">
        <div class="wrapp-input">
          <input type="checkbox" class="option" name="tornado">
        </div>
        <label class="label" for="tornado">Tornado</label>
      </div>

      <div class="wrapper">
        <div class="wrapp-input">
          <input type="checkbox" class="option" name="outro">
        </div>
        <label class="label" for="outro">Outro</label>
      </div>
    </form>
    
    <vulma-button class="confirm" color='primary'>Confirmar</vulma-button> 

  </div>
</template>
<script>
export default {
  name: 'situation'
}
</script>
<style lang="stylus" scoped>
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
