// const images = Array.from(document.getElementsByTagName('img'));
const images = document.querySelectorAll(".img");
const stopButton = document.querySelector("#stopButton");
const nextButton = document.querySelector("#lewo");
const prevButton = document.querySelector("#prawo");

//index = images.length - 1;

let i = 1;
setInterval(() => {
    swipeLeft();
}, 4000);
function swipeLeft() {
    if (i === 5) {
        i = 1;
        images[0].style.right = "0px";
        images[0].style.zIndex = "1";
        images[1].style.right = "-300px";
        images[1].style.zIndex = "0";
        images[2].style.right = "-300px";
        images[2].style.zIndex = "0";
        images[3].style.right = "-300px";
        images[3].style.zIndex = "0";
        images[4].style.right = "300px";
        images[4].style.zIndex = "0";
        return;
    }
    if (i === 4) {
        images[0].style.right = "-300px";
        images[0].style.zIndex = "-1";
    }
    if (i === 1) {
        images[4].style.zIndex = "-1";
        images[4].style.right = "-300px";
    }
    console.log(`swipe left: ${i}`);

    if (i > 0) {
        images[i].style.right = "0px";
        images[i].zIndex = "1";
        images[i - 1].style.right = "300px";
    } else {
        images[i].style.right = "0px";
    }
    i++;
}

function swipeRight() {
    console.log(`swipe right: ${i}`);
    if (i == 5) {
        leftButton.disabled = false;
    }

    images[i - 1].style.right = "-300px";
    if (i > 1) images[i - 2].style.right = "0";
    i--;
}

nextButton.addEventListener("click", swipeLeft);

prevButton.addEventListener("click", swipeRight);
stopButton.addEventListener("click", slide);
function slide() {
    setInterval(() => {
        // try {
        //     swipeLeft();
        // } catch (error) {
        //     swipeRight();
        // }
        if (i === 1) {
            swipeLeft();
        } else {
            //swipeRight();
        }
    }, 1000);
}
