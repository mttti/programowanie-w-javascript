document.addEventListener('keypress', onKeyPress)
const startRecordButton = document.querySelector("#startRecord");
const stopRecordButton = document.querySelector("#stopRecord");
const playButton = document.querySelector("#play");

let isRecording = false;

let sounds = [];

const KeyToSound = {
    'a': document.querySelector('#s1'),
    's': document.querySelector('#s2')
}

function onKeyPress(event) {
    const sound = KeyToSound[event.key]
    let obiekt;
    if(isRecording){
       // if(sounds.length===0){
            obiekt = {
                sound:sound,
                time:event.timeStamp,
                canal: 1
            }
        // }else{
        //     obiekt = {
        //         sound:sound,
        //         time: +event.timeStamp-+sounds[sounds.length-1].time,
        //         canal: 1
        //     } 
        // }
        
        sounds.push(obiekt);
    }
    console.log(event.timeStamp)
    playSound(sound)
}
function playSound(sound) {
    sound.currentTime = 0
    sound.play()
}

function play(){
    // console.log("Playing canal 1");
    // for (const sound of sounds) {
    //     setTimeout(playSound(sound.sound), 1000)
    // }

    for (let i = 0; i < sounds.length; i++) {
        const sound = sounds[i];
        if (i == 0) playSound(sound.sound);
        else {
            setTimeout(() => {
                playSound(sound.sound);
                try{console.log(`czas: ${sound.time - sound[i-1].time}`)}
                catch(error){
                    console.log("error "+i)
                }
            }, 1000);//+sound.time-+sound[i-1].time);
        }
        
    }
    
    console.log(sounds);
}

startRecordButton.addEventListener("click", ()=>{
    isRecording=true;
    sounds=[];
    console.log("Started recording...")
});

stopRecordButton.addEventListener("click", ()=>{
    isRecording=false;
    console.log("Stopped recording...")
});

playButton.addEventListener("click", play)
