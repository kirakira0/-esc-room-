let specialBooks = [1, 5, 7, 14, 19, 25, 28]; //make a list of the books that get colored

for (let i = 0; i < specialBooks.length; i++) {
    document.getElementById("book" + specialBooks[i]).style.backgroundColor = books.color[i]; //color all of the books
}

var randomInt = Math.floor(Math.random() * 6); //generate a random number between 1 and 7  

document.getElementById("panel-text").style.color = books.color[randomInt]; //randomly set color of panel text (corresponds to one of the 7 books)

//set code to the AUTHOR of the book whose cover color matches the panel text color 
code = books.authors[randomInt]; 
console.log(code); 

codeSubmitButton.addEventListener('click', e=> {
    // console.log('code'); 
    userSubmittedCode = document.getElementById('code-submit'); 
    if (userSubmittedCode === code) { //they got it right 
        document.getElementById('message').textContent = "CODE ENTERED"; 
    }
    else { //they got it wrong
        document.getElementById('message').textContent = "INCORRECT"; 
    }
})


// passwordSubmitButton.addEventListener('click', e=> {
//     x = document.getElementById("password-submit"); 
//     if ((x.value) === password) { //what to do when the user enters the correct password 
//         document.getElementById("message").textContent = "PASSWORD CORRECT"; 
//         computer.numConvos = 2; 
//         document.getElementById("copyright").style.display = "none"; //hide the copyright notice
//         // document.getElementById("message").style.display = "none"; 
//         // document.getElementById("hint").style.display = "none"; 
//         document.getElementById("password-box").style.display = "none"; 
//         document.getElementById("hint").textContent = "error: code required to launch UPLOAD -- hint: creator"; 
//         document.getElementById('code-box').style.display = "block"; 

//     }
//     else {
//         document.getElementById("message").textContent = "PASSWORD INCORRECT"; 
//     }
// })