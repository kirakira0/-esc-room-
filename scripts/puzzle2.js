let specialBooks = [1, 5, 7, 14, 19, 25, 28]; //make a list of the books that get colored

for (let i = 0; i < specialBooks.length; i++) {
    document.getElementById("book" + specialBooks[i]).style.backgroundColor = books.color[i]; //color all of the books
}

var randomInt = Math.floor(Math.random() * 6); //generate a random number between 1 and 7  

document.getElementById("panel-text").style.color = books.color[randomInt]; //randomly set color of panel text (corresponds to one of the 7 books)
userSubmittedCode = document.getElementById("code-submit"); 

//set code to the AUTHOR of the book whose cover color matches the panel text color 
code = books.authors[randomInt]; 
console.log(code);

codeSubmitButton.addEventListener('click', e=> {
    console.log(userSubmittedCode.value.toLowerCase().replace(/the /g, '').replace(/[^a-z0-9]/g, "")); 
    userSubmittedCode = document.getElementById('code-submit'); 
    if (userSubmittedCode.value.toLowerCase().replace(/the /g, '').replace(/[^a-z0-9]/g, "") === code.toLowerCase().replace(/the /g, '').replace(/[^a-z0-9]/g, "")) { //they got it right 
        
        document.getElementById('hint').textContent = "CODE ENTERED -- SECURITY DOWN";  //sucess message 
        document.getElementById('code-box').style.display = "none"; //hide the code submit box 
        puzzle2Solved = true; 
        document.getElementById("view2").style.backgroundColor = 'red'; 

    }
    else { //they got it wrong
        document.getElementById('hint').textContent = "INCORRECT"; 
    }
})