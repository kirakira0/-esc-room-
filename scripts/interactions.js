const android = document.querySelector("#android");

const computer = {
    numConvos: 0
}

android.addEventListener('click', e=> {
    console.log("clicked android"); 
    //if ... check cases, call different text for each  
    if (computer.numConvos === 0) {
        showText(android1);
    }
     
})
