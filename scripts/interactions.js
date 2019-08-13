const android = document.querySelector("#android");
const computerElement = document.querySelector("#computer-text"); 
const passwordSubmitButton = document.querySelector("#password-submit"); 

const computer = {
    numConvos: 0
}

android.addEventListener('click', e=> {
    console.log("clicked android"); 
    //if ... check cases, call different text for each  
    if (computer.numConvos === 0) {
        showText(android1);
    }
    else if (computer.numConvos === 1) {
        showText(android2);
    }
     
})

computerElement.addEventListener('click', e=> {
    var clicks = 0; 
    //if ... check cases, call different text for each  
    if (computer.numConvos === 1) {
        document.getElementById("hint").textContent = "[book hint]"; //define the dialogue
    }   
    else if (computer.numConvos === 0) {
        computer.numConvos++; 
        //showText( computer1 );
        document.getElementById("message").textContent = "error: [UP ARROW] or [W] to submit password"; //define the dialogue
        console.log("clicked computer     " + computer.numConvos); 
    }
})

passwordSubmitButton.addEventListener('click', e=> {
    console.log("clciked submit"); 
    document.getElementById("message").textContent = "PASSWORD INCORRECT"; //define the dialogue
})


