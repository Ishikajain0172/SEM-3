import http from 'http';

const homePage = fs.readFileSync("home.html", "utf8");
const server = http.createServer((req, res) => {
    console.log("homepage not found")
    if(req.url === "/") {
        res.end(homePage.replace("{{CONTENT}}", "Hello from Home Page"));
    }
    else if(req.url === "/about") {
        res.end("About Page");
        //http://127.0.0.1:3000/about
    }
    else if(req.url === "/contact") {
        res.end("Contact Page");
    }
})

server.listen(3000, "127.0.0.1", () => {
    console.log("Server is running ...");
})