import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import util from './assets/js/util'

import 'amfe-flexible'
import { Swipe, SwipeItem, Toast, Icon, Field, Uploader, Picker, ActionSheet, Lazyload } from 'vant';
import 'vant/lib/index.css';



Vue.use(Swipe).use(SwipeItem).use(Toast).use(axios).use(Icon).use(Field).use(Uploader).use(Picker).use(ActionSheet).use(Lazyload);

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$util = util

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
