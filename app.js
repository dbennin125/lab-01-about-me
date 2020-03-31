import isCool from './isCool.js';

const myButton = document.getElementById('button'); //reference from DOM
const results = document.getElementById('input-results'); //from DOM as well

//set up the state and variables

function questions() {
    let answers = 0;
    let blah = ''; //not defined but will be soon
    
    alert('Ok to proceed?'); //my alert

    const goAhead = confirm('You really want to do this?');
    if (goAhead === false) {
        return; //Just like break ends the cycle.
    }

    const firstName = prompt('Given first name?');
    blah = firstName;//setting up first name and next to last name
    
    const lastName = prompt('So last name then?');
    blah = blah + '' + lastName; //setting up first name + last name

    const yesNo = prompt('Do you like margaritas (Yes/No)?');//my yes/no prompt
    if (isCool(yesNo) === true) {
        answers++; //uncertain on this part...had to look up code
    }
    let response = 'Hey you are' + blah; //responding to the first and last name

    if (answers >= 1) {
        response += 'And you like margaritas!'; //responding to the yes/no
    } else {
        response += 'AND you need to get a margarita.'; //you should get the margarita
    
    }

    results.textContent = response;
}

myButton.addEventListener('click', questions);

