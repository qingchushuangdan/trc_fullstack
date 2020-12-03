import Vue from 'vue'
import VueRouter from 'vue-router'
import Goods from '@/views/goods/Goods'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Goods',
    component: Goods
  },
  {
    path: '/comment',
    name: 'Comment',
    component: () => import('@/views/comment/Comment')
  },
  {
    path: '/seller',
    name: 'Seller',
    component: () => import('@/views/seller/Seller') // 路由的按需加载，可以减少一些页面加载的时间
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
