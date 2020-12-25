function a() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('aaaa');
      resolve('ok')
      // reject('err')
    }, 1000)
  })
}


function b() {
  setTimeout(() => {
    console.log('bbbb');
  })
}
a().then(() => {
  console.log(res);
})
// a().catch(b)
