<template>
  <div>    
    
    <vulma-navbar class="navbar" show-menu-button='true' @menu-clicked='$refs.drawer.open()'>
      <vulma-navitem slot='left' :is-tab='false'>
        <img class="logo" src="../../../static/img/care.png">
      </vulma-navitem>
      <vulma-navitem class="title" slot='center'>
        <h3 class="page-title">{{ title }}</h3>
      </vulma-navitem>
    </vulma-navbar>

    <vulma-drawer ref='drawer'>
      <vulma-drawerheader name='Milene ' email='milenelacerda@icloud.com ' avatar='' color='custom-hulk '></vulma-drawerheader>
      <vulma-menu>

        <vulma-menuitem icon='fa-user'>{{ profileTile }}</vulma-menuitem>
        <vulma-menugroup :title="configTitle">
          <vulma-menuitem>{{ accountTitle }}</vulma-menuitem>
          <vulma-menuitem>{{ paymentTitle }}</vulma-menuitem>
          <vulma-menuitem>{{ projectsTitle }}</vulma-menuitem>
        </vulma-menugroup>

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
      profileTile: 'Perfil',
      configTitle: 'Configurações',
      accountTitle: 'Conta',
      paymentTitle: 'Pagamento',
      projectsTitle: 'Projetos',
      title: 'Iuvo'
    }
  }

}
</script>
<style lang="stylus" scoped>
.bgcolor-custom-hulk 
  color: white
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
</style>

