let marginTop;
let marginLeft;

window.addEventListener("deviceorientation", onDeviceMove);

function onDeviceMove(event) {
    console.log(event.beta);
    moveBall(event.beta, event.gamma);
}

// function animate() {
//     requestAnimationFrame(animate);
// }

// requestAnimationFrame(animate);

function randomHoleLocation() {
    //max 330
    marginTop = Math.floor(Math.random() * 330);
    marginLeft = Math.floor(Math.random() * 330);

    const hole = document.querySelector("#dolek");
    hole.style.marginTop = `${marginTop}px`;
    hole.style.marginLeft = `${marginLeft}px`;
}

// function getHoleLocation(){
//     const hole = document.querySelector("#dolek");
// }

//BETA: + W DÓL - W GÓRE max 180
//GAMMA: + W PRAWO - W LEWO max 90
function moveBall(beta, gamma) {
    if (beta > 90) {
        beta = 90;
    }
    if (beta < -90) {
        beta = 90;
    }
    console.log(beta);
    beta += 90;
    gamma += 90;

    const ball = document.querySelector("#pilka");

    ball.style.marginLeft = `${(360 * gamma) / 180 - 5}px`;
    ball.style.marginTop = `${(360 * beta) / 180 - 5}px`;
}

randomHoleLocation();
