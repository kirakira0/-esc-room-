var doorLeftOpened = false;
var doorRightOpened = false; 
var doorsOpened = false; 
var obtainedScrewdriver = false; 


document.getElementById("view1").style.display = "inline-block";
document.getElementById("view2").style.display = "none";
document.getElementById("view3").style.display = "none";
document.getElementById("view4").style.display = "none";
document.getElementById("view5").style.display = "none";
document.getElementById("view6").style.display = "none";
document.getElementById("view7").style.display = "none";
//document.getElementById("view8").style.display = "none";

const passwordBox = document.querySelector("#password-box");

//hide password box at beginning
document.getElementById("password-box").style.display = "none";

let currentView = 1;


document.onkeydown = checkKey;

function checkKey(e) {

    if (!dialogueRunning) {

        e = e || window.event;



        if (e.keyCode == '13') { //enter
            if (currentView == 2) { //only show the password box when in view 2
                if (!puzzle1Solved) {
                document.getElementById("password-box").style.display = "block";
                console.log(puzzle1Solved);
                }
            }
        }
        else if (e.keyCode == '40') { //DOWN ARROW KEY OR 'S'
            console.log("down arrow pressed");

            if (currentView === 7) {
                window.location.href = '/win-ver2?seconds=' +
                    secondsRemaining();
            }
        }
        else if (e.keyCode == '37') { //LEFT ARROW KEY

            currentView--;
            if (currentView === 0) {
                if (doorsOpened) {
                    currentView = 7;
                }
                else {
                    currentView = 5;
                }
            }

            console.log(currentView);
            showView();

        }
        else if (e.keyCode == '39') { //RIGHT ARROW KEY OR 'D'

            currentView++;
            if (doorsOpened) {
                if (currentView === 8) {
                    currentView = 1;
                }
            }
            else {
                if (currentView === 6) {
                    currentView = 1;
                }
            }
            showView();

        }
    }

    //console.log(currentView);
}


function showView() {
    // for (let i = 1; i <= 8; i++) {
for (let i = 1; i <= 7; i++) {
        const element = document.querySelector(`#view${i}`);
        if (i === currentView) {
            element.style.display = "inline-block";
        }
        else {
            //console.log(`#view${i}`);
            element.style.display = "none";
        }
    }
}

if (doorsOpened) {
    console.log("add new views here");
}
