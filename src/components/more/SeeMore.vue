<template>
  <div>
    <h2 class="title"> Ocorrência </h2>
    <div class="wrapper-card">
      <v-layout>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-card-media src="/static/help.jpg" height="200px"></v-card-media>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{title}}</h3>
                <div class="description">
                  <p>Nome: {{ name }}</p>
                  <p>Endereço: {{ address }}</p>
                  <p>Telefone: {{ phone }}</p>
                  <p>Área: {{ area }}</p>
                  <p>Pedido: {{ ask }}</p>
                  <p>Causa: {{ causes }}</p>
                </div>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </div>

    <router-link :to="{ name: 'Help' }">
      <vulma-button class="confirm" color='primary'>Ajudar</vulma-button> 
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'seeMore',

  data () {
    return {
      title: 'Solicitação de recursos',
      causes: 'Chuva de Granizo',
      ask: '- 10 telhas',
      name: 'Paulo',
      area: 'Segura',
      address: 'Av. Perimetral Leste, 703',
      phone: '51 99516-5152'
    }
  },

  methods: {
  },

  mounted () {
  }
}
</script>
<style lang="stylus" scoped>
.mb-0
  text-align: left

.card 
  margin-bottom 20px
  margin-top 20px

.description
  text-align left 

.wrapper-card
  padding 10px 20px

.title
  font-size 40px !important
  color #fff
  margin: 40px 0 20px;

.confirm 
  font-size: 20px;
  width 100%
  height: 66px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate3d(-50%,0,0);
</style>

