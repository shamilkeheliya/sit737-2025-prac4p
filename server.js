const express = require('express');
const winston = require('winston');

const app = express();

app.get('/add', (req, res) => {

    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Invalid input. Please provide valid numbers.' });
    }

    try{
        let answer = num1 + num2;

        res.status(200).json({ 'operation': 'Addition', 'num1': num1, 'num2': num2, 'answer': answer });
    }catch(err){
        res.status(400).json({ error: 'Something went wrong!' });
    }  
});

app.get('/subtract', (req, res) => {

    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Invalid input. Please provide valid numbers.' });
    }

    try{
        let answer = num1 - num2;

        res.status(200).json({ 'operation': 'Subtraction', 'num1': num1, 'num2': num2, 'answer': answer });
    }catch(err){
        res.status(400).json({ error: 'Something went wrong!' });
    }
});

app.get('/multiply', (req, res) => {

    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Invalid input. Please provide valid numbers.' });
    }

    try{
        let answer = num1 * num2;

        res.status(200).json({ 'operation': 'Multiplication', 'num1': num1, 'num2': num2, 'answer': answer });
    }catch(err){
        res.status(400).json({ error: 'Something went wrong!' });
    }
});

app.get('/divide', (req, res) => {

    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Invalid input. Please provide valid numbers.' });
    }

    if (num2 === 0) {
        return res.status(400).json({ error: 'Cannot divide by zero' });
    }

    try{
        let answer = num1 / num2;

        res.status(200).json({ 'operation': 'Division', 'num1': num1, 'num2': num2, 'answer': answer });
    }catch(err){
        res.status(400).json({ error: 'Something went wrong!' });
    }
});

var server = app.listen(3000, () => {
    console.log('Server is listening on port => ', server.address().port)
});
