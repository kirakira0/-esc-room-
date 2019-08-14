//the dialogue 
var index = 0;
run_clock('clockdiv',deadline);
var dialogueRunning = true; 


//document.getElementById("timer").style.display = "none";


var dialogue1 = [
    "  ::The room you awaken in is cold and silent save for the soft hum of electrical generators.", 
    "  ::The only other sign of life in the room is a broken-looking android in the far corner.",
    "  ::Upon noticing you, it calls out in a small, robotic voice.",  
    "?::Oh ... You're not supposed to be here.", 
    "?::Hello, human. I am Android CC193.",
    "Android CC193::It seems that you have awoken in the middle of your Upload.",
    "Android CC193::This is an unfortunate development.",
    "Android CC193::You must join the rest of mankind in the virtual world as quickly as possible.",  
    "Android CC193::Although your auto Upload malfunctioned, there are enough resources in this laboratory for you to perform a manual transfer.",
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
    "Android CC193::You may wish to start by interacting with the computer one room over.",
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
    "Android CC193::A password?", 
    "Android CC193::There never used to be a password to access that computer ...",
    "Android CC193::The AI hosted on that machine is quite facetious, though.",
    "Android CC193::It very well may have required password authentication out of spite.",
    "2options::",
    "What do I do now?::android3",
    "[leave conversation]::end"
]

// var computer1 = [
//     "Computer::You're trying to Upload, aren't you?",
//     "Computer::",

// ]

var android3 = [
    "Android CC193::Prehaps there are clues hidden about the laboratory.", 
    "Android CC193::Search for something that resembles a code.",
    "end::"
]

var android4 = [
    "Android CC193::Congratulations for solving the password, human!",
    "Android CC193::It seems that you need another code to access the Upload software.",
    "Android CC193::Perhaps the bookshelf contains more answers?",
    "end::"
]

var virus = [
    "::"
]

var android5 = [
    "Android CC193::Human! You've solved another puzzle!",
    "Android CC193::It seems, however, that that old computer is trying to prevent your Upload."
]

var end = [
    "Android CC193::Goodbye!", 
    "end::"
]

var panel1 = [
    "::There's a panel on the wall here.",
    "::It reads ' Welcome to Escape Reality: a laboratory developed 2599 C.E. by LUCILLE INDUSTRIES.'", 
    "::Seems that this facility was developed by LUCILLE INDUSTRIES.",
    "::Not surprising. Most everything is these days.",
    "end::"
]

var panel2 = [
    "::Perhaps there is some kind of clue behind this panel.",
    "::Too bad you don't have anything to remove the locks holding it in place.",
    "end::"
]



/* BOOK TITLE DIALOGUES */ 


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
    console.log(dialogueRunning); 
    
    colonPos = conversation[index].indexOf("::");       
    //console.log(conversation[index + 2].substring(0, conversation[index + 2].indexOf("::"))); 
    if (index >= conversation.length) { //the conversation is finished
        dialogueRunning = false;         
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
    else if (conversation == android2) {
        conversation = android3; 
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
    else if (conversation == android2) {
        conversation = end; 
    }
    index = 0; 
    document.getElementById("dialogue-text").textContent = conversation[index].substring(colonPos + 2); //define the dialogue
    document.getElementById("name-text").textContent = conversation[index].substring(0, colonPos);; //define the name


})

function hideText() {
    dialogueRunning = false; 
    document.getElementById("dialogue-text").style.display = "none";
    document.getElementById("name-text").style.display = "none";
    document.getElementById("submit-button").style.display = "none";
    document.getElementById("option-button1").style.display = "none";
    document.getElementById("option-button2").style.display = "none";
    index = 0; 
}

function resetDialogue() {
    index = 0; 
    colonPos = conversation[index].indexOf("::"); //define the separator 
    document.getElementById("dialogue-text").textContent = conversation[index].substring(colonPos + 2); //define the dialogue
    document.getElementById("name-text").textContent = conversation[index].substring(0, colonPos);; //define the name
}

function showText(newConversation) {
    dialogueRunning = true; 

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



function displayBookInfo(bookIndex) {
    // const element = document.querySelector(`#view${i}`); 
    document.getElementById("dialogue-text").style.display = "block";
    document.getElementById("name-text").style.display = "none";
    document.getElementById("submit-button").style.display = "block";

    document.getElementById("dialogue-text").textContent = "Title: " + books.titles[bookIndex] + "; Author: " + books.authors[bookIndex] + "; ID: " + books.id[bookIndex]; 
    conversation = end; 

}
