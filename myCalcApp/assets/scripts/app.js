let userInp;
let result = 0;
// Function to get user Input
function readUserInput(){
    return userInput.value;
}

outputResult(result,"");

//Hander for event listeners
function addFuncHandler(){
    userInp = Number(readUserInput());
    const curVal = result;
    result += userInp;
    outputResult(result,`${curVal} + ${userInp} = ${result}`); 
}

function subFuncHandler(){
    userInp = Number(readUserInput());
    const curVal = result;
    result -= userInp;
    outputResult(result,`${curVal} - ${userInp} = ${result}`);
}

function multiFuncHandler(){
    userInp = Number(readUserInput());
    const curVal = result;
    result *= userInp;
    outputResult(result,`${curVal} * ${userInp} = ${result}`);
}

function divFuncHandler(){
    userInp = Number(readUserInput());
    const curVal = result;
    result /= userInp;
    outputResult(result,`${curVal} / ${userInp} = ${result}`);
}

// Even Listener
addBtn.addEventListener('click', addFuncHandler);
subtractBtn.addEventListener('click', subFuncHandler);
multiplyBtn.addEventListener('click', multiFuncHandler);
divideBtn.addEventListener('click', divFuncHandler);