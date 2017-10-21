<template>
  <div class="hello">
    <div class="wrapper">
      <img src="../../static/robot.svg" alt="How Can I Help? Logo" class="logo">
      <h1 class="title">{{ msg }}</h1>

      <p class="about"> {{ about }} </p>

      <router-link :to="{ name: 'SignIn' }">
        <a class="button is-primary is-medium login">Login</a>
      </router-link>

      <p class="advice">Ainda não possui uma conta?
        <router-link :to="{ name: 'SignUp' }"><a href="" class="link">Cadastre-se</a></router-link>
      </p>

    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'IUVO',
      about: 'Olá, tudo bem? Com nosso app você poderá pedir ajuda em situações de risco, ajudar pessoas (caso seja do seu interesse) e gerar dados para previnir futuros imprevistos devido mudanças climáticas. Tudo isso atravéz de uma interface amigável que conta com a ajuda de um BOT e machine learning!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  letter-spacing: 4px !important;
  padding-top: 20px !important;

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

.wrapper
  position: relative
  max-width: 600px
  margin: 0 auto;
  padding-top: 50px

.logo
  width: 150px
  height: 150px

.hello
  position: relative
  min-height: 100vh
  background: url('../../static/img/bg-hello-page.jpg')
  background-position: center;
  background-size: cover

.hello::before
  content: ''
  position: absolute
  width: 100%
  height: 100%
  top: 0
  left: 0
  opacity: 0.6;
  background-color: #101010;

.about
  padding: 40px 10px 50px
  color: rgba(#ffffff, 0.7)

.advice
  color: rgba(#ffffff, 0.5)
  padding: 20px 20px

.link
  text-decoration: underline
  color: #fff;
</style>
