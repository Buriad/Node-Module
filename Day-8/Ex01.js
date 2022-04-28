const printFilms = require("./app");

function printAll() {
    printFilms("A");
    printFilms("B");
    printFilms("C");
}

printAll();

function printAllCallback() {
    printFilms("A", () => {
        printFilms("B", () => {
            printFilms("C", () => {

            })
        })
    })
}

printAllCallback();

