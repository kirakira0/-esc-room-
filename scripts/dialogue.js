//the dialogue 
var index = 0;
run_clock('clockdiv',deadline);


//document.getElementById("timer").style.display = "none";


var dialogue1 = [
    // "  ::The room you awaken in is cold and silent save for the soft hum of electrical generators.", 
    // "  ::The only other sign of life in the room is a broken-looking android in the far corner.",
    // "  ::Upon noticing you, it calls out in a small, robotic voice.",  
    // "?::Oh ... You're not supposed to be here.", 
    // "?::Hello, human. I am Android CC193.",
    // "Android CC193::It seems that you have awoken in the middle of your Upload.",
    // "Android CC193::This is an unfortunate development.",
    // "Android CC193::You must join the rest of mankind in the virtual world as quickly as possible.",  
    // "Android CC193::Although your auto Upload malfunctioned, there are enough resources in this laboratory for you to perform a manual transfer.",
    "Android CC193::Do you understand what you must do?", 
    "2options::",
    "Yes, I understand.::understand",
    ". . . What?::explainMore"

]

var understand = [
    "Android CC193::Excellent. I am most happy that you understand.",
    "Android CC193::Especially since this laboratory is scheduled to self-destruct in 10 minutes.",
    "Android CC193::Best of luck to you, human!", 
    "end::"
]

var explainMore = [
    "Android CC193::You must explore the laboratory and gather clues to help you Upload.",
    "Android CC193::You may wish to start by interacting with the computer on the opposite end of the room.",
    "Android CC193::It contains the appropriate software to assist you.",
    "Android CC193::You may also speak to me if you need further assistance.", 
    "Android CC193::Do you understand?", 
    "1option::", 
    "Sure ...::understand"
]

var winVer1 = [
    "::congrats", 
    "::you win"
]

var android1 = [
    "Android CC193::Sorry human; I wish there was more that I could do for you.",
    "Android CC193::Have you spoken to the computer yet? It may be able to help you more than I.", 
    "end::"
]

var android2 = [
    "Android CC193::I see that you've spoken to the computer.", 
    "end::"
]

console.log(window.location.href); 

conversation = dialogue1; 

document.getElementById("option-button1").style.display = "none";
document.getElementById("option-button2").style.display = "none";

/*
lines of conversation within the conversation list are separated into a name and a line of dialogue by two colons (::)
the name of the person (or robot :D) speaking comes before the separator and their line comes after the two colons
*/ 
colonPos = conversation[index].indexOf("::"); //define the separator 
document.getElementById("dialogue-text").textContent = conversation[index].substring(colonPos + 2); //define the dialogue
document.getElementById("name-text").textContent = conversation[index].substring(0, colonPos);; //define the name

const submitButton = document.querySelector("#submit-button");
const option1Button = document.querySelector("#option-button1");
const option2Button = document.querySelector("#option-button2");

//ADVANCE DIALOGUE (what to do if the user hits the continue button)
submitButton.addEventListener('click', e=> {
    colonPos = conversation[index].indexOf("::");       
    //console.log(conversation[index + 2].substring(0, conversation[index + 2].indexOf("::"))); 
    if (index >= conversation.length) { //the conversation is finished
        run_clock('clockdiv',deadline);
        hideText(); 
    }
    else {
        if (conversation[index + 1].substring(0, conversation[index + 1].indexOf("::")) == "1option") {
            document.getElementById("submit-button").style.display = "none";
            document.getElementById("option-button1").style.display = "block";
            document.getElementById("option-button2").style.display = "none";
                
            document.getElementById("option-button1").value = conversation[index + 2].substring(0, conversation[index + 2].indexOf("::")); 
        }
        else if (conversation[index + 1].substring(0, conversation[index + 1].indexOf("::")) == "end") {
            hideText(); 
        }
        else if (conversation[index + 1].substring(0, conversation[index + 1].indexOf("::")) == "2options") { //create two option buttons           
            document.getElementById("submit-button").style.display = "none";
            document.getElementById("option-button1").style.display = "block";
            document.getElementById("option-button2").style.display = "block";
                
            document.getElementById("option-button1").value = conversation[index + 2].substring(0, conversation[index + 2].indexOf("::")); 
            document.getElementById("option-button2").value = conversation[index + 3].substring(0, conversation[index + 3].indexOf("::"));      
        }
        
        else { //continue through conversation normally 
            index += 1; 
            colonPos = conversation[index].indexOf("::"); 
            document.getElementById("dialogue-text").textContent = conversation[index].substring(colonPos + 2);
            document.getElementById("name-text").textContent = conversation[index].substring(0, colonPos); 
        }
    }
   
})

//what to do if the user selects option button 1
option1Button.addEventListener('click', e=> {
    console.log(conversation);  
    document.getElementById("submit-button").style.display = "block";
    document.getElementById("option-button1").style.display = "none";
    document.getElementById("option-button2").style.display = "none";
    //conversation = conversation[index + 2].substring(conversation[index + 2].indexOf("::") + 2); 
    if (conversation == dialogue1) {
        conversation = understand; 

    }
    else if (conversation == explainMore) {
        conversation = understand; 
    }
    
    index = 0; 
    colonPos = conversation[index].indexOf("::"); //define the separator 
    document.getElementById("dialogue-text").textContent = conversation[index].substring(colonPos + 2); //define the dialogue
    document.getElementById("name-text").textContent = conversation[index].substring(0, colonPos);; //define the name


})

option2Button.addEventListener('click', e=> {
    console.log(index); 
    document.getElementById("submit-button").style.display = "block";
    document.getElementById("option-button1").style.display = "none";
    document.getElementById("option-button2").style.display = "none";
    if (conversation == dialogue1) {
        conversation = explainMore; 

    }
    index = 0; 
    document.getElementById("dialogue-text").textContent = conversation[index].substring(colonPos + 2); //define the dialogue
    document.getElementById("name-text").textContent = conversation[index].substring(0, colonPos);; //define the name


})

function hideText() {
    document.getElementById("dialogue-text").style.display = "none";
    document.getElementById("name-text").style.display = "none";
    document.getElementById("submit-button").style.display = "none";
    document.getElementById("option-button1").style.display = "none";
    document.getElementById("option-button2").style.display = "none";
    index = 0; 
}

function showText(newConversation) {
  

    document.getElementById("dialogue-text").style.display = "block";
    document.getElementById("name-text").style.display = "block";
    document.getElementById("submit-button").style.display = "block";
    document.getElementById("option-button1").style.display = "none";
    document.getElementById("option-button2").style.display = "none";

    index = 0;   
    conversation = newConversation; 
    document.getElementById("dialogue-text").textContent = conversation[index].substring(colonPos + 2); //define the dialogue
    document.getElementById("name-text").textContent = conversation[index].substring(0, colonPos);; //define the name

    console.log(conversation); 
}