function printAllCallback() {
    printFilms("A", () => {
        printFilms("B", () => {
            printFilms("C", () => {

            })
        })
    })
}

printAllCallback();

