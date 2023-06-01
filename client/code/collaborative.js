const socket = io();
var roomId;

socket.on("logon", (success, error) => {
    roomId = success;
    var pageUrl = '?rid=' + roomId;
    window.history.pushState('', '', pageUrl);
    loadGame();
    const loggingIn = document.getElementById("loggingIn");
    loggingIn.classList.add("transition");
    setTimeout(() => {
        loggingIn.remove();
    }, 300);
});

const header = document.createElement("header");
document.body.appendChild(header);

function loadGame(){
    header.classList.remove("transition");
    const roomIdEl = document.createElement("p");
    roomIdEl.innerHTML = "Room code <a>" + roomId + "</a>";
    header.appendChild(roomIdEl);
}