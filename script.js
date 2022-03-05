
// Detecting Mouse Click
const button = document.querySelectorAll('button');

for (var i = 0; i < 7; i++) {
    button[i].addEventListener("click", handleClick);

    function handleClick() {
        soundPlay(this.innerHTML);
        btnAnimation(this.innerHTML);
    }
}



//Detecting Keyboard Press
document.addEventListener("keypress", function (event) {
    soundPlay(event.key);
    btnAnimation(event.key);
})




// sound-paly function
function soundPlay(x) {
    switch (x) {
        case "w":
            const tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            const tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            const tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            const tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            const snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            const crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            const kick = new Audio("sounds/kick.mp3");
            kick.play();
        default:
            console.log("INVALID INPUT");
    }
}




//Animation function
function btnAnimation(currentKey) {

    var activeBtn = document.querySelector("." + currentKey);
    activeBtn.classList.add("pressed");

    setTimeout(function (){ activeBtn.classList.remove("pressed") }, 100);
}