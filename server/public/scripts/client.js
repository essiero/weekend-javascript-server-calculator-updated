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

function makeCalculateObject(){
    let numOne = document.getElementById('numOne').value;
    let numTwo = document.getElementById('numTwo').value;
    // I don't think this 👇 is going to work since i have multiple buttons
    let equation = `{
        numOne: ${numOne},
        numTwo: ${numTwo}
    }`
    console.log('Numbers: ', equation)
}




function onReady(){
if(verbose)console.log('hello from client.js!!');
}

onReady();


