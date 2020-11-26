import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import home1 from '../views/home1'
import home2 from '../views/home2'
import Detail from '@/views/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/',
          component: home1
        },
        {
          path: 'home1',
          component: home1
        },
        {
          path: 'home2',
          component: home2
        }
      ]
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      beforeEnter: (to, from, next) => {
        console.log(to);
        console.log(from);
        next()
      }
    },
    {
      path: '/detail:id',
      name: 'Detail',
      component: Detail,
      // redirect: '/login',
      // alias: '/hello'
    }
  ]
})
