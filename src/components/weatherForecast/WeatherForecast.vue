<template>
    <div>
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
                        <img src="../../assets/images/animated/day.svg" alt="Tempo Atual" class="weather-image">
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
        <router-link :to="{ name: 'Location' }">
          <vulma-button class="danger" color='primary'>Preciso de Ajuda</vulma-button>
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
.weather-info-wrapper {
    text-align: center;
    height: 100%;
    position: relative;
}

.weather-image-wrapper {
    background-color: #1c2d3e;

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
        padding: 15px 0;

        .weather-image {
            width: 70%;
            max-width: 200px;
            display: inline;
        }

        .main-temperature {
            color: #fff;
            position: absolute;
            top: 50%;
            right: 20px;
            text-align: center;
            -webkit-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
            transform: translateY(-50%);
            font-size: 60px;
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
        background-color: #00d1b2;
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

.danger {
    font-size: 20px;
    width: 100%;
    height: 66px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    background-color: #e74c3c;
}
</style>
