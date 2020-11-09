function a() {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
        console.log('aaa');
        resolve('ok')
        }, 1000)
    })   
}

function b() {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
        console.log('bbb');
        resolve('ok')
        }, 1500)
    })   
}
function c() {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
        console.log('ccc');
        resolve('ok')
        }, 500)
    })   
}
function d() {
    console.log('ddd');
}
// Promise.all([a(), b(), c()]).then(d)//保证全部执行完才执行d
// Promise.race([a(), b(), c()]).then(d)//先执行完跑的最快的，然后执行d,后面两个就不管了
// a().then(b).then(c).finally(d) //不管请求成功还是失败，都得执行

