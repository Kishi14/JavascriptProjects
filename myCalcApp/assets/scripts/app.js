// Variables and Constants
let userInp;
let result = 0;
const DEFAULT_VALUE = 5;
const ADD = "ADD";
const SUB = "SUBTRACT";
const MULT = "MULTIPLY";
const DIV = "DIVISION";

// Default setting
outputResult(result,"");

// Function to get user Input
function readUserInput(){
    let userEnteredVal = userInput.value;
    if(!userEnteredVal || isNaN(Number(userEnteredVal))){
        throw {message : "You have defined an invalid value, please enter a number"};
    }else{
        return userEnteredVal;
    }
}

//Handlers for event listeners
function operationHandler(operation){
    try{
        userInp = Number(readUserInput());
    }catch(err){
        console.log(err.message + ". So we have taken default value of 5.")
        userInp =  DEFAULT_VALUE;
    }
    
    const curVal = result;
    if(operation === ADD){
        result += userInp;
        outputResult(result,`${curVal} + ${userInp} = ${result}`);
    }else if(operation === SUB){
        result -= userInp;
        outputResult(result,`${curVal} - ${userInp} = ${result}`);    
    }else if(operation === MULT){
        result *= userInp;
        outputResult(result,`${curVal} * ${userInp} = ${result}`);
    }else{
        result /= userInp;
        outputResult(result,`${curVal} / ${userInp} = ${result}`);
    }
}
function addFuncHandler(){
    operationHandler(ADD);
}

function subFuncHandler(){
    operationHandler(SUB);
}

function multiFuncHandler(){
    operationHandler(MULT);
}

function divFuncHandler(){
    operationHandler(DIV);
}

// Event Listener
addBtn.addEventListener('click', addFuncHandler);
subtractBtn.addEventListener('click', subFuncHandler);
multiplyBtn.addEventListener('click', multiFuncHandler);
divideBtn.addEventListener('click', divFuncHandler);