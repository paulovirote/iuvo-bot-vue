<template>
  <div id="app">
    <main>
      <menu-component></menu-component>
      <div class="wrapper">
        <router-view></router-view>   
      </div>
      
    </main>
  </div>
</template>
<script>
  import menuComponent from './components/menu/Menu'
  export default {
    name: 'app',
    components: {
      'menu-component': menuComponent
    }
  }
</script>

<style lang="stylus">
iuvo-main-blue = #2c3e50
iuvo-dark-blue = #1c2d3e

body
  margin: 0;
  background-color: iuvo-main-blue;
  height: 100vh;

.wrapper{
  padding-top 68px
}

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

main
  text-align: center;

header
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #00d1b2;
  color: #fff;
header span
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
</style>
