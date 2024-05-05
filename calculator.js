
let onOperation = false;
let doneOperation = false;
let operationTag=document.getElementById('operation');
let resultTag=document.getElementById('result');

function addNumbers(x){
    if (doneOperation){
        operationTag.innerHTML="";
        resultTag.innerHTML = x;
        doneOperation = false;

    }else{
        if (operationTag.innerHTML=="" && resultTag.innerHTML == 0){
            resultTag.innerHTML = x;
        }else if(operationTag.innerHTML!="" && resultTag.innerHTML == 0){
            resultTag.innerHTML = x;
            
        }else if(onOperation){
            resultTag.innerHTML = x;
            onOperation = false;
            
        }else{
            resultTag.innerHTML =resultTag.innerHTML + x;
        }
    }
}


function plus(){
    operationTag.innerHTML= operationTag.innerHTML + resultTag.innerHTML + "+";
    onOperation = true;

}


function sub(){

    operationTag.innerHTML= operationTag.innerHTML + resultTag.innerHTML + "-";
    onOperation = true;

}

function multiplication(){

    operationTag.innerHTML= operationTag.innerHTML + resultTag.innerHTML + "*";
    onOperation = true;

}


function equal(){
    secondNumber = parseInt(resultTag.innerHTML);

    operationTag.innerHTML = operationTag.innerHTML + resultTag.innerHTML;
    resultTag.innerHTML = eval(operationTag.innerHTML);
    operationTag.innerHTML = operationTag.innerHTML + '=';
    doneOperation = true;
    
}

function c(){
    resultTag.innerHTML = 0;
    operationTag.innerHTML = "";
}
function ce(){
    resultTag.innerHTML = 0;
}

function back(){
    let oldString = resultTag.innerHTML;
    let newString = oldString.replace(/.$/, '');
    resultTag.innerHTML = newString;
}