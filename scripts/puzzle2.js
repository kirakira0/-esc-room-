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
        document.getElementById('key-box').style.display = "block"; 
    }
    else { //they got it wrong
        document.getElementById('hint').textContent = "INCORRECT"; 
    }
})

doorLeft.addEventListener('click', e=>{
    if (puzzle2Solved) {     
        console.log('not yet opened');         
        doorLeftOpened = true; 
        console.log("clicked door left"); 
        console.log(doorLeftOpened); 

        //doors
        document.getElementById("door-left").style.width = '40px'; 
        document.getElementById("door-left").style.marginRight = '69px'; 
        document.getElementById("door-right").style.width = '40px'; 
        document.getElementById("door-right").style.marginLeft = '50px';
        //doorknobs
        document.getElementById("right-knob").style.width = '4px'; 
        document.getElementById("left-knob").style.width = '4px'; 

        doorsOpened = true; 
    }
})

doorRight.addEventListener('click', e=>{
    if (puzzle2Solved) { 
        console.log('not yet opened');         
        doorRightOpened = true; 
        console.log("clicked door left"); 
        console.log(doorLeftOpened); 

        //doors
        document.getElementById("door-left").style.width = '40px'; 
        document.getElementById("door-left").style.marginRight = '69px'; 
        document.getElementById("door-right").style.width = '40px'; 
        document.getElementById("door-right").style.marginLeft = '50px';
        //doorknobs
        document.getElementById("right-knob").style.width = '4px'; 
        document.getElementById("left-knob").style.width = '4px'; 

        doorsOpened = true;
    }
})


if (doorLeftOpened && doorRightOpened) {
    console.log("the doors have opened"); 
}
