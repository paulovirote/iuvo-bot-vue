<template>
  <div>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-media src="/static/help.jpg" height="200px"></v-card-media>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{title}}</h3>
              <div class="description">{{ cardText }}</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <router-link :to="{ name: 'Help' }">
              <v-btn flat color="orange">Ajudar</v-btn>
            </router-link>
            <router-link :to="{ name: 'SeeMore' }">
              <v-btn flat color="orange">Ver Mais</v-btn>
            </router-link>
          </v-card-actions>
        </v-card>

        <v-card>
          <v-card-media src="/static/map.png" height="200px"></v-card-media>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{title2}}</h3>
              <div class="description">{{ cardText2 }}</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <router-link :to="{ name: 'Help' }">
              <v-btn flat color="orange">Ajudar</v-btn>
            </router-link>
            <router-link :to="{ name: 'SeeMore' }">
              <v-btn flat color="orange">Ver Mais</v-btn>
            </router-link>
          </v-card-actions>
        </v-card>

        <v-card>
          <v-card-media src="/static/deslizamento.jpeg" height="200px"></v-card-media>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{title3}}</h3>
              <div class="description">{{ cardText3 }}</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <router-link :to="{ name: 'Help' }">
              <v-btn flat color="orange">Ajudar</v-btn>
            </router-link>
            <router-link :to="{ name: 'SeeMore' }">
              <v-btn flat color="orange">Ver Mais</v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
export default {
  name: 'cardComponent',

  data () {
    return {
      title: 'Solicitação de recursos',
      cardText: '- 10 telhas',
      title2: 'Resgate',
      cardText2: 'Enchente',
      title3: 'Deslizamento',
      cardText3: 'Materiais de construção e de limpeza'
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
</style>

