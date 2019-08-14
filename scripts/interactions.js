const android = document.querySelector("#android");
const computerElement = document.querySelector("#computer-text"); 
const passwordSubmitButton = document.querySelector("#password-button");

var password = '00000'; 

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
    hint: ['courage', 'small', 'dim', 'translucent', 'red', 'fire', 'king']
}
let specialBooks = [1, 5, 7, 14, 19, 25, 28]; 
for (let i = 0; i < specialBooks.length; i++) {
    // console.log(document.getElementById("book" + specialBooks[i]).textContent); 
    // document.getElementById("book" + specialBooks[i]).textContent = books.titles[i]; 
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
        document.getElementById("message").textContent = "[enter] password"; //define the dialogue
        console.log("clicked computer     " + computer.numConvos); 
    }
})

passwordSubmitButton.addEventListener('click', e=> {
    x = document.getElementById("password-submit"); 
    if ((x.value) === password) {
        document.getElementById("message").textContent = "PASSWORD CORRECT"; 
    }
    else {
        document.getElementById("message").textContent = "PASSWORD INCORRECT"; 
    }
})

panel.addEventListener('click', e => {
    showText(panel1); 
})

for (let i = 0; i < bookQuerySelectors.length; i++) {
    bookQuerySelectors[i].addEventListener('mouseover', e => {
        console.log('printed book'); 
    })
}





