import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Timeline from '@/components/timeline/Timeline'
import Home from '@/components/home/Home'

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
    }
  ]
})
