import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import VerifyCode from 'trc-verify-code'


Vue.config.productionTip = false
Vue.use(VerifyCode)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
