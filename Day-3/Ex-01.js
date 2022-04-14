function FindMax(a, b, c) {

    if (a < b && a < c) {
        return c;
    } else if (a < b && c < b) {
        return b
    } else if (a > b && b > c) {
        return a
    }

};

console.log(FindMax(4, 5, 3))
console.log(FindMax(4, 5, 4))
console.log(FindMax(4, 4, 4))
console.log(FindMax(-1, -2, -3))



