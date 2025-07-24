const display= document.getElementById("input") //selects input element



function addToDisplay(value){
    display.value += value
}

//numbers
const action= document.querySelectorAll("#num-btn") //selects all buttons except = and C

action.forEach( function(btn){
    btn.addEventListener('click' , number )  //loop to loop over all buttons and assign them an eventlistener or execute a function defined here
})


function number(){
            const value= event.target.innerHTML; // go to the target button reads it html content and place it in value variable to display it in input
            addToDisplay(value)
}

//evaluation

const evaluation = document.getElementById("eval-btn") // selects

evaluation.addEventListener('click' , evaluate ) //add eventlistener

function evaluate(){
    if (display.value==0){
    display.value="can't do :)"  //condition for not solving 0
}
    display.value = eval(display.value) // evalution function
 
}


//clear screen
const clear= document.getElementById("clr-btn") // selects

clear.addEventListener('click', clearscreen); //adds eventlistener

function clearscreen(){
    display.value=''  // clears the input
}
