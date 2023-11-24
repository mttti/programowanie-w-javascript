let marginTop;
let marginLeft; 

window.addEventListener('deviceorientation', onDeviceMove)

function onDeviceMove(event) {
    //console.log(event.beta)
    //console.log(event.gamma)
    moveBall(event.beta, event.gamma)
}

function animate() {
       //console.log(Date.now())
    requestAnimationFrame(animate)
}

requestAnimationFrame(animate)

function randomHoleLocation(){//max 330
    marginTop = Math.floor(Math.random() * 330 );
    marginLeft = Math.floor(Math.random() * 330 );

    const hole = document.querySelector("#dolek");
    console.log(hole)
    hole.style.marginTop = `${marginTop}px`;
    hole.style.marginLeft = `${marginLeft}px`;
    //hole.style.transform=`translate(${marginLeft}, ${marginTop})`;
    console.log(marginLeft)
}

// function getHoleLocation(){
//     const hole = document.querySelector("#dolek");
// }


//BETA: + W DÓL - W GÓRE max 180
//GAMMA: + W PRAWO - W LEWO max 90
function moveBall(beta, gamma){
    const ball = document.querySelector("#pilka");

    ball.style.top = `${beta*2}px`
    ball.style.left = `${gamma*3}px`

    if(beta*2>marginTop && beta*2<marginTop+70 && gamma*3>marginLeft&&gamma*3<marginLeft+70){
        alert("Wygrałeś")
        ball.style.top="0px";
        ball.style.left="0px";
        randomHoleLocation();
    }
}


randomHoleLocation();   