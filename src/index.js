const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here

app.get("/", (req, res) => {
    res.send("Hello World!!")
})

/*----------------------ADDITION----------------------------*/

app.post("/add", (req, res) => {
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    let sum = num1 + num2;

    let status = "";

    if (num1 < -1000000 || num2 < -1000000 || sum < -1000000) {
        status = "Failure";
        message = "Underflow"
    }
    else if (num1 > 1000000 || num2 > 1000000 || sum > 1000000) {
        status = "Failure";
        message = "Overflow"
    }
    else if (typeof (num1) !== "number" || typeof (num2) !== "number") {
        status = "Error";
        message = "Invalid data types";
    }
    else {
        status = "Success";
        message = "The sum of given two numbers"
    }

    res.send(`Status: ${status}, 
    Message: ${message},
    Result: ${sum}`)
})

/*----------------------SUBSTRACTION----------------------------*/

app.post("/sub", (req, res) => {

    let num1 = req.body.num1;
    let num2 = req.body.num2;
    let sub = num1 - num2;

    let status = "";

    if (num1 < -1000000 || num2 < -1000000 || sub < -1000000) {
        status = "Failure";
        message = "Underflow"
    }
    else if (num1 > 1000000 || num2 > 1000000 || sub > 1000000) {
        status = "Failure";
        message = "Overflow"
    }
    else if (typeof (num1) !== "number" || typeof (num2) !== "number") {
        status = "Error";
        message = "Invalid data types";
    }
    else {
        status = "Success";
        message = "The difference of given two numbers"
    }

    res.send(`Status: ${status}, 
    Message: ${message},
    Result: ${sub}`)
})

/*----------------------MULTIPLICATION----------------------------*/

app.post("/multiply", (req, res) => {

    let num1 = req.body.num1;
    let num2 = req.body.num2;
    let mult = num1 * num2;

    let status = "";

    if (num1 < -1000000 || num2 < -1000000 || mult < -1000000) {
        status = "Failure";
        message = "Underflow"
    }
    else if (num1 > 1000000 || num2 > 1000000 || mult > 1000000) {
        status = "Failure";
        message = "Overflow"
    }
    else if (typeof (num1) !== "number" || typeof (num2) !== "number") {
        status = "Error";
        message = "Invalid data types";
    }
    else {
        status = "Success";
        message = "The product of given numbers"
    }

    res.send(`Status: ${status}, 
    Message: ${message},
    Result: ${mult}`)
})

/*----------------------DIVISION----------------------------*/

app.post("/divide", (req, res) => {

    let status = "";

    let num1 = req.body.num1;
    let num2 = req.body.num2;
    let div = num1 / num2;

    if (num2 == 0) {
        status = "Error";
        message = "Cannot divide by zero"
    }
    else if (num1 < -1000000 || num2 < -1000000 || div < -1000000) {
        status = "Failure";
        message = "Underflow"
    }
    else if (num1 > 1000000 || num2 > 1000000 || div > 1000000) {
        status = "Failure";
        message = "Overflow"
    }
    else if (typeof (num1) !== "number" || typeof (num2) !== "number") {
        status = "Error";
        message = "Invalid data types";
    }
    else {
        status = "Success";
        message = "The division of given numbers"
    }

    res.send(`Status: ${status}, 
    Message: ${message},
    Result: ${div}`)
})

/*--------------------------------------------------*/

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;