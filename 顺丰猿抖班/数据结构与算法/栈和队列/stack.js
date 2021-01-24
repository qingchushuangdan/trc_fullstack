// 给定一个只包含'(', ')', '{', '}', '[', ']'的字符串， 判断字符串是否生效

// ({[]}) // true
// (){}[] // true
// (]     // false
// ([)]   // false

// 123456 654321

// 题目中设计括号问题，很有可能跟栈有关

// '({[    ]})'

// map对象来维护左括号和右括号的对应关系
const  leftToRight = {
  "(": ")",
  "[": "]",
  "{": "}"
}
const isValid = function(s) {
  if (!s) {
    return true
  }
  // 初始化stack栈
  const stack = [] // [ ')' ]
  const len = s.length
  for (let i = 0; i < len; i++) {
    // 缓存单个字符
    const ch = s[i]
    if (ch === '(' || ch === '{' || ch === '[') stack.push(leftToRight[ch])
    else { // 如果不是左括号， 则必须是和栈顶的左括号相匹配的右括号
      if (!stack.length || stack.pop() !== ch) {
        return false
      }
    }
  }
  return !stack.length
}
console.log(isValid('({[})'));