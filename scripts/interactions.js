const android = document.querySelector("#android");
const computerElement = document.querySelector("#computer-text"); 
const passwordSubmitButton = document.querySelector("#password-button");
var password = '00000'; 
let x = document.getElementById("password-submit").value ; 

const computer = {
    numConvos: 0
}

const books = {
    titles: ["Brave New World", "Little Women", "The Alchemist", "The Bluest Eye", "Animal Farm", "1984", "Huckleberry Finn"],
    authors: ["Adolphus Huxley", "Louisa May Alcott", "Paulo Coelho", "Toni Morrison", "George Orwell", "George Orwell", "Mark Twain"],
    id: ["16729", '28871', '27711', '98900', '11524', '08999', '26915']
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
        document.getElementById("message").textContent = "error: [UP ARROW] to enter password"; //define the dialogue
        console.log("clicked computer     " + computer.numConvos); 
    }
})

passwordSubmitButton.addEventListener('click', e=> {
    console.log("clciked submit"); 
    x = document.getElementById("password-submit"); 
    if ((x.value) === password) {
        document.getElementById("message").textContent = "PASSWORD CORRECT"; 
    }
    else {
        document.getElementById("message").textContent = "PASSWORD INCORRECT"; 
    }
})


