<template>
    <div class="wrapper-general">
        <div class="weather-info-wrapper">

            <div class="weather-centered">
                <div class="city-information">
                    <h2 class="city-name">Charqueadas</h2>
                </div>
                <div class="weather-image-wrapper">
                    <div class="weather-description">
                        {{ description }}
                    </div>
                    <div class="weather-information">
                        <img v-bind:src="'../../../static/img/animated/' + actual + '.svg'" alt="Previsao do Tempo" class="weather-image">
                        <div class="main-temperature">
                            {{ tempAtual }}°
                        </div>
                    </div>
                    <div class="weather-risk normal">
                        Sem risco
                    </div>
                    <div class="other-temperature">
                        <i class="fa fa-long-arrow-up maximum"></i> {{ maxima }} | {{ minima }} <i class="fa fa-long-arrow-down minimum"></i>
                    </div>
                </div>
                
            </div>
        </div>

        <img src="../../../static/img/robot.svg" alt="iuco Logo" class="logo">

        <router-link :to="{ name: 'Location' }">
          <vulma-button class="button is-primary is-medium danger" color='primary'>Preciso de Ajuda</vulma-button>
        </router-link>
    </div>
</template>

<script>
import { getLocation } from '../../services/location/LocationService'
import { getWeatherInfos } from '../../services/weather/WeatherService'
import VueLocalStorage from 'vue-ls'
import Vue from 'vue'

Vue.use(VueLocalStorage)

export default {
  name: 'weatherForecastComponent',

  data () {
    return {
      tempAtual: '-',
      maxima: '-',
      minima: '-',
      description: '-',
      actual: '-',
      critic: '-'
    }
  },

  methods: {
    location () {
      getLocation()
        .then(this.saveInformation)
        .then(getWeatherInfos)
        .then(data => {
          this.tempAtual = data.temperatura.atual
          this.maxima = data.temperatura.maxima
          this.minima = data.temperatura.minima
          this.description = data.previsao.descricao
          this.actual = data.previsao.atual
          this.critic = data.previsao.critica
        })
    },
    saveInformation (position) {
      Vue.ls.set('position', position)
      return position
    }
  },

  mounted () {
    this.location()
  }
}
</script>

<style lang="stylus" scoped>
.wrapper-general
  font-family: 'Dosis', sans-serif;

.weather-info-wrapper {
    text-align: center;
    height: 100%;
    position: relative;
}

.weather-image-wrapper {
    background-color: #242833;

    .weather-description, .weather-risk {
        text-transform: capitalize;
        color: #fff;
        position: absolute;
        width: 100%;
    }

    .weather-description {
        text-align: center;
        margin-top: 5px;
        font-size: 20px;
    }

    .weather-information {
        text-align: left;
        position: relative;
        padding: 50px 0;

        .weather-image {
            width: 98px;
            max-width: 200px;
            display: inline;
            position: absolute;
            bottom: 79px;
            right: 85px;
        }

        .main-temperature {
            color: #fff;
            right: 20px;
            text-align: center;
            font-size 140px
            min-height 80px
        }
    }

    .weather-risk {
        bottom: 8px;
        right: 8px;
        width: auto;
        padding: 2px 10px;
        border-radius: 100px;
    }

    .normal {
        background-color: #7ed2e9;
    }

    .alert {
        background-color: #f1c40f;
    }

    .danger {
        background-color: #e74c3c;
    }

    .other-temperature {
        position: absolute;
        bottom: 0px;
        left: 8px;
        bottom: 8px;
        width: auto;
        padding: 2px 10px;
        border-radius: 100px;
        background-color: #fff;
    }

    .maximum {
        color: #e74c3c;
    }

    .minimum {
        color: #3498db;
    }
}

.city-information {
    color: #fff;
}

.city-name {
    margin: 20px 0;
    font-size: 28px;
    font-weight: inherit;
    font-style: normal;
}

.danger
  padding-left 2.75em
  padding-right 2.75em
  transition background-color .3s ease
  background-color #eb6e89
  width 70%
  max-width 300px
  border-radius 100px
  position absolute
  bottom 15px
  left 50%
  transform translate3d(-50%, 0, 0)
  font-size 1.25rem
  font-family: 'Dosis', sans-serif;

.logo
    height: 88px;
    bottom: 60px;
    position: absolute;
    left 50%
    transform translate3d(-50%, 0, 0)

</style>
