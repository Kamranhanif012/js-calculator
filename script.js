const display= document.getElementById('input')

function cleardis(){
    display.value='';
}


function addToDisplay(value){
    display.value += value
}

function toCalculate(){
        display.value= eval(display.value)
}