<template>
  <div>
    
    <h2 class="location-title"> Confirmar Localização</h2>

    <div class="wrapper">
      
      <div class="weather-centered">
        <div class="weather-image-wrapper">
          <img src="../../assets/images/location.svg" alt="Tempo Atual" class="location-image">
        </div>
      </div>

      <h3 class="address">-</h3>

      
      <vulma-button class="edit" color='primary'>Editar</vulma-button>

    </div>
    

    <router-link :to="{ name: 'Situation' }">
      <vulma-button class="confirm" color='primary'>Confirmar</vulma-button> 
    </router-link>

  </div>
</template>
<script>
export default {
  name: 'location'
}
</script>
<style lang="stylus" scoped>
.location-image 
  width: 100px

.location-title
  font-size 28px
  color #fff
  margin: 20px 0;

.wrapper 
  background-color: #1c2d3e;
  padding: 60px;

.city 
  width: 100%;
  background: transparent;
  font-size: 25px;
  text-align: center;
  color: #fff
  height: 44px;
  border-radius: 11px
  border: .5px solid #ffffff

.form
  padding-top 50px

.confirm 
  font-size: 20px;
  width 100%
  height: 66px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate3d(-50%,0,0);

.address 
  padding-top 25px
  color #fff
  font-size 20px

.edit
  background: #fada46
  margin-top: 20px
  color: #3a465a
  font-weight: 500
</style>
