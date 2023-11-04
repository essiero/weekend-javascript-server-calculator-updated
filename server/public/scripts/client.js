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
    let numOne = document.getElementById('numOne').value;
    let numTwo = document.getElementById('numTwo').value;
    equation = `{
        numOne: ${numOne},
        numTwo: ${numTwo},
        operator: ${operator}
    }`
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
        //   getCalculations()
    })
}

function getCalculations() {
    axios ({
        method: 'GET',
        url: '/calculations'
    })
    .then(function(response) {
        console.log('GET response received from server! Response: ', response);
        let calculationsArray = response.data;
        console.log('Parsing data from response package. Items: ', calculationsArray);
        // formats and edits html with calculations
        renderDisplay(calculationsArray);
        // for errors
    }).catch(function(error){
        console.log(error);
        alert('Something bad happened! Check the console for more details.');
    })
}

function renderDisplay(calculationsArray){
    console.log('hello from the render function!', calculationsArray);
    document.getElementById('resultHistory').innerHTML = '';

}


function onReady(){
if(verbose)console.log('hello from client.js!!');
}

onReady();


