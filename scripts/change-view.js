document.getElementById("view1").style.display = "inline-block"; 
document.getElementById("view2").style.display = "none";
document.getElementById("view3").style.display = "none";
document.getElementById("view4").style.display = "none";
document.getElementById("view5").style.display = "none";
document.getElementById("view6").style.display = "none";
document.getElementById("view7").style.display = "none";
document.getElementById("view8").style.display = "none";



let currentView = 1; 

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38' || e.keyCode == '87') { //UP ARROW KEY OR 'W'
        console.log("up arrow pressed"); 
    }
    else if (e.keyCode == '40' || e.keyCode == "83") { //DOWN ARROW KEY OR 'S'
        console.log("down arrow pressed"); 

    }
    else if (e.keyCode == '37' || e.keyCode == '65') { //LEFT ARROW KEY OR 'A'
        console.log(currentView); 
            
        currentView--;
        if (currentView == 0) {
            currentView = 8; 
        }

        showView(); 

    }
    else if (e.keyCode == '39' || e.keyCode == '68') { //RIGHT ARROW KEY OR 'D' 
        console.log(currentView); 
        
        currentView++;
        if (currentView == 9) {
            currentView = 1; 
        }

        showView(); 

    }

}

function showView() {
    for (let i = 1; i <= 8; i++) {

        const element = document.querySelector(`#view${i}`); 
        if (i === currentView) {
            element.style.display = "inline-block"; 
        }
        else {
            console.log(`#view${i}`); 
            element.style.display = "none"; 
        }
    }
}