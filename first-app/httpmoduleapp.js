const http = require('http');

const server = http.createServer((req,res) =>{

    if(req.url ==='/'){
        res.write("Hello World");
        res.end();
    }

    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3]))
        res.end();
    }

}); // Normally we add a function with req, res

// server.on('connection',(socket) => { // This is very low level not usual MO
//     console.log("New connection...")
// });

server.listen(3000)

console.log("Listening on port 3000...")