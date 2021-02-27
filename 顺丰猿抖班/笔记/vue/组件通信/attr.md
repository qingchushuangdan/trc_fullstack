# 隔代组件通信方式
1. 只能props一级级信息传递，不能跨越
2. eventBus, 多人合作时，代码维护性能较低
3. vuex进行数据管理，多个组件共享状态比较少，项目较小，大材小用

# inheritAttrs
默认情况下，子组件无法获取props中未定义饿值，通过inheritAttrs=true禁止这种默认行为，再配合$attrs获取到父作用域中所有的属性

# 父组件
<Child :name='name' :age='age' @event1='goEvent1' @event2='goEvent2>
methods: {
    goEvent1(val) {}
    goEvent2(value) {}
}

# 子组件
<grand-son v-bind='$attrs' v-on='$listeners'/>
// 通过$listeners将父作用域中的v-on事件监听，传入grandson，使得grandson可以获取到app中的事件
props: {
    name: String
}
inheritAttrs: false  // 可以关闭自动挂载到组件根元素上的没有在props声明的属性
methods: {
    xxx() { this.$emit('event1', '传输的数据') }
}

# 孙子组件
props: {
    age: String
}
methods: {
    xxx() { this.$emit('event2), '要传输的数据' }
}