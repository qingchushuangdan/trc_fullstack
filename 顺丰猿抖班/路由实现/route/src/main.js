import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
//Vue.use() 的一个原则是use的对象必须具备install这个方法

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
