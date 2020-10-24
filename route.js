const http = require('http')
const url = require('url')
const app = http.createServer()
app.on('request',(req,res) =>{
    const method = req.method.toLowerCase();
    const pathname = url.parse(req.url).pathname;
    res.writeHead(200,{
        'content-type':'text/html;charset=jdk'
    });
    if (method == 'get'){
        if (pathname == '/' || pathname == '/index'){
            res.end('欢迎来到首页')
        }else if(pathname == '/list'){
            res.end('欢迎来到列表页')
        }else {
            res.end('您访问的页面不存在')
        }
    }else if(method == 'post'){

    }
})
app.listen(3000);
console.log('服务器启动成功')