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


conversation = ending2; 
colonPos = conversation[index].indexOf("::"); 
document.getElementById("win-name-text2").textContent = conversation[index].substring(colonPos + 2);
document.getElementById("win-dialogue-text2").textContent = conversation[index].substring(0, colonPos);

const winSubmitButton2 = document.querySelector('#win-submit-button2'); 

winSubmitButton2.addEventListener('click', e=> {
    colonPos = conversation[index].indexOf("::"); 
    document.getElementById("win-dialogue-text2").textContent = conversation[index].substring(colonPos + 2);
    document.getElementById("win-name-text2").textContent = conversation[index].substring(0, colonPos);
    index++; 

})
