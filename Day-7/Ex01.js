var http = require("http");
const EventEmitter = require('events')
var port = 3000;
const eventEmitter = new EventEmitter()

http
    .createServer((request, response) => {
        eventEmitter.emit('start')
        console.log();
        response.write("<h1>Hello World</h1>");
        response.end();
    }).listen(port);




eventEmitter.on('start', () => {
    console.log('started')
})

