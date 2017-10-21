import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Timeline from '@/components/timeline/Timeline'
import Home from '@/components/home/Home'
import Location from '@/components/location/Location'
import Situation from '@/components/situation/Situation'
import Moment from '@/components/moment/Moment'
import Map from '@/components/map/Map'
import Done from '@/components/done/Done'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyD1kL2DohyBqlaCPppnF6rdScgB4IP1U1c',
    libraries: 'places'
  }
})

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/timeline',
      name: 'Timeline',
      component: Timeline
    },
    {
      path: '/location',
      name: 'Location',
      component: Location
    },
    {
      path: '/situation',
      name: 'Situation',
      component: Situation
    },
    {
      path: '/moment',
      name: 'Moment',
      component: Moment
    },
    {
      path: '/map',
      name: 'map',
      component: Map
    },
    {
      path: '/done',
      name: 'Done',
      component: Done
    }
  ]
})
