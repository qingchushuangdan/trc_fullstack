// async/await 的原理是什么？把下面的这段代码翻译成promise
function getJson() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(2);
      resolve(9999)
    }, 2000)
  })
}
// async function testAsync() { // async await = Promise.then
//   let data = await getJson()
//   console.log(3);
//   console.log(data);
// }
function testAsync() {
  return Promise.resolve().then(() => { // resolve 出来的值 会给到 then
    return getJson()
  }).then((res) => { // res 就是resolve出来的值 所以data就是9999
    let data = res
    console.log(3);
    console.log(data);
  })
}
testAsync()


// function a() {
//   return new Promise((resolve, reject))
// }