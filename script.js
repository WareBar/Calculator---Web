
let currentNum = '';

function appendNum(number){
    currentNum += number;
    document.getElementById('result').value = currentNum;
}




// changed from having individual function for each operation to a dynamic function that determines the operation thus reducing redundancy
function Operation(symbol){
    document.getElementById('chosenOperator').innerHTML = symbol;
    document.getElementById('firstNum').innerHTML = document.getElementById('result').value
    document.getElementById('result').value = " "
    currentNum = '';
    
}

function calculate(){

    let FirstNum = document.getElementById('firstNum').innerHTML;
    let operator = document.getElementById('chosenOperator').innerHTML;
    let SecondNum = document.getElementById('result').value
    document.getElementById('secondNum').innerHTML = SecondNum;

    let expression = FirstNum+operator+SecondNum;

    const result = eval(expression);
    document.getElementById('result').value = result;
    
    result.toString();
}

function remove(){

    currentNum = currentNum.toString().slice(0,-1)

    document.getElementById('result').value = currentNum;

}


function clearInput(){
    document.getElementById('result').value = " ";
    document.getElementById('firstNum').innerHTML = " ";
    document.getElementById('chosenOperator').innerHTML = " ";
    document.getElementById('secondNum').innerHTML = " ";


}


let indi = 0;

function AppMode(){
    
    // kinapos na po dito sir lapit na po ng due date
    if (indi % 2 == 0){
        // LIGHT MODE
        document.querySelector('.calculator').style.backgroundColor = 'whitesmoke';
        document.querySelector('.expression').style.backgroundColor = 'whitesmoke';
        document.querySelector('.calculator').style.borderColor = 'wheat';
        document.querySelector('#result').style.Color = 'grey';
        document.querySelector('firstNum').style.Color = '#1B1919'
        
    }

    else{
        document.querySelector('.calculator').style.backgroundColor = '#1B1919';
        document.querySelector('.expression').style.backgroundColor = '#1B1919';
        document.querySelector('.calculator').style.borderColor = 'whitesmoke';      
    }

    indi += 1;

}