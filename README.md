# Calculator Microservice

## How to Run?
1. Intall dependancies
```
npm install
```

2. Run service
```
npm start
```
The service will start on http://localhost:3000


3. Call to the Endpoints


## Endpoints

#### 1. Addition

```
http://localhost:3000/add?num1=23&num2=49
```
Response
```
{
    "operation": "Addition",
    "num1": 23,
    "num2": 49,
    "answer": 72
}
```

#### 2. Subtraction

```
http://localhost:3000/subtract?num1=23&num2=16
```
Response
```
{
    "operation": "Subtraction",
    "num1": 23,
    "num2": 16,
    "answer": 7
}
```

#### 3. Multiplication

```
http://localhost:3000/multiply?num1=3&num2=8
```
Response
```
{
    "operation": "Multiplication",
    "num1": 3,
    "num2": 8,
    "answer": 24
}
```

#### 4. Division

```
http://localhost:3000/divide?num1=20&num2=4
```
Response
```
{
    "operation": "Division",
    "num1": 20,
    "num2": 4,
    "answer": 5
}
```

## Technologies Used
- Node.js
- Express.js
- Winston (Logging)


## Logging
- Incoming requests (IP, method, and URL)
- Errors due to invalid inputs
- Calculation results

#### Logs are stored in:
- logs/error.log (Errors)
- logs/combined.log (All logs)

