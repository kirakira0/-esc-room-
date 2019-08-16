const screw1 = document.querySelector('#screw1'); 
const screw2 = document.querySelector('#screw2'); 
const screw3 = document.querySelector('#screw3'); 
const screw4 = document.querySelector('#screw4'); 
const slidingPanel = document.querySelector('#panel'); 

document.getElementById('screw1').style.display = "block"; 
document.getElementById('screw2').style.display = "block"; 
document.getElementById('screw3').style.display = "block"; 
document.getElementById('screw4').style.display = "block"; 

function hideScrew(screwNumber) {
    // if (obtainedScrewdriver) {
        document.getElementById('screw' + screwNumber).style.backgroundColor = "black"; 
        screw1Color = document.getElementById('screw1').style.backgroundColor; 
        screw2Color = document.getElementById('screw2').style.backgroundColor; 
        screw3Color = document.getElementById('screw3').style.backgroundColor; 
        screw4Color = document.getElementById('screw4').style.backgroundColor;
    // }
    if (screw1Color == "black" && screw2Color == "black" && screw3Color == "black" && screw4Color == "black") {
        document.getElementById('panel').style.opacity = 0; 
        puzzle3Solved = true; 
        console.log('davgf'); 
    }
}

screw1.addEventListener('click', e=> {
    hideScrew('1'); 
})
screw2.addEventListener('click', e=> {
    hideScrew('2'); 
})
screw3.addEventListener('click', e=> {
    hideScrew('3');
})
screw4.addEventListener('click', e=> {
    hideScrew('4'); 
})

const names = [
    'Toal',
    'Masao',
    'Talia',
    'Luis',
    'Andrew',
    'Ryan'
]

newRandomInt = Math.floor(Math.random() * 5); 
document.getElementById('secret-message').textContent = 'final code: thanks, ' + names[newRandomInt]; 
finalCode = 'final code: thanks, ' + names[newRandomInt]
console.log(finalCode); 








