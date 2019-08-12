document.getElementById("view1").style.display = "block"; 
document.getElementById("view2").style.display = "none";
document.getElementById("view3").style.display = "none";
document.getElementById("view4").style.display = "none";



document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        console.log("up arrow pressed"); 
    }
    else if (e.keyCode == '40') {
        console.log("down arrow pressed"); 

    }
    else if (e.keyCode == '37') {
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
    else if (e.keyCode == '39') {
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
