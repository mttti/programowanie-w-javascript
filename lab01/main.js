const values = document.querySelector("#values");
const addButton = document.querySelector("#add");
const deleteButton = document.querySelector("#delete");
const submitButton = document.querySelector("#calculate");
const sumP = document.querySelector("#sum");
const avgP = document.getElementById("avg");
const minP = document.getElementById("min");
const maxP = document.getElementById("max");

function count() {
    let sum = 0;
    let inputs = Array.from(document.querySelectorAll("input"));
    let numbers = [];

    for (let index = 0; index < inputs.length; index++) {
        if (
            isNaN(inputs[index].value) ||
            typeof inputs[index].value === String
        ) {
            break;
        }
        sum += parseInt(inputs[index].value);
        numbers[index] = parseInt(inputs[index].value);
    }

    sumP.innerHTML = `Suma: ${isNaN(sum) ? "Uzupełnij wszystkie pola" : sum}`;
    avgP.innerHTML = `Średnia: ${
        isNaN(sum / inputs.length)
            ? "Uzupełnij wszystkie pola"
            : sum / inputs.length
    }`;
    minP.innerHTML = `Min: ${
        isNaN(Math.min(...numbers))
            ? "Uzupełnij wszystkie pola"
            : Math.min(...numbers)
    }`;
    maxP.innerHTML = `Max: ${
        isNaN(Math.max(...numbers))
            ? "Uzupełnij wszystkie pola"
            : Math.max(...numbers)
    }`;
}

submitButton.addEventListener("click", count);

addButton.addEventListener("click", () => {
    let input = document.createElement("input");
    let id = values.childElementCount + 1;
    input.setAttribute("onchange", "count()");
    input.type = "text";
    input.id = "number" + id;

    values.appendChild(input);
});

deleteButton.addEventListener("click", () => {
    values.removeChild(values.lastChild);
});
