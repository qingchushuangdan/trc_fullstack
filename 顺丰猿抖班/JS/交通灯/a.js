const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

fs.readFile('./index.html', 'utf8', (err, file) => {
    console.log(file);
})

// 包装一层 promise

let p3 = (url) => new Promise((resolve, reject) => {
    fs.readFile(url, 'utf8', (err, file) => {
        if(err) {
            reject()
        } else {
            resolve(file)
        }
    })
})
p3('./index.html')
.then((file) => {
    console.log('file', file);
})
p3('./a.js').then(f => console.log(f))