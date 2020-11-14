const fs = require('fs')
const { exec } = require('child_process')
const http = require('http')
// baidu.com/a
// baidu.com/b
// baidu.com/b?search=xxx
// baidu.com/b?search=xxx#xx
const server = http.createServer((req, res) => {
    // res.end('hello world')
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.js"></script>

    if (req.url === '/') {
        const files = [];
        fs.readdirSync('./')
            .forEach(url => {
                files.push(`<a href="${url}">${url}</a>`)
            })
        res.end(files.join('</br>'))
    }
    else {
        const exist = fs.existsSync(req.url)
        if (!exist) {
            res.statusCode = 404
            res.end('404')
            return
        }
        fs.readFile(req.url, (err, file) => {
            if (!err) {
                const path = require('path')
                const extname = path.extname('.' + req.url)
                const map = {
                    '.js': 'application/javascript;charset=utf-8',
                    '.md': 'text/plain'
                }
                res.setHeader('Content-Type', `${map[extname]}` )
                res.end(file)
            }
        })
    }
})
server.listen(8080, () => {
    const url = `http://127.0.0.1:8080`;
    if (process.platform === 'drawin') {
        exec(`open ${url}`)
    } else {
        exec(`start ${url}`)
    }
    // console.log();
})