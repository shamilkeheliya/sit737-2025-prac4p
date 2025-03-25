const express = require('express');
const winston = require('winston');

const app = express();

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'calculator-microservice' },
  transports: [
    new winston.transports.Console({ format: winston.format.simple() }),
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ],
});

app.get('/add', (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    logger.info(`Request received from IP: ${ip} - ${req.method} ${req.url}`);

    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        logger.error('Invalid input: Non-numeric values provided');
        return res.status(400).json({ error: 'Invalid input. Please provide valid numbers.' });
    }

    try{
        let answer = num1 + num2;
        
        logger.info(`Operation: Addition, Numbers: ${num1}, ${num2}, Result: ${answer}`);

        res.status(200).json({ 'operation': 'Addition', 'num1': num1, 'num2': num2, 'answer': answer });
    }catch(err){
        logger.error(err);
        res.status(400).json({ error: 'Something went wrong!' });
    }  
});

app.get('/subtract', (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    logger.info(`Request received from IP: ${ip} - ${req.method} ${req.url}`);

    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        logger.error('Invalid input: Non-numeric values provided');
        return res.status(400).json({ error: 'Invalid input. Please provide valid numbers.' });
    }

    try{
        let answer = num1 - num2;
        
        logger.info(`Operation: Subtraction, Numbers: ${num1}, ${num2}, Result: ${answer}`);

        res.status(200).json({ 'operation': 'Subtraction', 'num1': num1, 'num2': num2, 'answer': answer });
    }catch(err){
        logger.error(err);
        res.status(400).json({ error: 'Something went wrong!' });
    }
});

app.get('/multiply', (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    logger.info(`Request received from IP: ${ip} - ${req.method} ${req.url}`);

    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        logger.error('Invalid input: Non-numeric values provided');
        return res.status(400).json({ error: 'Invalid input. Please provide valid numbers.' });
    }

    try{
        let answer = num1 * num2;
        
        logger.info(`Operation: Multiplication, Numbers: ${num1}, ${num2}, Result: ${answer}`);

        res.status(200).json({ 'operation': 'Multiplication', 'num1': num1, 'num2': num2, 'answer': answer });
    }catch(err){
        logger.error(err);
        res.status(400).json({ error: 'Something went wrong!' });
    }
});

app.get('/divide', (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    logger.info(`Request received from IP: ${ip} - ${req.method} ${req.url}`);

    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        logger.error('Invalid input: Non-numeric values provided');
        return res.status(400).json({ error: 'Invalid input. Please provide valid numbers.' });
    }

    if (num2 === 0) {
        logger.error('Division by zero error');
        return res.status(400).json({ error: 'Cannot divide by zero' });
    }

    try{
        let answer = num1 / num2;
        
        logger.info(`Operation: Division, Numbers: ${num1}, ${num2}, Result: ${answer}`);

        res.status(200).json({ 'operation': 'Division', 'num1': num1, 'num2': num2, 'answer': answer });
    }catch(err){
        logger.error(err);
        res.status(400).json({ error: 'Something went wrong!' });
    }
});

var server = app.listen(3000, () => {
    console.log('Server is listening on port => ', server.address().port)
});
