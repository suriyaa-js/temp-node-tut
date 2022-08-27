const http = require('http')

const server=http.createServer((req,res)=>{
    //console.log(req);
    if(req.url === '/'){
    res.end('Hello World Home page');
    return;
    }
    if(req.url === '/about'){
        res.end('About Page');
        return;
    }
    res.end(`<h1>Oops!!</h1>
    <p>we can't find the page u looking for </p>
    <a href='/'>Click Me</a>
    `)
   
})

server.listen(5000);
