import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Timeline from '@/components/timeline/Timeline'
import Home from '@/components/home/Home'
import Location from '@/components/location/Location'
import Situation from '@/components/situation/Situation'
import Moment from '@/components/moment/Moment'
import Done from '@/components/done/Done'

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
      path: '/done',
      name: 'Done',
      component: Done
    }
  ]
})
