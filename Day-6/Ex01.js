const os = require('os')
// console.log(os); 



var http = require("http");
var fs = require("fs");
var port = 3000;

http
    .createServer((request, response) => {
        console.log(os.arch());
        console.log(os.platform());



        response.write("<h1>Hello World</h1>");
        response.end();
    }).listen(port);