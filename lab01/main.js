const numberOne =document.querySelector('#number1');
const numberTwo =document.querySelector("#number2");
const numberThree =document.querySelector("#number3");

const values = document.querySelector("#values");

const addButton = document.querySelector("#add");
const deleteButton = document.querySelector("#delete");
const submitButton = document.querySelector("#aa");

const sumP = document.querySelector("#sum");
const avgP = document.getElementById("avg");
const minP = document.getElementById("min");
const maxP = document.getElementById("max");

submitButton.addEventListener('click',()=>{
    let no1Value = parseInt(numberOne.value);
    let no2Value = parseInt(numberTwo.value);
    let no3Value = parseInt(numberThree.value);
    
    let sum = no1Value+no2Value+no3Value;

    sumP.appendChild(document.createTextNode(sum));
    avgP.appendChild(document.createTextNode(sum/3))
    minP.appendChild(document.createTextNode(Math.min(no1Value,no2Value,no3Value)))
    maxP.appendChild(document.createTextNode(Math.max(no1Value,no2Value,no3Value)))
    //minP.innerHTML = Math.min(no1Value,no2Value,no3Value);
    //maxP.innerHTML = Math.max(no1Value,no2Value,no3Value);
})

addButton.addEventListener('click',()=>{
    let input = document.createElement('input');
    let id = values.childElementCount+1;
    input.type="text";
    input.id="number"+id;
    values.appendChild(input);
})

deleteButton.addEventListener('click', ()=>{
    values.removeChild(values.lastChild);
})


