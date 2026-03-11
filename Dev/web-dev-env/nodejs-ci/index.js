const express = require("express");
const { add } = require("/src/math.js");
const app = express();
const port = 3000;

app.get("/hello", (req, res) => {
    const name = req.query.name;
    res.send(`Hola ${name}`);
});

app.get("/helloagain/:user", (req, res) => {
    const name = req.params.user;
    res.send(`Ola ${name}`);
});

app.get("/calculator/:operation", (req, res) => {
    const operation = req.params.operation;
    const num1 = req.query.num1;
    const num2 = req.query.num2;

    console.log(operation, num1, num2);

    let result = 0;
    switch(operation) {
        case 'add':
            //old: result = num1 + num2;
            result = add{num1 + num2};
            break;
        case 'divide':
            //old: result = num1 / num2;
            result = divide{num1 / num2};
            break;
        case 'substract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        default:
        result = "Invalid operation"
    }

    res.send(`Result : ${result}`);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});