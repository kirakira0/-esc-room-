let specialBooks = [1, 5, 7, 14, 19, 25, 28]; //make a list of the books that get colored

for (let i = 0; i < specialBooks.length; i++) {
    document.getElementById("book" + specialBooks[i]).style.backgroundColor = books.color[i]; //color all of the books
}

var randomInt = Math.floor(Math.random() * 6); //generate a random number between 1 and 7  

document.getElementById("panel-text").style.color = books.color[randomInt]; //randomly set color of panel text (corresponds to one of the 7 books)