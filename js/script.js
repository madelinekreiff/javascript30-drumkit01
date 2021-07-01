// create array for key codes of the letters
const keyCodes = document.querySelectorAll("div [data-key]")
const keyCodesArray = [];
for (let i of keyCodes) {
    keyCodesArray.push(i.dataset.key);
}

// array for audio tags
const audio = document.querySelectorAll("audio");

// keydown event listener - use key codes to see if letters match then play corresponding audio
document.addEventListener("keydown", function(e) {
    const keyCodeVal = e.keyCode;
    keyCodesArray.forEach(function (keyFromArray, index) {
        if (keyFromArray == keyCodeVal) {
            audio[index].play();
        }
    });
});
