var index = 0;

var dialogue1 = [
    "hello", 
    "here's some dialogue", 
    "wow!",
    "what great dialogue"
]

document.getElementById("dialogue-text").textContent = dialogue1[0];

const submitButton = document.querySelector("#submit-button");

submitButton.addEventListener('click', e=> {
    if (index < dialogue1.length - 1) {
        console.log("index = " + index + " & list length = " + (dialogue1.length - 1))
        index += 1; 
        document.getElementById("dialogue-text").textContent = dialogue1[index];
    }
})