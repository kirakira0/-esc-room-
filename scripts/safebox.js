const screwdriver = [
    "::There's a screwdriver inside the safe.",
    "::[OBTAINED SCREWDRIVER]",
    "end::"
]

const safeButton = document.querySelector('#safe-button'); 
document.getElementById('safe-code').style.display = "block"; 
correctPassword = "lucille industries"; 

safeButton.addEventListener('click', e=> {
    console.log(document.getElementById('safe-submit').value); 
    if (document.getElementById('safe-submit').value.toLowerCase().replace(/the /g, '').replace(/[^a-z0-9]/g, "") === correctPassword.toLowerCase().replace(/the /g, '').replace(/[^a-z0-9]/g, "")) {
        document.getElementById('safe-code').style.display = "none"; 
        obtainedScrewdriver = true; 
        showText(screwdriver); //display screwdriver text  
        resetDialogue(); 
    }
    
})