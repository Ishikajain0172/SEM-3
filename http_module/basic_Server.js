import http from 'http';

const server = http.createServer((req, res) => {
  console.log("Hello World");
  const order = {
    orderId: 123,
    description: "This is a sample order",
    amount: 100.50,
    status: "Pending"
  };
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(order));
});
const PORT = 3000;

server.listen(PORT,"127.0.0.1", () => {
    console.log(`Server running at http://127.0.0.1:${PORT}`);
});

//status code & meanings
// 200 - OK
// 201 - Created
// 401 - Unauthorized
// 402 - Payment Required
// 403 - Forbidden
// 404 - Not Found
// 500 - Internal Server Error
