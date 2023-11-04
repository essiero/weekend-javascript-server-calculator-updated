# Weekend Javascript Server Calculator

## To-do's: index.html
- source in client.jss
- make CSS file and source it into html
- make form 
    - onsubmit="handleSubmit(event)" to prevent default page refresh?
    - make two input fields for numbers
        - input data needs to be stored in an object client-side
    - four operator buttons (+, -, *, /)
        - operator data needs to also be stored in an object client-side
        - onclick="handleSubmit(event)" to prevent default page refresh
    - equals button
        - basically, submit (though: do I need to press it in order to clear input fields?)
        - take data from inputs and operators and make an object out of them (makeCalculationObject())
        - send object to server to get calculated
    - a clear button
        - make clearInputs() to set input field values to empty string
- section for most recent results
- section for results history (unordered list)

## To-do's: client.js
- onReady() function to check that client.js is loading correctly
- makeCalculationObject() function to take data from input fields and operator and make an object out of them
- handleSubmit(event) function to preventDefault page refresh
- renderDisplay()

## To-do's: server.js
- establish server
        - const express = require('express');
        - const bodyParser = require('body-parser')
        - const app = express();
        - const PORT = 5000;
    - serve up static files (HTML, CSS, Client JS)
        - app.use(express.static('server/public'));
    - this must be added before GET & POST routes.
        - app.use(bodyParser.urlencoded({extended:true}))
    - activate listen 
        - app.listen(PORT, () => {
        console.log ('Server is running on port', PORT)
         })
    - teach server to read json
        - app.use(express.json());
- create empty array where calculate history results will be stored
- calculateEquation() function (maybe with numOne and numTwo parameters?) that:
    - takes in calculationObject from client
    - 
    - calculates equation
    - returns result of equation
    - makes a new object that tacks on a results property

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
