const express = require('express');

const { body, validationResult } = require("express-validator");

const app = express();

app.use(express.json());

app.use(express.static('public'));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("view options ", { layout: false });

app.get('/', function (req, res) {
    res.render('index');

});

app.get('/404', function (req, res) {
    res.render('404', { message: 'oopsie' });
});

app.get("/js", function (req, res) {
    var data = {
        name: "John",
        hobbies: ["playing football", "playing chess", "cycling"],
    };
    res.render("javascript", { data: data });
});

app.get("/pie", function (req, res) {
    var data = [
        {
            name: "Cinnamon rolls",
            url: "/photo1.jpeg"
        },
        {
            name: "Donuts",
            url: "/photo2.jpeg"
        },
        {
            name: "Pie",
            url: "/photo3.jpeg"
        }
    ]
    res.render("pies", { data: data });
});

// app.post(
//     "/register",
//     body("e-mail").isEmail(),
//     body("phone").isLength({ min: 6, max: 8 }),
//     (req, res) => {
//         const errors = validationResult(req);
//         if (errors.isEmpty()) {
//             return res.json("My registration");
//         } else {
//             return res.status(400).json({ errors: errors.array() })

//         };

app.listen(3000)