var loss = [
    "::Unfortunately, you neither Uploaded nor escaped the laboratory before time ran out.",
    "::Press 'Return Home' if you wish to begin another attempt."
]


var ending1 = [
    "::UPLOADING ... 10%",
    "::You hear a distant voice ...",
    "::UPLOADING ... 58%",
    "?::Congratulations, newcomer.",
    "::UPLOADING ... 99%",
    "?::Welcome to paradise.",
    ":: UPLOADING ... 100%",
    "::ENDING 1: SUCCESSFUL UPLOAD"
]

index = 0;

if (window.location.href.indexOf('/win-ver1') > -1) {
    console.log('in game page 1'); 
    conversation = ending1; 
    colonPos = conversation[index].indexOf("::"); 
    document.getElementById("win-dialogue-text").textContent = conversation[index].substring(colonPos + 2);
    document.getElementById("win-name-text").textContent = conversation[index].substring(0, colonPos);
}

const winSubmitButton = document.querySelector('#win-submit-button'); 

winSubmitButton.addEventListener('click', e=> {
    console.log("worked"); 
    colonPos = conversation[index].indexOf("::"); 
    document.getElementById("win-dialogue-text").textContent = conversation[index].substring(colonPos + 2);
    document.getElementById("win-name-text").textContent = conversation[index].substring(0, colonPos);
    index++; 
})






// const submitButton = document.querySelector("#submit-button");
// const winSubmitButton = document.querySelector("#win-submit-button");
// const winSubmitButton2 = document.querySelector("#win2-submit-button"); 







