function getConstent() {
  return 1
}
async function getAsyncConstant() {
  return 1
}
async function getPromise() {
  return new Promise((reslove, reject) => {
    reslove(1)
  })
}

async function test() {
  let a = 2
  let c = 1
  await getConstent()
  let d = 3
  await getPromise()
  let e = 4
  await getAsyncConstant()
  return 2
}
test() // test()执行的时候，我们拿到的结果分别是什么 v
console.log(test());
// -----------------------------------------------
function getConstent() {
  return 1
}

async function getAsyncConstent() {
  return 1
}