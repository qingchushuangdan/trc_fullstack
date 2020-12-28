let obj = {};
Object.defineProperty(obj, 'num', {
  value: 1,
  writable: true,//可更改 -数据描述符
  enumerable: true,//可枚举(循环)
  configurable: true, // -属性描述符
  //getter
  get: undefined,
  //setter
  set: undefined // - 存取描述符
})

console.log(obj);