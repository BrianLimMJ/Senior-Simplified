// Click button display text template:
// document.getElementById('btn').addEventListener("click", function display() {
//   document.getElementById('demo').innerHTML = "BOY"});
// -------------------- FB Quiz -----------------------------------\
document.getElementById("fbQuiz").onsubmit=function() {
        chat = parseInt(document.querySelector('input[name = "chat"]:checked').value);
        newChat = parseInt(document.querySelector('input[name = "newChat"]:checked').value);
        send = parseInt(document.querySelector('input[name = "send"]:checked').value);
        messageBox = parseInt(document.querySelector('input[name = "messageBox"]:checked').value);
 
 
        result = chat + newChat + send + messageBox;
 
     document.getElementById("grade").innerHTML = result;

 document.getElementById("grade").innerHTML = result;
 if (result == 0) {result2 = "You're clueless about FaceBook's chat, better luck next time."};
 if (result == 25) {result2 = "You need to spend more time using Facebook, Try again."};
 if (result == 50) {result2 = "You can do better. Try again."};
 if (result == 75) {result2 = "So close. Try again."};
 if (result == 100) {result2 = "Excellent! You have mastered FaceBook's chat function."};
 document.getElementById("grade2").innerHTML = result2;

 
return false; // required to not refresh the page; just leave this here
}



