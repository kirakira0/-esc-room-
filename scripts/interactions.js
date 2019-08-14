const android = document.querySelector("#android");
const computerElement = document.querySelector("#computer-text"); 
const passwordSubmitButton = document.querySelector("#password-button");
const codeSubmitButton = document.querySelector('#code-button'); 
const keySubmitButton = document.querySelector('#key-button'); 
const doorsClosed = true; 

var puzzle1Solved = false; 
var puzzle2Solved = true; 

let x = document.getElementById("password-submit").value ; 

const panel = document.querySelector('#panel'); 
const bookQuerySelectors = document.querySelectorAll('.book'); 


const computer = {
    numConvos: 0
}

const books = {
    titles: ["Brave New World", "Little Women", "Heart of Darkness", "Invisible Man", "The Scarlet Letter", "Fahrenheit 451", "Lord of the Flies"],
    authors: ["Adolphus Huxley", "Louisa May Alcott", "Joseph Conrad", "Ralph Ellison", "Nathaniel Hawthorne", "Ray Bradbury", "William Golding"],
    id: ["16729", '28871', '27711', '98900', '11524', '08999', '26915'],
    hint: ['courage', 'small', 'dim', 'translucent', 'red', 'fire', 'king'], 
    color: ['#58b4bf', '#2d818c', '#659bc2', '#306c96', '#364f61', '#18354a', '#082666']
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
    else if (computer.numConvos === 2) {
        showText(android4); 
        resetDialogue(); 
    }

    if (puzzle2Solved) {
        showText(android5); 
        resetDialogue(); 
    }
     
})



var panelClicks = 0; 

panel.addEventListener('click', e => {
    if (panelClicks === 1) {
        panelClicks = 2; 
        showText(panel2); 
        resetDialogue(); 
    }
    else if (panelClicks === 0) {
        panelClicks = 1; 
        showText(panel1); 
        resetDialogue(); 
    }

})




//THE BOOK ID PUZZLE 

var passwordIndex = Math.floor(Math.random() * 6); //generate a random number between 1 and 7  
var password = books.id[passwordIndex]; //set the password 
//document.getElementById("hint").textContent = books.hint[passwordIndex]; //add the appropriate hint 
console.log(password);  

const book1 = document.querySelector('#book1'); 
const book2 = document.querySelector('#book5'); 
const book3 = document.querySelector('#book7'); 
const book4 = document.querySelector('#book14'); 
const book5 = document.querySelector('#book19'); 
const book6 = document.querySelector('#book25'); 
const book7 = document.querySelector('#book28'); 

book1.addEventListener('click', e=>{
    displayBookInfo(0); 
})
book2.addEventListener('click', e=>{
    displayBookInfo(1); 
})
book3.addEventListener('click', e=>{
    displayBookInfo(2); 
})
book4.addEventListener('click', e=>{
    displayBookInfo(3); 
})
book5.addEventListener('click', e=>{
    displayBookInfo(4); 
})
book6.addEventListener('click', e=>{
    displayBookInfo(5); 
})
book7.addEventListener('click', e=>{
    displayBookInfo(6); 
})

console.log(book1.style); 

// for (let i = 0; i < bookQuerySelectors.length; i++) {
//     bookQuerySelectors[i].addEventListener('click', e => {
//         console.log('clicked book'); 
//         displayBookInfo(); 
//     })
// }

document.getElementById('code-box').style.display = "none"; 
document.getElementById('key-box').style.display = "none"; 

passwordSubmitButton.addEventListener('click', e=> {
    x = document.getElementById("password-submit"); 
    if ((x.value) === password) { //what to do when the user enters the correct password 
        
        puzzle1Solved = true;
        
        document.getElementById("message").textContent = "PASSWORD CORRECT"; 
        computer.numConvos = 2; 
        document.getElementById("copyright").style.display = "none"; //hide the copyright notice
        // document.getElementById("message").style.display = "none"; 
        // document.getElementById("hint").style.display = "none"; 
        document.getElementById("password-box").style.display = "none"; 
        document.getElementById("hint").textContent = "error: manual security overridecode required -- please enter password -- hint: creator"; 
        document.getElementById('code-box').style.display = "block"; 

        

    }
    else {
        document.getElementById("message").textContent = "PASSWORD INCORRECT"; 
    }
})


computerElement.addEventListener('click', e=> {
    var clicks = 0; 
    //if ... check cases, call different text for each  

    // if (!puzzle1Solved) {
        if (computer.numConvos === 1) {
            //document.getElementById("hint").textContent = "[book hint]"; //define the dialogue
            document.getElementById("hint").textContent = "hint: " + books.hint[passwordIndex]; //add the appropriate hint 
        }   
        else if (computer.numConvos === 0) {
            computer.numConvos++; 
            //showText( computer1 );
            document.getElementById("message").textContent = "[enter] password"; //define the dialogue
            console.log("clicked computer     " + computer.numConvos); 
        }
        else if (computer.numConvos === 2) { //CONVERSATION AFTER PUZZLE 1 HAS BEEN COMPLETED

        }
    // }
    else {

    }



   
})


