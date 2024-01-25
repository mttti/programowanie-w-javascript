const images = document.querySelectorAll(".img");

const nextButton = document.querySelector("#lewo");
const prevButton = document.querySelector("#prawo");

const oneButton = document.querySelector("#one");
const twoButton = document.querySelector("#two");
const threeButton = document.querySelector("#three");
const fourButton = document.querySelector("#four");
const fiveButton = document.querySelector("#five");

let slideInterval;
let slideNumber = 0;

nextButton.addEventListener("click", () => {
    clearInterval(interval);
    start((slideNumber += slideNumber < 4 ? 1 : 0));
});
prevButton.addEventListener("click", () => {
    clearInterval(interval);
    start((slideNumber += slideNumber > 0 ? -2 : 0));
});
oneButton.addEventListener("click", () => {
    clearInterval(interval);
    start(0);
});
twoButton.addEventListener("click", () => {
    clearInterval(interval);
    start(1);
});
threeButton.addEventListener("click", () => {
    clearInterval(interval);
    start(2);
});
fourButton.addEventListener("click", () => {
    clearInterval(interval);
    start(3);
});
fiveButton.addEventListener("click", () => {
    clearInterval(interval);
    start(4);
});

let interval;

function start(i = 0) {
    console.log(slideNumber);
    slideNumber = i;
    interval = setInterval(() => {
        slide(slideNumber);
        if (slideNumber === 4) {
            slideNumber = 0;
        } else {
            slideNumber++;
        }
    }, 1000);
}

start();

function slide(n) {
    for (let i = 0; i < images.length; i++) {
        if (i > n) {
            images[i].style.right = "-300px";
        }
        if (i < n) {
            images[i].style.right = "300px";
        }

        if (n === 4 && i < 3) {
            images[i].style.display = "none";

            images[i].style.right = "-300px";
        }
    }
    images[n].style.display = "block";
    setTimeout(() => {
        images[n].style.right = "0px";
    }, 1);
}
