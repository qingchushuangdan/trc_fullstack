// ------------------------------demo1
// let proxy = new Proxy({}, {
//   get: function(obj, prop) {
//     console.log('get操作');
//     return obj[prop]
//   },
//   set: function(obj, prop, value) {
//     console.log('set操作');
//     obj[prop] = value

//   }
// })
// let handler = {
//   has (target, key) {
//     if (key[0] === '_') {
//       return false
//     }
//     return key in target
//   }
// }
// proxy.time = 35
// console.log(proxy.time);


// let target = { _prop: 'foo', prop: 'bar' }
// let proxy = new Proxy(target, handler)
// console.log('_prop');

// ------------------------------demo2
// let target = function() {
//   return 'i am a target'
// }
// let handler = {
//   apply: function() {
//     return 'i am the proxy'
//   }
// }
// let p = new Proxy(target, handler)
// console.log(p());

// --------------------demo4
let target = {
  _bar: 'foo',
  _prop: 'bar',
  prop: 'baz'
}
let handler = {
  ownKeys (target) {
    return Reflect.ownKeys(target).filter(key => key[0] !== '_')
  }
}
let proxy = new Proxy(target, handler)
// console.log(proxy);
for (let key of Object.keys(proxy)) {
  console.log(target[key]);
}