document.getElementById("waQuiz").onsubmit=function() {
    traits = parseInt(document.querySelector('input[name = "traits"]:checked').value);
    confirmed = parseInt(document.querySelector('input[name = "confirmed"]:checked').value);
    action = parseInt(document.querySelector('input[name = "action"]:checked').value);
    prevent = parseInt(document.querySelector('input[name = "prevent"]:checked').value);


    result = traits + confirmed + action + prevent;

 document.getElementById("grade").innerHTML = result;

document.getElementById("grade").innerHTML = result;
if (result == 0) {result2 = "You're clueless about Scammers, better luck next time."};
if (result == 25) {result2 = "You need to spend more time using WhatsApp, Try again." };
if (result == 50) {result2 = "You can do better. Try again."};
if (result == 75) {result2 = "So close. Try again."};
if (result == 100) {result2 = "Excellent! You know how to deal with a scammer!."};
document.getElementById("grade2").innerHTML = result2;


return false; // required to not refresh the page; just leave this here
}