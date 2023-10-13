const values = document.querySelector("#values");
const addButton = document.querySelector("#add");
const deleteButton = document.querySelector("#delete");
const submitButton = document.querySelector("#calculate");
const sumP = document.querySelector("#sum");
const avgP = document.getElementById("avg");
const minP = document.getElementById("min");
const maxP = document.getElementById("max");

submitButton.addEventListener('click', () => {
    let sum = 0;
    let inputs = Array.from(document.querySelectorAll("input"));
    let numbers = [];

    

    for (let index = 0; index < inputs.length; index++) {
        if (isNaN(inputs[index].value || typeof inputs[index].value === string )) {        
            return;
        }
        sum += parseInt(inputs[index].value);
        numbers[index] = parseInt(inputs[index].value);
    }

    sumP.innerHTML = `Suma: ${sum}`;
    avgP.innerHTML = `Średnia: ${sum / inputs.length}`;
    minP.innerHTML = `Min: ${Math.min(...numbers)}`;
    maxP.innerHTML = `Max: ${Math.max(...numbers)}`;

})

addButton.addEventListener('click', ()=>{
    let input = document.createElement('input');
    let id = values.childElementCount+1;
    input.type="text";
    input.id="number"+id;
    values.appendChild(input);
})

deleteButton.addEventListener('click', ()=>{
    values.removeChild(values.lastChild);
})


