const startButton = document.querySelector("#startButton");
const restartButton = document.querySelector("#resetButton");
//STABILNE 240FPS = 360 KULEK
const dotsQty = +(Math.random() * (70 - 40) + 40).toFixed(0);

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let animationReq;

let dots = [];
let startDots = [];

startButton.addEventListener("click", startHandler);

restartButton.addEventListener("click", () => {
    ctx.clearRect(0, 0, 500, 500);
    cancelAnimationFrame(animationReq);
    startDots = [];
    startHandler();
});

function generateDotsCords() {
    for (let index = 0; index < dotsQty; index++) {
        let randomX = +(Math.random() * (490 - 10) + 10).toFixed(0);
        let randomY = +(Math.random() * (490 - 10) + 10).toFixed(0);

        let randomXway = Math.random() * Math.round(Math.random()) ? 1 : -1;
        let randomYway = Math.random() * Math.round(Math.random()) ? 1 : -1;

        let randomSpeed = +(Math.random() * (10 - 1) + 1).toFixed(0);

        const newDot = {
            x: randomX,
            y: randomY,
            xWay: randomXway,
            yWay: randomYway,
            speed: randomSpeed,
        };

        startDots.push(newDot);
    }
}

function spawn() {
    ctx.clearRect(0, 0, 500, 500);

    startDots.forEach((dot) => {
        ctx.fillStyle = "rgb(0, 0, 0)";
        ctx.beginPath();

        if (dot.x <= 0 || dot.x >= 500) {
            dot.xWay *= -1;
        }
        if (dot.y <= 0 || dot.y >= 500) {
            dot.yWay *= -1;
        }

        dot.x += dot.xWay / dot.speed;
        dot.y += dot.yWay / dot.speed;

        ctx.arc(dot.x, dot.y, 5, 0, 2 * Math.PI);

        if (dots.length === dotsQty) {
            dots = [];
        }
        const currentCords = { x: dot.x, y: dot.y };

        dots.forEach((adot) => {
            const distance = measureDistance(currentCords, adot);
            if (distance < 50) {
                ctx.lineTo(adot.x, adot.y);
                ctx.closePath();
            }
        });
        dots.push(currentCords);
        ctx.fill();
        ctx.stroke();
    });
    animationReq = window.requestAnimationFrame(spawn);
}

function startHandler() {
    startButton.disabled = true;
    restartButton.disabled = false;
    generateDotsCords();
    spawn();
}

function measureDistance(dotOne, dotTwo) {
    const a = Math.abs(dotOne.x - dotTwo.x);
    const b = Math.abs(dotOne.y - dotTwo.y);
    const c = Math.sqrt(a * a + b * b);
    return c;
}
