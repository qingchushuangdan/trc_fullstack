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
      title: '分类'
    },
  },
  {
    path: '/noteList',
    name: 'noteList',
    component: () => import('@/views/noteList/index'),
    meta: {
      title: '列表'
    }
  },
  {
    path: '/noteDetail',
    name: 'noteDetail',
    component: () => import('@/views/noteDetail/index'),
    meta: {
      title: '详情'
    }
  },
  {
    path: '/noteEdit',
    name: 'noteEdit',
    component: () => import('@/views/noteEdit/index'),
    meta: {
      title: '文本编辑器'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
