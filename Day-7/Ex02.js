var https = require("https");

const fs = require("fs")
const EventEmitter = require("events");
var port = 3001;
const eventEmitter = new EventEmitter();

https
    .get("https://ghibliapi.herokuapp.com/films", (response) => {
        let data = [];
        response.on("data", (chunk) => {
            data.push(chunk);
        });
        response.on("end", () => {
            const films = JSON.parse(Buffer.concat(data).toString());
            console.log(films);

            fs.writeFile("films.json", JSON.stringify(films), (err) => {
                if (err) {
                    throw err;
                } else {
                    console.log("Successful")
                }
            });
        });
    }).on("error", (err) => {
        console.log("Error: " + err.message)
    });

https
    .createServer((request, response) => {

        if (request.url === '/films') {
            eventEmitter.emit('films')
            response.wrtiteHead(200, { "Content-Type": "text/html" });
            response.write('');
            response.end()
        }
        response.end();

    }).listen(3001);


eventEmitter.on('films', () => {

    console.log('working')
})

