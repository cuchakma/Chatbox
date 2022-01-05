let textContent;
let userName;
let msg;
let completeMsg;
let textbox = document.getElementById('text-box');
document.addEventListener('DOMContentLoaded', function(e){
    userName = prompt('What is your name?');
});
textbox.addEventListener('keypress', function(e){
    if(e.key === 'Enter') {
        textContent = document.getElementsByClassName('chat-box-content')[0];
        msg         = document.getElementById('text-box').value;
        textbox.value = '';
        completeMsg = "<p>"+userName+" : "+msg+"</p>";
        textContent.innerHTML += completeMsg;
        textContent.scrollTop = textContent.scrollHeight;
        return false;
    }
});