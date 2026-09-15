const http = require('http');
const PORT = 3005;
const server = http.createServer((req , res)=>{
    console.log('Request recieved : ${req.method} ${req,url}');

    res.statusCode = 200;
    res.setHeader('Contest.Type','text/plain');
    res.setHeader('X-Custom-Header','My Custom Header');
    res.end('Hello , World\n');
});
server.listen(PORT , ()=>{
    console.log('Server running at http://localhost:${PORT}/)');
});