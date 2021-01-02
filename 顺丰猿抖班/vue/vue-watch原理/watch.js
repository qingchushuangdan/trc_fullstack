//能独立监听某个数据的变化
//提供可执行函数的场所
class watcher {
  constructor(opts) {
    this.$data = this.getBaseType(opts.data) === 'Object' ? opts.data : {}
    this.$watch = this.getBaseType(opts.watch) === 'Object' ? opts.watch : {}
    for (let key in opts.data) {
      this.setData(key)
    }
  }
  getBaseType(target) {
    //Object.prototype.toString可用于判断所有类型，返回字符串 '[object Object]'
    let typeStr = Object.prototype.toString.call(target)
    return typeStr.slice(8, -1)
  }
  setData(_key) {
    //Object.defineProperty(this) 把上下文指向当前的this.$data 所以可以直接写vm.a
    Object.defineProperty(this, _key, {
      get: function () {
        console.log(135);
        return this.$data[_key]
      },
      set: function (newVal) {
        const oldVal = this.$data[_key]
        if (newVal == oldVal) {
          return newVal
        }
        this.$data[_key] = newVal
        //调用opts里面的watch里面的函数  
        //多个&&就执行最后一个并且
        this.$watch[_key] && this.getBaseType(this.$watch[_key]) === 'Function' &&
          (this.$watch[_key].call(this, newVal, oldVal) //保证this指向的是watcher
          )
      }
    })
  }

}

let vm = new watcher({
  data: {
    a: 0,
    b: 'hello'
  },
  watch: {
    a: function (newVal, oldVal) {
      console.log(newVal, oldVal);
    }
  }
})

// setTimeout(() => {
//   vm.a=1
// }, 1000)
console.log(vm.$data);
console.log(vm.$data.a);
console.log(vm.a);
console.log(vm);