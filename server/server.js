const express = require('express');
const app = express();
let PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(express.static('server/public'));

// Global variable that will contain all of the
// calculation objects:
let calculations = [];
let recentResult;

function calculateResult(object){
    if(object.operator === '+'){
recentResult = `${object.numOne} + ${object.numTwo} = ${object.numOne + object.numTwo}`
    } else if (object.operator === '-'){
      recentResult = `${object.numOne} + ${object.numTwo} = ${object.numOne - object.numTwo}`
    } else if  (object.operator === '*'){
      recentResult = `${object.numOne} + ${object.numTwo} = ${object.numOne * object.numTwo}`
  } else if (object.operator === '/'){
    recentResult = `${object.numOne} + ${object.numTwo} = ${object.numOne / object.numTwo}`
}
console.log('Recent result: ', recentResult);
calculations.push(recentResult);

  }


// Here's a wonderful place to make some routes:

// GET /calculations

// POST /calculations
app.post('/calculations', (req, res) => {
  console.log('POST /calculations received a request!');
  console.log('req.body: ', req.body);
  let newEquationObject = req.body;
  calculateResult(newEquationObject);
  console.log('Recent result: ', recentResult);
  res.sendStatus(201)
})

app.get('/calculations', (req, res) => {
  console.log('GET request received by client. Sending response...');
  console.log('Sending most recent calculation to client: ', recentResult);
  res.send(recentResult)
})

// PLEASE DO NOT MODIFY ANY CODE BELOW THESE BEARS:
// 🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸

// Makes it so you don't have to kill the server
// on 5000 in order to run the tests:
if (process.env.NODE_ENV === 'test') {
  PORT = 5001;
}

// This starts the server...but also stores it in a variable.
// This is weird. We have to do it for testing reasons. There
// is absolutely no need for you to reason about this.
const server = app.listen(PORT, () => {
  console.log('server running on: ', PORT);
});

// server.setTimeout(500)

// This is more weird "for testing reasons" code. There is
// absolutely no need for you to reason about this.
app.closeServer = () => {
  server.close();
}

app.setCalculations = (calculationsToSet) => {
  calculations = calculationsToSet;
}

module.exports = app;
