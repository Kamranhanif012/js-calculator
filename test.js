const display= document.getElementById("input") //selects input element



function addToDisplay(value){
   const invalue= display.value += value
}





//numbers
const action= document.querySelectorAll("#num-btn") //selects all buttons except = and C

action.forEach( function(btn){
    btn.addEventListener('click' , number )  //loop to loop over all buttons and assign them an eventlistener or execute a function defined here
})


function number(event){
            const value= event.target.innerHTML; // go to the target button reads it html content and place it in value variable to display it in input
            addToDisplay(value)
}

//operators

const opaction= document.querySelectorAll("#op-btn") //selects all buttons except = and C

opaction.forEach( function(button){
    button.addEventListener('click' , opact )  //loop to loop over all buttons and assign them an eventlistener or execute a function defined here
})

let invalue=''

function opact(event){
            const value= event.target.innerHTML;// go to the target button reads it html content and place it in value variable to display it in input
            if (display.value !== '') {
        invalue += `${display.value} ${value} `;
            }
            console.log(invalue)
            addToDisplay(value)
            display.value=''

            
}

//evaluation

const evaluation = document.getElementById("eval-btn") // selects

evaluation.addEventListener('click' , evaluate ) //add eventlistener

function evaluate(){
    display.value= math.evaluate(`${invalue} ${display.value}`); // evalution function
    invalue=''
}


//clear screen
const clear= document.getElementById("clr-btn") // selects

clear.addEventListener('click', clearscreen); //adds eventlistener

function clearscreen(){
    display.value=''  // clears the input
}

// zero restriction

const zero = document.getElementById("zero-btn")

zero.addEventListener('click' , addzero)

function addzero(value){
   if(display.value=='null' || display.value==''){
    addToDisplay('')
   }
   else{
    const value= event.target.innerHTML;
    addToDisplay(value)
   }
}

// braces

const braces = document.getElementById("braces-btn")

braces.addEventListener('click' , toggleParenthesis )

let openCount = 0;
let closeCount = 0;

function toggleParenthesis() {
    if (openCount === closeCount || display.value.slice(-1) === '(') {
        display.value += '(';
        openCount++;
    } else if (openCount > closeCount) {
        display.value += ')';
        closeCount++;
    }
}