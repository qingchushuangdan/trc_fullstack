// console.log('start require');
// require('./lib.js')
// console.log('end');

// let lib = require('./lib.js')
// console.log(lib);

// lib.name = '蜗牛'

// export到处的应用跟index

// 获取进程的标准输入
let count = 0
Process.stdin.on('data', e => {
    const playerAction = e.toString().trim()
    const result = game(playerAction)
    console.log(result);
    if (result == -1) {
        count ++
    }
    if (count == 3) {
        console.log('你太厉害了，我不跟你玩了');
        process.exit()
    }
})