<template>
  <gmap-map
    :center="center"
    :zoom="10"
    :options="{styles: mapStyles}"
    class="mapStyle"
  >
    <div 
      :key="index" 
      v-for="(m, index) in markers">
      <gmap-marker
        :position="m.position"
        :clickable="true"
        :draggable="false"
        :options="{styles: markerStyles}"
        :icon="'/static/markers/Thunderstorm.svg'"
        @click="center=m.position"
      ></gmap-marker>
      <gmap-info-window 
        :opened="true" 
        :options="{ content:'teste' }">
      </gmap-info-window>
    </div>
    

  </gmap-map>

</template>
 
<script>
  import * as VueGoogleMaps from 'vue2-google-maps'
  import Vue from 'vue'
  import { getOcorrencias } from '../../services/map/MapService'

  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyD1kL2DohyBqlaCPppnF6rdScgB4IP1U1c'
    }
  })

  export default {
    name: 'map',
    data () {
      return {
        center: {lat: -29.966509, lng: -51.609544},
        markers: []
      }
    },

    computed: {
      mapStyles () {
        return [
          {
            featureType: 'road',
            stylers: [
              {visibility: 'on'}
            ]
          },
          {
            featureType: 'poi',
            elementType: 'labels.icon',
            stylers: [
              {visibility: 'on'},
              {weight: 10}
            ]
          }
        ]
      },
      markerStyles () {
        return [
          {
            featureType: 'road',
            stylers: [
              {visibility: 'on'}
            ]
          },
          {
            featureType: 'poi',
            elementType: 'labels.icon',
            stylers: [
              {visibility: 'on'},
              {weight: 10}
            ]
          }
        ]
      }
    },

    methods: {
      ocorrencias () {
        getOcorrencias()
          .then(data => {
            let locations = []
            locations = data.map((ocorrencia) => {
              let image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
              ocorrencia.marker = image
              ocorrencia.position = this.convertPositions(ocorrencia.position)
              console.log(ocorrencia)
              return ocorrencia
            })
            this.markers = locations
          })
      },

      convertPositions (position) {
        position.lat = parseFloat(position.lat)
        position.lng = parseFloat(position.lng)
        return position
      }
    },

    mounted () {
      this.ocorrencias()
    }

  }
</script> 

<style lang="stylus" scoped>
  .mapStyle
    width 100%
    height calc(100vh - 68px)
</style>
