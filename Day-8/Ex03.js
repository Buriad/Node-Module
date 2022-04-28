const request = require('request');

function printFilms(str) {
    request('https://ghibliapi.herokuapp.com/films',
        function (error, response, body) {
            console.log(str);
        }
    );
}


module.exports = printFilms; 