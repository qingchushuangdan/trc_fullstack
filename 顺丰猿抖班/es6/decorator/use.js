class Math {
  @log
  add(a, b) {
    return a + b;
  }
}

//name是装饰器修饰的方法名
function log(target, name, descriptor) {
  let oldValue = descriptor.value;
  descriptor.value = function (...args) {
    console.log(`Callong ${name}with`, args);
    return oldValue.apply(this,args)
  }
  return descriptor;
}

let math = new Math();
math.add(2,4)