// js是单线程语言
function a() {
    setTimeout(() => {
       console.log('蜗牛'); 
    }, 1000)
    
}
function b() {
    console.log('酒神');
}
function c() {
    console.log('婷婷');
}
a()
b()
c()