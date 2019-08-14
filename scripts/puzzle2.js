let specialBooks = [1, 5, 7, 14, 19, 25, 28]; 
for (let i = 0; i < specialBooks.length; i++) {
    // console.log(document.getElementById("book" + specialBooks[i]).textContent); 
    document.getElementById("book" + specialBooks[i]).style.backgroundColor = books.color[i]; 
}