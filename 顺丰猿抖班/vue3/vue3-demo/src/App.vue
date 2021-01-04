<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <h1>{{state.count}} * 2 = {{double}}</h1>
  <h2>{{num}}</h2>
  <button @click="add">累加</button>
  <ul>
    <Fragment :data="[5, 3, 4, 1, 8, 9, 2]" />
  </ul> -->
  <!-- <TeleportDemo/> -->
  <!-- <Suspense>
    <template #default>
      <AsyncComponent :timeout="3000" />
    </template>
    <template #fallback>
      <Loading />
    </template>
  </Suspense> -->
  <TodoList />

</template>

<script>
// composition api 1.reactive 2.computed 3.ref
import { reactive, computed, ref, onMounted } from 'vue' // 用这个api把想要的数据变成响应式的数据
// import Fragment from '@/components/fragment'
// import TeleportDemo from '@/components/teleport'
// import AsyncComponent from '@/components/AsyncComponent'
// import Loading from '@/components/loading'
import TodoList from '@/components/TodoList'
export default {
  setup() { //所有vue代码要生效的话，必须要写在setup里面，这是入口
    // const state = reactive({
    //   count: 1
    // })
    const { state, double } = useCounter(1)
    let num = ref(2) // 基础数据类型就用ref
    function add() {
      state.count ++
      num.value += 10 // num后面必须要带有value
      // console.log(state.count);
    }
    // const double = computed(() => state.count * 2) // 箭头函数直接return回来
    onMounted(() => {
      console.log('onMounted');
    })
    return {state, add, double, num} // 每一个函数和对象都得return回来
  },
  components: {
    // Fragment,
    // TeleportDemo
    // AsyncComponent,
    // Loading
    TodoList
    
  }
}
function useCounter (count) { //把某一功能单独拎出来写成一个函数
  const state = reactive({
    count
  })
  const double = computed(() => state.count * 2)
  return { state, double }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
