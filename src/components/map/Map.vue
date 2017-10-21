<template>
  <gmap-map
    :center="center"
    :zoom="16"
    :options="{styles: mapStyles}"
    class="mapStyle"
  >
    <div 
      :key="index" 
      v-for="(marker, index) in markers">
      <gmap-marker
        :position="marker.position"
        :clickable="true"
        :draggable="false"
        :options="{styles: markerStyles}"
        :title="'aeho'"
        :icon="'/static/markers/'+ marker.situacao +'.svg'"
        @click="center=marker.position"
      ></gmap-marker>
    </div>
    
  </gmap-map>

</template>
 
<script>
  import * as VueGoogleMaps from 'vue2-google-maps'
  import Vue from 'vue'
  import { getOcorrencias } from '../../services/map/MapService'
  import { getLocation } from '../../services/location/LocationService'

  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyD1kL2DohyBqlaCPppnF6rdScgB4IP1U1c'
    }
  })

  export default {
    name: 'map',
    data () {
      return {
        center: {},
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
              ocorrencia.position = this.convertPositions(ocorrencia.position)
              return ocorrencia
            })

            console.log(locations)
            this.markers = locations
          })
      },

      convertPositions (position) {
        position.lat = parseFloat(position.lat)
        position.lng = parseFloat(position.lng)
        return position
      },

      location () {
        getLocation()
          .then(data => {
            this.center = data
            this.markers.push({ position: this.center, situacao: 'User' })
          })
      }
    },

    mounted () {
      this.location()
      this.ocorrencias()
    }

  }
</script> 

<style lang="stylus" scoped>
  .mapStyle
    width 100%
    height calc(100vh - 68px)
</style>
