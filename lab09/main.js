const startButton = document.querySelector("#startButton");

startButton.addEventListener("click", () => {
    startHandler();
});

//setInterval(startHandler, 100);

function startHandler() {
    startButton.disabled = true;
    const dotsQty = (Math.random() * (70 - 40) + 40).toFixed(0);
    for (let index = 0; index < dotsQty; index++) {
        spawnDot();
    }
    //console.log(dotsQty);
}

function spawnDot() {
    const canvas = document.getElementById("tutorial");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        const randomX = (Math.random() * (490 - 10) + 10).toFixed(0);
        const randomY = (Math.random() * (490 - 10) + 10).toFixed(0);

        ctx.fillStyle = "rgb(255, 0, 0)";
        ctx.beginPath();
        ctx.arc(randomX, randomY, 5, 0, 2 * Math.PI);
        ctx.save();

        // ctx.rotate(10);
        // ctx.translate(105, 150);
        //ctx.lineTo(200, 50);

        // ctx.moveTo(50, 50); // Begin first sub-path

        ctx.stroke();
    }
}
