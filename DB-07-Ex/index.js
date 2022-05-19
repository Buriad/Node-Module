const express = require("express");
const mysql = require("mysql2");

const app = express();

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Tuya@1978",
    database: 'employees',
    multipleStatements: true,
});

connection.connect((err) => {
    if (!err) {
        console.log("Database connected successfully");
    } else {
        console.log("error")
    }
});

app.get('/company', (req, res) => {
    const request = req.query;
    console.log(request);

    connection.query(
        `select count(*) as positionNumbers from employees where emp_no IN (select emp_no from titles where title = ?)`,
        [request.title],
        (err, rows, fields) => {
            if (!err) {
                res.send(rows);
            } else {
                console.log(err);
                res.send(err);
            }
        }
    );
});



app.get('/managers/salary', (req, res) => {
    const request = req.query;
    console.log(request);

    connection.query(
        `select * from dept_manager d left join salaries s on d.emp_no = s.emp_no;`,
        [request.salaries],
        (err, rows, fields) => {
            if (!err) {
                res.send(rows);
            } else {
                console.log(err);
                res.send(err);
            }
        }
    );
});

app.put("/departments", (req, res) => {
    connection.query("lock tables departmenrs read;");
    connection.query("select count(*) from departments;", (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
            res.send(err);
        }
    });
});

app.get("/dept_emp", (req, res) => {
    connection.query("select count(*) from dept_emp;", (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
            res.send(err);
        }
    });
});

app.get("/unlock", (req, res) => {
    connection.query("unlock tables;"),
        res.send("unlocked");

});

app.listen(3000, () => {

});

