//the dialogue 

var index = 0;

var dialogue1 = [
    "  ::The room you awaken in is cold and silent save for the soft hum of electrical generators.", 
    "  ::The only other sign of life in the room is a broken-looking android in the far corner.",
    "  ::Upon noticing you, it calls out in a small, robotic voice.",  
    "?::Oh ... You're not supposed to be here.", 
    "?::Hello, human. I am Andriod CC193.",
    "Andriod CC193::It seems that you have awoken in the middle of your upload.",
    "Andriod CC193::This is an unfortunate development.",
    "Andriod CC193::You must join the rest of mankind in the virtual world as quickly as possible.",
    "Andriod CC193::Although your auto upload malfunctioned, there are enough resources in this laboratory for you to perform a manual transfer.",
    "Andriod CC193::Do you understand what you must do?",  

]

var dialogue2 = [
    "Android CC193:: dialogue 2", 
]

conversation = dialogue1; 

/*
lines of conversation within the conversation list are separated into a name and a line of dialogue by two colons (::)
the name of the person (or robot :D) speaking comes before the separator and their line comes after the two colons
*/ 
colonPos = conversation[index].indexOf("::"); 
document.getElementById("dialogue-text").textContent = conversation[index].substring(colonPos + 2);
document.getElementById("name-text").textContent = conversation[index].substring(0, colonPos); 

const submitButton = document.querySelector("#submit-button");

submitButton.addEventListener('click', e=> {
    if (index < conversation.length) {
        //console.log(dialogue1.indexOf("::"))
        colonPos = conversation[index].indexOf("::"); 
        document.getElementById("dialogue-text").textContent = conversation[index].substring(colonPos + 2);
        document.getElementById("name-text").textContent = conversation[index].substring(0, colonPos); 
        index += 1; 
    }
    else {
        if (conversation = dialogue1) {
            //create two buttons -> one for yes i understand, one for no i need more explaination
        }

    }
})




// the timer
var time_in_minutes = 10;
var current_time = Date.parse(new Date());
var deadline = new Date(current_time + time_in_minutes*60*1000);


function time_remaining(endtime){
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor( (t/1000) % 60 );
	var minutes = Math.floor( (t/1000/60) % 60 );
	var hours = Math.floor( (t/(1000*60*60)) % 24 );
	var days = Math.floor( t/(1000*60*60*24) );
	return {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds};
}

function run_clock(id,endtime){
	var clock = document.getElementById(id);
	function update_clock(){
        var t = time_remaining(endtime);
        if (t.minutes < 10) { //time < 10:00
            timer.textContent = '0' + t.minutes + ':' + t.seconds;
        }
        else if (t.minutes < 10 && t.seconds < 10) {
            timer.textContent = '0' + t.minutes + ':' + '0' + t.seconds;
        }
        else { // time = 10:00
            timer.textContent = t.minutes + ':' + '0' + t.seconds;
        }
        
        if(t.total<=0){ clearInterval(timeinterval); }
	}
    
update_clock(); // run function once at first to avoid delay
var timeinterval = setInterval(update_clock,1000);

}
run_clock('clockdiv',deadline);