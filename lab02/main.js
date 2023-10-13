// const images = Array.from(document.getElementsByTagName('img'));
const images = document.querySelectorAll('img');
const stopButton = document.querySelector("#stopButton")


index=0;
const slider = setInterval(() => {
    if(index==images.length){
        index=0;
        images.forEach(element => {
            element.style.display="none"
        });
    }
    images[index].style.display="block";
    index++;
    console.log(index)
}, 1000);

images.addEventListener('mouseover', ()=>{
    clearInterval(slider);
})

// stopButton.addEventListener('click',()=>{
//     clearInterval(slider);
//     //document.onclick = second;
// })

// function second(){
//     slider.setInterval(1000)
// }
