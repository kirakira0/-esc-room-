const android = document.querySelector("#android");
const computerElement = document.querySelector("#computer-text"); 

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
    //if ... check cases, call different text for each  
    if (computer.numConvos === 0) {
        computer.numConvos++; 
        //showText( computer1 );
        document.getElementById("message").textContent = "error: password required"; //define the dialogue
        console.log("clicked computer     " + computer.numConvos); 
    }
     
})
