const verbose = true;

function handleSubmit(event){
    event.preventDefault();
}

let operator;

function plus(){
    operator = '+';
    console.log('You clicked plus!');
}

function minus(){
    operator = '-';
    if(verbose)console.log('You clicked minus!');
}

function multiply(){
    operator = '*';
    if(verbose)console.log('You clicked times!');
}

function divide(){
    operator = '/';
    if(verbose)console.log('You clicked divide!');
}

let equation; 

function makeCalculateObject(){
    let numOne = document.getElementById('numOne').valueAsNumber;
    let numTwo = document.getElementById('numTwo').valueAsNumber;
    // thank you Hannah for showing me .valueAsNumber!!!
    equation = {
        numOne: numOne,
        numTwo: numTwo,
        operator: operator
    }
    console.log('Numbers object: ', equation)


// need to define equation as a global variable/object?
axios({
    method: 'POST',
    url: '/calculations',
    data: equation
    })
    // triggers
    .then((response) => {
          console.log('Confirmed server received form submission.')
          // call info retrieval
          getResult()
    })
}

function getResult() {
    axios ({
        method: 'GET',
        url: '/calculations'
    })
    .then(function(response) {
        console.log('GET response received from server! Response: ', response);
        let recentResult = response.data;
        console.log('Parsing data from response package. Result: ', recentResult);
        // formats and edits html with calculation result
        renderResults(recentResult);
        // for errors
    }).catch(function(error){
        console.log(error);
        alert('Something bad happened! Check the console for more details.');
    })
}

function renderResults(object){
    console.log('hello from the render function! Here is our recent results object: ', object);
    document.getElementById('recent-result').textContent = object;
    axios({
        method: 'GET',
        url: '/calculationsHistory'
    })
    .then(function(response){
        let resultHistory = response.data;
        document.getElementById('result-history').innerHTML = ''
        // 💥💥💥 add loop to loop through resultHistory array and create <li>
        // for each object in the array 💥💥💥
        for (object of resultHistory){
        document.getElementById('result-history').innerHTML += `
        <li>${object}</li>`
        }
        
    })
}

// function renderResultsHistory(object){
//     console.log('Hello from the render results history! Here is our results history: ', object)

// }

function onReady(){
if(verbose)console.log('hello from client.js!!');
}

onReady();


