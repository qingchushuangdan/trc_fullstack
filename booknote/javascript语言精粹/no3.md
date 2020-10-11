# 第三章 对象
- 3.1 对象字面量
    1. 一个对象字面量就是包围在一对花括号中的零或多个"名/值"对，用逗号分隔
        - var flight = {
            airline: "Oceanic",
            number: 815,
            depature: {
                IATA:"SYD",
                time:"2004-09-22 14:55,
                city:"Sydney"
            }
        };
- 3.2 检索
    1. 检索对象值采用[]后缀中括住一个字符串表达式的方式，通常用.表达式代替,如果不存在，则返回undefined值
        - stooge["first-name"]
          flight.depature.IATA

        - stooge["middle-name"]  //undefined
        - 尝试检索undefined值会导致TypeError异常
- 3.3 更新
    1. 对象中的值可以通过赋值语句来更新，如果属性名已经存在，那么属性的值将被替换，如果没有存在，那该属性将会被扩列。
- 3.4 引用
    1. 对象通过引用来传递。它们永远不会被拷贝
- 3.5 原型
    1. 每个对象可以从原型中继承属性。所有对象字面量创建的对象都连接到Object.prototype
    2. 创建一个新对象时，可以选择某个对象作为原型