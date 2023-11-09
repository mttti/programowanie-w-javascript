document.addEventListener("keypress", onKeyPress);
const startRecordButton = document.querySelector("#startRecord");
const stopRecordButton = document.querySelector("#stopRecord");
const playButton = document.querySelector("#play");
const playAllButton = document.querySelector("#playAll");

let isRecording = false;

let sounds = [];

const KeyToSound = {
    a: document.querySelector("#s1"),
    s: document.querySelector("#s2"),
    d: document.querySelector("#s3"),
    f: document.querySelector("#s4"),
    g: document.querySelector("#s5"),
    h: document.querySelector("#s6"),
    j: document.querySelector("#s7"),
    k: document.querySelector("#s8"),
    l: document.querySelector("#s9"),
};

function onKeyPress(event) {
    const sound = KeyToSound[event.key];
    if (sound === undefined) return;

    let obiekt;
    if (isRecording) {
        obiekt = {
            sound: sound,
            time: event.timeStamp,
            canal: selectedCanal(),
        };
        sounds.push(obiekt);
    }
    console.log(event.timeStamp);
    playSound(sound);
}
function playSound(sound) {
    sound.currentTime = 0;
    sound.play();
}

function selectedCanal() {
    return +document.querySelector("#selectCanal").value;
}

function startPlaying() {
    const canal = selectedCanal();
    play(canal);
}
function play(canal) {
    const filteredSounds = sounds.filter((cnl) => cnl.canal === canal);

    if (filteredSounds.length === 0) {
        return;
    }
    console.log(`Playing canal ${canal}`);

    playSound(filteredSounds[0].sound);
    loop(1);
    function loop(i) {
        setTimeout(() => {
            playSound(filteredSounds[i].sound);
            if (i < filteredSounds.length - 1) {
                loop(i + 1);
            }
        }, filteredSounds[i].time - filteredSounds[i - 1].time);
    }
}

function playAll() {
    for (let i = 1; i < 5; i++) {
        play(i);
    }
}

startRecordButton.addEventListener("click", () => {
    isRecording = true;
    console.log(`Started recording canal ${selectedCanal()}`);
});

stopRecordButton.addEventListener("click", () => {
    isRecording = false;
    console.log(`Stopped recording canal ${selectedCanal()}`);
});

playButton.addEventListener("click", startPlaying);
playAllButton.addEventListener("click", playAll);
