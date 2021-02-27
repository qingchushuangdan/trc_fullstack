// Vue数据双向绑定原理：Vue内部通过Object.defineProperty方法属性拦截的方式，
// 把data对象里每个数据的读写转化成getter/setter,并添加响应的watcher,
// 当数据发生变化时，watch通知视图更新
let data = {
    name: 'hb',
    age: 20
}

observe(data)
let name = data.name
data.name = 'jl'

function observe(obj) {
    // 首先obj得是一个对象
    if (typeof obj !== 'object' || !obj) {
        return
    }
    // 对obj里面的每一项进行遍历
    Object.keys(obj).forEach(key => {
        defineReactive(obj, key, obj[key])
    })
}

function defineReactive(obj, key, val) {
    if (typeof val === 'object' && val !== null) {
        observe(val)
    }
    // 使用Object.defineProperty
    Object.defineProperty(obj, val, {
        get() {
            return val
        },
        set() {
            newVal = val
        }
    })
}