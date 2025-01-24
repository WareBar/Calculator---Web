
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


// gets the toggle button

let indicator = false;
let toggleBtn = document.getElementById('toggle')

toggleBtn.addEventListener("click", ()=>{
    indicator = !indicator;
    console.log(indicator)


    // get the elements to change the color
    let calculator = document.getElementById('calculator')
    if (indicator === true){
        calculator.style.backgroundColor = "whitesmoke";
        console.log('white mode')
    }

    else{
        calculator.style.backgroundColor = "#1B1919";
        console.log('dark mode')

    }

})



console.log(toggleBtn)
console.log('_____________^^^')