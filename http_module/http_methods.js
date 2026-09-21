import http from 'http';
import fs from 'fs';

const data = fs.readFileSync("config.json", "utf8");

const server = http.createServer((req, res) => {
    console.log("Hello World!");
    //res.statusCode = 200;  
    //res.setHeader('Content-Type', 'text/plain');
    // res.writeHead(200, {
    //     "Content-Type": "text/plain", "custom-header": "Hello ECE"
    // });
    // res.end("Welcome to Server");
    res.writeHead(200, {
        "Content-Type": "application/json" 
    });
    console.log(req.url);
    if (req.url === "/config") {
        res.end(data);
    }
    else {
        res.end("Invalid URL");
    }
})

server.listen(3000, "127.0.0.1", () => {
    console.log("Server is running ...");
})
