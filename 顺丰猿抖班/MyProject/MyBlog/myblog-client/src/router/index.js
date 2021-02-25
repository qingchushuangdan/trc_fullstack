import Vue from 'vue'
import VueRouter from 'vue-router'
import StarLogin from '@/views/login/StarLogin'

Vue.use(VueRouter)

const routes = [
  {
    path: '/starLogin',
    name: 'starLogin',
    component: StarLogin,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/starRegister',
    name: 'starRegister',
    component: () => import('@/views/register/index'),
    meta: {
      title: '注册'
    }
  },
  {
    path: '/noteClass',
    name: 'noteClass',
    component: () => import('@/views/noteClass/index'),
    meta: {
      title: '笔记分类'
    }
  },
  {
    path: '/noteList',
    name: 'noteList',
    component: () => import('@/views/noteList/index'),
    meta: {
      title: '笔记列表'
    }
  },
  {
    path: '/noteDetail',
    name: 'noteDetail',
    component: () => import('@/views/noteDetail/index'),
    meta: {
      title: '笔记详情'
    }
  },
  {
    path: '/noteEdit',
    name: 'noteEdit',
    component: () => import('@/views/noteEdit/index'),
    meta: {
      title: '笔记编辑'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
