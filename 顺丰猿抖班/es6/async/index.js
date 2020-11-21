function fetchData() {}  // 获取数据
// function fetch() {
//   return (
//     fetchData()
//     .then(() => {
//       return 'done'
//     })
//   )
// }


// async function fetch() {
//   await fetchData()
//   return 'done'
// }


// function fetch() {
//   try {
//     fetchData()
//     .then(result => {
//       const data = JSON.parse(result)
//     })
//     .catch(err => {
//       console.log(err);
//     })
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function fetch() { // async await 不能够捕捉错误的
//   try {
//     const data = JSON.parse(await fetchData())
//   } catch (error) {
//     console.log(error);
//   }
// }