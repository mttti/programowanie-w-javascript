// ZADANIE 1

function asyncAdd(a,b){
   return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(a+b)
        }, 100)
    })
}

async function asyncAddCall(a=0,b=0){
    const result = await asyncAdd(a,b);
    console.log(`Wynik dodawania: ${result}`)
    return result;
}


// ZADANIE 2

let numbers = [];
for (let i = 0; i < 100; i++) {
    numbers.push(i);
}

async function asyncAddAll(){
    sum = 0;
    for (const number of numbers) {
        const result = await asyncAdd(sum, number);
        sum=result;
    }
    console.log(`Suma liczb z tablicy: ${sum}`)
}

//ZADANIE 3

async function asyncMeasureTime(functionName,a,b){
    const start=performance.now();
    if(a===undefined||b===undefined){
        await functionName();
    }else{
        await functionName(a,b)
    }
    
    const end=performance.now();
    console.log(`Czas wykonania: ${end-start}`)
}

asyncMeasureTime(asyncAddCall,5,5);
asyncMeasureTime(asyncAddAll);