Object.defineProperty() //有三个参数， 第一个是要挂在哪个对象下面， 第二个是属性名或变量名， 第三个是一个对象， 里面
//     是配置权限
Object.defineProperty(window, variable, {
  //没有getter,get是undefined,没有setter,set是undefined
  get: function () {
    return value
  }, //在读取属性时调用的函数。默认值为undefined。
  set: function (anotherVariable) { //在给属性赋值时调用的函数。默认值为undefined。anotherVariable是指给属性赋值
    //   时的值
    console.log(`anotherVariable:${anotherVariable};value:${value}`);
    if (anotherVariable !== value) { //这里使用了闭包，value在这里使用，一直保存在内存中,没有被销毁，然后每
      //次给属性赋值时会让传过来的值与value比较，用的是!==，如果是相等则表示第
      //一次赋值，不相等则表示第二次赋值并报错
      console.error(`${variable} is already assignmented.`);
    } else {
      return value; //第一次赋值则直接赋值
    }
  },
  configurable: false, // 表示能否通过delete删除属性从而重新定义属性，能否修改属性的特性，或者能否把属性修改为数据属
  //性.默认值为true。
  enumerable: false,
  //表示能否通过for - in循环返回属性。 默认值为true.
})