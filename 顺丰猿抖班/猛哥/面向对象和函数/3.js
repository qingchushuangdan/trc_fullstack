const fs = require('fs')

fs.readFile('./2.js', 'utf8', (err, con) => {
  console.log(con);
})
let arr = [1, 2, 3]
arr.forEach((item) => {
  console.log(item);
})
// callback promise async+ await
function readFile(cb) {
  // 补全代码
  setTimeout(() => {
    try {
      cb(null, 'hello world')
    } catch(err) {
      cb('err', null)
    }
  }, 2000)
}
readFile((c) => {
  console.log(c); // 2s 'hello world'
})