const screw1 = document.querySelector('#screw1'); 
const screw2 = document.querySelector('#screw2'); 
const screw3 = document.querySelector('#screw3'); 
const screw4 = document.querySelector('#screw4'); 

document.getElementById('screw1').style.display = "block"; 
document.getElementById('screw2').style.display = "block"; 
document.getElementById('screw3').style.display = "block"; 
document.getElementById('screw4').style.display = "block"; 


screw1.addEventListener('click', e=> {
    if (obtainedScrewdriver) {
        document.getElementById('screw1').style.backgroundColor = "black"; 
    }
})
screw2.addEventListener('click', e=> {
    if (obtainedScrewdriver) {
        document.getElementById('screw2').style.backgroundColor = "black"; 
    }
})
screw3.addEventListener('click', e=> {
    if (obtainedScrewdriver) {
        document.getElementById('screw3').style.backgroundColor = "black"; 
    }
})
screw4.addEventListener('click', e=> {
    if (obtainedScrewdriver) {
        document.getElementById('screw4').style.backgroundColor = "black"; 
    }
})


