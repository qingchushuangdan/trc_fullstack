
// function a() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('aaaa');
//             resolve('成功')
//         }, 1000)
//     })

// }
// function b() {
//     console.log('bbbb');
// }

// a().then(b)

function timeout(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
        setTimeout(() => {
            console.log('你好');
            resolve()
        })
    })
}
// async声明该函数内部可能存在异步的情况
async function asyncPrint(value, ms) {
    await timeout(ms) // 阻塞后面的代码
    console.log(value);// 去到微任务队列
}
asyncPrint('hello world', 1000)