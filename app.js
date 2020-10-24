const http = require('http');
const app = http.createServer();
app.on('request',(req,res) =>{
    res.end('<h2>hello</h2>')
});
app.listen(3000);
console.log('网站服务器启成功');