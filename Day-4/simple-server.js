var http = require("http");
var fs = require("fs");
var post = 3000;

http
    .createServer((request, response) => {
        response.writeHead(200, { "Content-Type": "application/pdf" });


        fs.readFile("content.pdf", (error, data) => {
            if (error) {
                throw error;
            } else {
                response.end(data);
            }
        });
    })
    .listen(port); 