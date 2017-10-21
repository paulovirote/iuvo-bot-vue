<template>
  <div class="hello">
    <div class="wrapper">
      
      <h3 class="mini-title">Bem vindo</h3>
      <h1 class="title">{{ msg }}</h1>

      <img src="../../static/robot.svg" alt="How Can I Help? Logo" class="logo">

      <p class="about"> Basta pedir que o <b>iuvo</b> vai te salvar!</p>

      <router-link :to="{ name: 'SignIn' }">
        <a class="button is-primary is-medium login">Login</a>
      </router-link>

      <p class="advice">Ainda não possui uma conta?
        <router-link :to="{ name: 'SignUp' }" class="link">Cadastre-se</router-link>
      </p>

    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'iuvo'
    }
  }
}
</script>

<style lang="stylus" scoped>
header
  display: none

h1, h2
  font-family: 'Pacifico', cursive
  font-size: 50px
  color: #fff
  font-weight: normal

.title 
  font-size: 50px !important;
  padding: 0 !important;
  font-family: 'Dosis', sans-serif;

.mini-title
  color #fff
  height: 43px;
  border-bottom: 2px solid #474b56;
  width: 74%;
  margin: 0 auto;
  line-height 30px

ul
  list-style-type: none
  padding: 0

li
  display: inline-block
  margin: 0 10px

a
  color: #35495E

.login
  padding-left: 2.75em
  padding-right: 2.75em
  transition: background-color .3s ease
  background-color #6a94e6
  width: 70%;
  max-width 300px
  border-radius: 100px;

.login:active, .login:hover
  background-color #6086d0

.wrapper
  position: relative
  max-width: 600px
  margin: 0 auto;
  padding-top: 25px

.logo
  width: 150px
  height: 150px

.hello
  position: relative
  min-height: calc(100vh - 68px)
  color #333

.hello::before
  content: ''
  position: absolute
  width: 100%
  height: 100%
  top: 0
  left: 0

.about
  padding: 0px 10px 50px
  color: #fff

.advice
  color: rgba(#ffffff, 0.5)
  padding: 20px 20px

.link
  text-decoration: underline
  color: #fff;
</style>
