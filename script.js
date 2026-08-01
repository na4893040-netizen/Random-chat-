const socket = io();

function sendMessage() {
  const input = document.getElementById("message");
  const message = input.value;

  if (message.trim() !== "") {
    socket.emit("chat message", message);
    input.value = "";
  }
}

socket.on("chat message", function(msg) {
  const chatBox = document.getElementById("chatBox");
  chatBox.innerHTML += "<p>" + msg + "</p>";
  chatBox.scrollTop = chatBox.scrollHeight;
});
