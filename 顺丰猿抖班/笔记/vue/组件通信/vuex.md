# vuex介绍
采用集中式存储管理应用的所有组件的状态，vuex解决了多个视图依赖于同一状态，来自不同视图的行为需要变更同一状态的问题，聚焦于数据的更新，而不是数据再组件之间的传递上

# vuex各个模块
1. state: 用于数据的存储，时store中的唯一数据源
2. getters: 如vue中的计算属性一样，基于state数据的二次包装，常用于数据的筛选和多个数据的相关性计算
3. mutations: 类似函数，改变state数据的唯一途径，且不能用于处理异步事件
4. actions: 类似于mutation，用于提交mutation来改变状态，而不是直接变更状态，可以包含任意异步操作
5. modules: 类似于命名空间，用于各项目中将各个模块的状态分开和操作，便于维护

# vuex实例

## first.vue
<button @click='handClick'>改变store数据</button>
methods: {
    handClick() {
        this.$store.commit('changeMsgA', 'first组件改变的msgA数据')
    }
}

## second.vue
<p>second.vue组件获取的store数据{{$store.state.magA}}</p>

## store.js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        magA: ''
    },
    mutations: {
        changeMsgA(state, val) {
            state.msgA = val
        }
    }
})