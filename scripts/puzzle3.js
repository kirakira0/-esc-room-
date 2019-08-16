keySubmitButton.addEventListener('click', e=> {
    userSubmittedKey = document.getElementById('key-submit').value;
    if (finalCode.toLowerCase().replace(/the /g, '').replace(/[^a-z0-9]/g, "") === userSubmittedKey.toLowerCase().replace(/the /g, '').replace(/[^a-z0-9]/g, "")) {
        // window.location.href = '/win-ver1?seconds=' +
        //     secondsRemaining();
        window.location.href = '/win-ver1?seconds=' +
            secondsRemaining();

    }
})
