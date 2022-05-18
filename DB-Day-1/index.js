const express = require('express');

const mysql = require('mysql2');

var app = express();

app.use(express.json());

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Tuya@1978",
    database: 'employees',
    multipleStatements: true,
});

connection.connect((err) => {
    if (!err) console.log("Database connected successfully");
    else
        console.log(
            "Database connection failed" + JSON.stringly(err, undefined, 2)
        );
});

app.get("/employees/:id", (req, res) => {
    connection.query(
        "select * from employees where emp_no =?",
        [req.params.id],
        (err, rows, fields) => {
            if (!err) {
                res.send(rows);
            } else {
                console.log(err);
            }
        }
    );
});

app.post("/employees", (req, res) => {
    const employee = req.body;
    console.log(employee);
    const empNo = employee.emp_no;
    const birthDate = employee.birth_date;
    const firstName = employee.first_name;
    const lastName = employee.last_name;
    const gender = employee.gender;
    const hireDate = employee.hire_date;

    connection.query(
        `insert into employees (emp_no, birth_date,
        first_name, last_name, gender, hire_date) values (?, ?, ?, ?, ?, ?)`,
        [empNo, birthDate, firstName, lastName, gender, hireDate],
        (err, rows, fields) => {
            if (!err) {
                res.send("i have created new user");

            } else {
                console.log(err);
            }
        }
    );
});

app.put("/employees", (req, res) => {
    const employee = req.body;
    console.log(employee.emp_no);
    connection.query(
        `insert into employees (emp_no, birth_date,
        first_name, last_name, gender, hire_date) values (?, ?, ?, ?, ?, ?)`
    );
    res.send("got the request");
});


app.listen(3000, () =>
    console.log("Express server started at port no: " + 3000)
); 
