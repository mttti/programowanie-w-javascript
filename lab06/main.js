window.addEventListener("deviceorientation", onDeviceMove);
const restartButton = document.getElementById("restart");
const info = document.getElementById("info");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let holeLocation = randomLocation();
let ballLocation = randomLocation();
let animationReq;
let time = 60;
let ballsInHole = 0;
let timeInterval;
let beta = 0;
let gamma = 0;

function onDeviceMove(event) {
    beta = event.beta;
    gamma = event.gamma;
}

function randomLocation() {
    const y = Math.floor(Math.random() * (490 - 15) + 15);
    const x = Math.floor(Math.random() * (490 - 15) + 15);

    return { x: x, y: y };
}

function ballInHole() {
    ctx.clearRect(0, 0, 500, 500);
    cancelAnimationFrame(animationReq);

    holeLocation = randomLocation();
    ballLocation = randomLocation();
    generateBall();
}

generateBall();
timer();
document.getElementById("ballsInHole").innerText = ballsInHole;

function generateBall() {
    if (time === 0) {
        cancelAnimationFrame(animationReq);
        finish();
        return;
    }
    ctx.clearRect(0, 0, 500, 500);
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.beginPath();
    ctx.arc(holeLocation.x, holeLocation.y, 10, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "rgb(255, 0, 0)";
    ctx.beginPath();
    ballLocation.x += gamma > 0 ? +gamma / 9 : +gamma / 9;
    ballLocation.y += beta > 0 ? +beta / 6 : +beta / 6;
    if (ballLocation.x <= 0) {
        ballLocation.x = 0;
    }
    if (ballLocation.x >= canvas.width) {
        ballLocation.x = canvas.width;
    }

    if (ballLocation.y <= 0) {
        ballLocation.y = 0;
    }
    if (ballLocation.y >= canvas.height) {
        ballLocation.y = canvas.height;
    }

    ctx.arc(ballLocation.x, ballLocation.y, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    if (isBallInHole(ballLocation.x, ballLocation.y)) {
        ballsInHole++;
        document.getElementById("ballsInHole").innerText = ballsInHole;
        ballInHole();
    }
    animationReq = requestAnimationFrame(generateBall);
}

function isBallInHole(x, y) {
    const a = Math.abs(x - holeLocation.x);
    const b = Math.abs(y - holeLocation.y);
    const c = Math.sqrt(a * a + b * b);

    return c <= 9 ? true : false;
}

function finish() {
    restartButton.style.display = "block";
    info.style.display = "none";
    ctx.clearRect(0, 0, 500, 500);
    cancelAnimationFrame(animationReq);

    clearInterval(timeInterval);
    document.getElementById("summary").innerHTML =
        "Game finished. Your score: " + ballsInHole;
}

restartButton.addEventListener("click", () => {
    restartButton.style.display = "none";
    info.style.display = "block";
    document.getElementById("summary").innerHTML = "";
    time = 60;
    ballsInHole = 0;
    document.getElementById("ballsInHole").innerText = ballsInHole;

    ballInHole();
    timer();
});

function timer() {
    document.getElementById("timeLeft").innerText = time + "s";
    timeInterval = setInterval(() => {
        time--;
        document.getElementById("timeLeft").innerText = time + "s";
    }, 1000);
}
