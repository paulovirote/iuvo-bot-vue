import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Timeline from '@/components/timeline/Timeline'
import Home from '@/components/home/Home'
import Location from '@/components/location/Location'
import Situation from '@/components/situation/Situation'
import Moment from '@/components/moment/Moment'
import Done from '@/components/done/Done'
import SeeMore from '@/components/more/SeeMore'
import Help from '@/components/help/Help'
import SignIn from '@/components/signIn/SignIn'
import SignUp from '@/components/signUp/SignUp'

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
    },
    {
      path: '/seeMore',
      name: 'SeeMore',
      component: SeeMore
    },
    {
      path: '/help',
      name: 'Help',
      component: Help
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
    }
  ]
})
