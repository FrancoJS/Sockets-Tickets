let socket = io();
const $label = document.getElementById("lblNuevoTicket");
const $button = document.querySelector("button");

socket.on("connect", () => {
  console.log("Conectado al servidor");
});

socket.on("disconnect", () => {
  console.log("Desconectado del servidor");
});

socket.on("estadoActual", (data) => {
  $label.textContent = data.actual;
});

$button.addEventListener("click", function () {
  socket.emit("siguienteTicket", null, (siguienteTicket) => {
    $label.textContent = siguienteTicket;
  });
});
