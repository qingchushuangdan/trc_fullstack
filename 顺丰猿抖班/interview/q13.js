var a = [0]
if ([0]) {
  console.log(a == true);
} else {
  console.log('hello');
}
[0] == true
[0] == 1
'0' == 1
0 == 1
// false

// [] == [] // 引用类型，比较的是地址，而内存地址是不一致的，所以是false