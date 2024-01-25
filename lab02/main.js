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

images.forEach((image, index) => {
    image.style.left = index * 100 + "%";
});

function slide() {
    images.forEach((image) => {
        image.style.transform = `translateX(-${slideNumber * 100}%)`;
    });
}

prevButton.addEventListener("click", () => {
    slideNumber--;
    if (slideNumber < 0) {
        slideNumber = images.length - 1;
    }
    slide();
});

nextButton.addEventListener("click", () => {
    slideNumber++;
    if (slideNumber > images.length - 1) {
        slideNumber = 0;
    }
    slide();
});

start();

function start() {
    slideInterval = setInterval(() => {
        slideNumber++;
        if (slideNumber > images.length - 1) {
            slideNumber = 0;
        }
        slide();
    }, 2000);
}

oneButton.addEventListener("click", () => {
    clearInterval(slideInterval);
    slideNumber = -1;
    start();
});
twoButton.addEventListener("click", () => {
    clearInterval(slideInterval);
    slideNumber = 0;
    start();
});
threeButton.addEventListener("click", () => {
    clearInterval(slideInterval);
    slideNumber = 1;
    start();
});
fourButton.addEventListener("click", () => {
    clearInterval(slideInterval);
    slideNumber = 2;
    start();
});

fiveButton.addEventListener("click", () => {
    clearInterval(slideInterval);
    slideNumber = 3;
    start();
});
