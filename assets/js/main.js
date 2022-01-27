let textContent;
let userName;
let msg;
let completeMsg;
let textbox = document.getElementById('text-box');

document.addEventListener('DOMContentLoaded', function(e){
    userName = 'tauseed'; // prompt('What is your name?');
    userName = (userName === '') ? 'Anonymous#'+Math.floor(Math.random() * (100000 - 1 + 1)) : userName;
});

textbox.addEventListener('keypress', function(e){
    if(e.key === 'Enter') {
        textContentScroll = document.getElementsByClassName('chat-box-content')[0];
        textContent       = document.getElementsByClassName('conversation-group')[0];
        msg               = document.getElementById('text-box').value;
        textbox.value     = "";
        completeMsg       = "<div class='message message-box send'><p> "+msg+"</p></div>";
        textContent.innerHTML += completeMsg;
        textContentScroll.scrollTop = textContentScroll.scrollHeight;
        return false;
    }
});