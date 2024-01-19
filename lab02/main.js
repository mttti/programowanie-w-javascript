const images = document.querySelectorAll(".img");
const stopButton = document.querySelector("#stopButton");
const startButton = document.querySelector("#startButton");
const nextButton = document.querySelector("#lewo");
const prevButton = document.querySelector("#prawo");

const oneButton = document.querySelector("#one");
const twoButton = document.querySelector("#two");
const threeButton = document.querySelector("#three");
const fourButton = document.querySelector("#four");
const fiveButton = document.querySelector("#five");

let slideInterval;

// let i = 1;
// function interval() {
//     slideInterval = setInterval(() => {
//         swipeLeft();
//     }, 4000);
//     console.log("Invertal started");
// }
// interval();
// function swipeLeft() {
//     if (i === 5) {
//         i = 1;
//         images[0].style.right = "0px";
//         images[0].style.zIndex = "1";
//         images[1].style.right = "-300px";
//         images[1].style.zIndex = "0";
//         images[2].style.right = "-300px";
//         images[2].style.zIndex = "0";
//         images[3].style.right = "-300px";
//         images[3].style.zIndex = "0";
//         images[4].style.right = "300px";
//         images[4].style.zIndex = "0";
//         return;
//     }
//     if (i === 4) {
//         images[0].style.right = "-300px";
//         images[0].style.zIndex = "-1";
//     }
//     if (i === 1) {
//         images[4].style.zIndex = "-1";
//         images[4].style.right = "-300px";
//     }
//     console.log(`swipe left: ${i}`);

//     if (i > 0) {
//         images[i].style.right = "0px";
//         images[i].zIndex = "1";
//         images[i - 1].style.right = "300px";
//     } else {
//         images[i].style.right = "0px";
//     }
//     i++;
// }

// function swipeRight() {
//     console.log(`swipe right: ${i}`);
//     images[i - 1].style.right = "-300px";
//     if (i > 1) {
//         images[i - 2].style.right = "0";
//     }
//     i--;
// }

// nextButton.addEventListener("click", swipeLeft);
// prevButton.addEventListener("click", swipeRight);
// oneButton.addEventListener("click", () => {
//     i = 1;
//     console.log(`ustawiono i na ${i}`);
// });

// startButton.addEventListener("click", interval);
// stopButton.addEventListener("click", () => {
//     clearInterval(slideInterval);
//     console.log("interval stopped");
// });

for (let index = 0; index < images.length; index++) {}

function slide(n = 1) {
    setTimeout(() => {
        console.log("n: " + n);

        if (n === 5) {
            images.forEach((element) => {
                element.style.right = "-300px";
            });
            slide(0);
        } else {
            images[n].style.right = "0";
            if (n > 0) {
                images[n - 1].style.right = "300px";
            }
            if (n >= 2) {
                images[n - 2].style.right = "-300px";
            }
            slide(n + 1);
        }
    }, 2000);
}
// slide();

oneButton.addEventListener("click", () => slide(0));
twoButton.addEventListener("click", () => slide(1));
