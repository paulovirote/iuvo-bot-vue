<template>
  <div style="text-align: left">    
    
    <vulma-navbar class="navbar" show-menu-button='true' @menu-clicked='$refs.drawer.open()'>
      <vulma-navitem slot='left' class="title">
        <h3 class="page-title">{{ title }}</h3>
      </vulma-navitem>
    </vulma-navbar>

    <vulma-drawer ref='drawer'>
      <router-link :to="{ name: 'Hello' }">
        <vulma-drawerheader @menu-clicked='$refs.drawer.close()' email='' avatar='/static/robot.svg' color='custom-hulk '></vulma-drawerheader>
      </router-link>

      <vulma-menu>
        <vulma-menuitem route='/hello' icon='fa-home'>{{ iuvo }}</vulma-menuitem>
        <vulma-menuitem route='/location' icon='fa-handshake-o'>{{ askHelp }}</vulma-menuitem>
        <vulma-menuitem route='/map' icon='fa-map-marker'>{{ map }}</vulma-menuitem>
        <vulma-menuitem route='/timeline' icon='fa-rss'>{{ feed }}</vulma-menuitem>
      </vulma-menu>
    </vulma-drawer>

  </div>
</template>
<script>
import { bulmaComponentGenerator } from 'vue-bulma-components'

export default {
  name: 'menuComponent',

  components: {
    box: bulmaComponentGenerator('box')
  },

  data () {
    return {
      profileTile: 'Iuvo',
      iuvo: 'Iuvo',
      askHelp: 'Pedir Ajuda',
      feed: 'Feed',
      map: 'Mapa Risco',
      title: 'Iuvo'
    }
  }

}
</script>
<style lang="stylus" scoped>
.bgcolor-custom-hulk 
  color: white
  height 99px
  background-color: #00d1b2
  
.navbar
  background-color: #00d1b2 !important
  min-height: 4.25rem !important

.wrapper
  margin: 0 auto
  padding: 90px 20px 20px

.wrapper-card
  max-width: 450px
  padding-top: 20px
  margin: 0 auto 10px
  
.menu-button[data-v-9d073fb2]
  transition: .4s ease

.page-title 
  font-size: 30px
  color: #fff
  cursor: default
  font-family: 'Pacifico', cursive

ul
  text-align left !important

.align-left
  text-align left 
</style>

