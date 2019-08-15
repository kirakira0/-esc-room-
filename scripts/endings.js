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

var ending2 = [
    "::After descending the hidden staircase, you notice an emegency exit.",
    "::It seems to be unlocked as a result of your manual security override.",
    "::There is little time left before the laboratory self-destructs,",
    "::so you opt to leave through the emergency exit.",
    "::You take the helpful android with you as you leave, saving it from certain detruction.", 
    "::You're not sure what the future holds for you, whether you ever be able to Upload or whether you will forever remain on Earth,",
    "::but CC193 seems confident that you'll be ok.",
    "::And somehow,",
    "::that's enough.",
    "::ENDING 2: EMERGENCY EXIT"
]

index = 0;

if (window.location.href.indexOf('/win-ver2') > -1) { 
    conversation = ending2; 
    colonPos = conversation[index].indexOf("::"); 
    document.getElementById("final-text").textContent = conversation[index].substring(colonPos + 2);
    document.getElementById("name-text").textContent = conversation[index].substring(0, colonPos);
}

const submitButton = document.querySelector("#submit-button");

submitButton.addEventListener('click', e=> {
    colonPos = conversation[index].indexOf("::"); 
    document.getElementById("final-text").textContent = conversation[index].substring(colonPos + 2);
    document.getElementById("name-text").textContent = conversation[index].substring(0, colonPos);
    index++; 

})



