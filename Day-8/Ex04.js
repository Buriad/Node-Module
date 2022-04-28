const printFilms = require("./Ex03");

async function printAllAsync() {
    await printFilms("A", () => { });
    await printFilms("B", () => { });
    await printFilms("C", () => { });

}

printAllAsync(); 