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
import SeeMore from '@/components/more/SeeMore'
import SignIn from '@/components/signIn/SignIn'
import SignUp from '@/components/signUp/SignUp'
import Confirmation from '@/components/confirmation/Confirmation'
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
    },
    {
      path: '/seeMore',
      name: 'SeeMore',
      component: SeeMore
    },
    {
      path: '/signIn',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/signUp',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/confirmation',
      name: 'Confirmation',
      component: Confirmation
    }
  ]
})
