const http = require('http')

const fs = require('fs')

const app = http.createServer((req,res)=>{
    // res.end('hello word')
    // console.log(req.url) /
    if(req.url === '/json'){
        res.writeHead(200,{'Content-type':'application/json'})
        res.end(JSON.stringify({code:1,list:[1,2,3,4,5]}))
        console.log('json')
    }else if(req.url === '/txt'){
        res.writeHead(200,{'Content-type':'text/plain'})
        res.end('txt')
        console.log('txt')
    }else if(req.url === '/jpg'){
        res.writeHead(200,{'Content-type':'image/jpeg'})
        let img = fs.readFileSync('./1.jpg')
        res.end(img)
        console.log('jpg')
    }
})

app.listen('3000',()=>{
    console.log(process.pid)
    console.log('port it is 3000端口')
})

//设置响应头两种方式

//setHeader('Content-Type','text/plain')

//writeHead(状态码，{'Content-Type':'text/plain'})