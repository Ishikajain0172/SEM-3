import http from 'http';
import { readFile } from 'node:fs';

// creating a basic server using http module

const server = http.createServer((req, res) => {
    console.log("Hello World!");
    const order = {
        orderId: 10987,
        des: "Delhi",
        source: "Ghaziabad",
        username: "John Doe"
    }
   // res.statusCode = 200;
   // res.setHeader('Content-Type', 'application/json');
    res.writeHead(200, {
        "Content-Type": "application/json", "custom-header": "Hello ECE"
    }); // only in single thing instead of above two separately
    res.end(JSON.stringify(order));
})

server.listen(3000, "127.0.0.1", () => {
    console.log("Server is running ...");
})
//status code & meanings
// 200 - OK
// 201 - Created
// 401 - Unauthorized
// 402 - Payment Required
// 403 - Forbidden
// 404 - Not Found
// 500 - Internal Server Error
