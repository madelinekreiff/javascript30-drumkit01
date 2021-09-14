// fix Safari delayed & inconsistent volume changes using webkit
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

// select audio tags & .key div elements (this will create arrays)
const audio = document.querySelectorAll("audio");
const keyDivs = document.querySelectorAll(".key");

// create array for key codes of the letters
const keyCodesArray = [];
for (let i of keyDivs) {
    keyCodesArray.push(i.dataset.key);
}

// keydown event listener - use key codes to see if letters match then play corresponding audio and add class .playing
document.addEventListener("keydown", function (e) {
    const keyCodeVal = e.keyCode;
    keyCodesArray.forEach(function (keyFromArray, index) {
        if (keyFromArray == keyCodeVal) {
            audio[index].currentTime = 0;
            keyDivs[index].classList.add("playing");
            audio[index].play();
        }
    });
});

// keyup event listener to remove .playing class
document.addEventListener("keyup", function (e) {
    const keyCodeVal = e.keyCode;
    keyCodesArray.forEach(function (keyFromArray, index) {
        if (keyFromArray == keyCodeVal) {
            keyDivs[index].classList.remove("playing");
        }
    });
});
