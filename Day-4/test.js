var http = require("http");
var fs = require("fs");

http.createServer((request, response) => {

    if (request.url === '/hello') {
        response.wrtiteHead(200, { "Content-Type": "text/html" });
        response.write('<h1>Hello Javkhlan<h1/>');
        response.end()
    }
    else if (request.url === '/bye') {
        response.writeHead(200, { "Content-Type": "application/json" });
        response.write(JSON.stringify(bye));
    } else {
        response.writeHead(404, { "Content-Type": "text/plain" })
        response.write("not Found");
        response.end();
    }

}).listen(3000);

console.log('Server is working');
