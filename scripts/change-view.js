document.getElementById("view1").style.display = "block"; 
document.getElementById("view2").style.display = "none";
document.getElementById("view3").style.display = "none";
document.getElementById("view4").style.display = "none";



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
        console.log("left arrow pressed"); 
        if (document.getElementById("view1").style.display == "block") { //if currently in room 1
            document.getElementById("view1").style.display = "none"; 
            document.getElementById("view4").style.display = "block";
        }
        else if (document.getElementById("view2").style.display == "block") { //if currently in room 2
            document.getElementById("view2").style.display = "none"; 
            document.getElementById("view1").style.display = "block";
        }
        else if (document.getElementById("view3").style.display == "block") { //if currently in room 3
            document.getElementById("view3").style.display = "none"; 
            document.getElementById("view2").style.display = "block";
        }
        else if (document.getElementById("view4").style.display == "block") { //if currently in room 4
            document.getElementById("view4").style.display = "none"; 
            document.getElementById("view3").style.display = "block";
        }

    }
    else if (e.keyCode == '39' || e.keyCode == '68') { //RIGHT ARROW KEY OR 'D' 
        console.log("right arrow pressed"); 
        if (document.getElementById("view1").style.display == "block") { //if currently in room 1
            document.getElementById("view1").style.display = "none"; 
            document.getElementById("view2").style.display = "block";
        }
        else if (document.getElementById("view2").style.display == "block") { //if currently in room 2
            document.getElementById("view2").style.display = "none"; 
            document.getElementById("view3").style.display = "block";
        }
        else if (document.getElementById("view3").style.display == "block") { //if currently in room 3
            document.getElementById("view3").style.display = "none"; 
            document.getElementById("view4").style.display = "block";
        }
        else if (document.getElementById("view4").style.display == "block") { //if currently in room 4
            document.getElementById("view4").style.display = "none"; 
            document.getElementById("view1").style.display = "block";
        }

    }

}
