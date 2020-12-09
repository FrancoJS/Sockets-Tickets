const d = document;
let socket = io();

const $lblTicket1 = d.getElementById("lblTicket1"),
  $lblTicket2 = d.getElementById("lblTicket2"),
  $lblTicket3 = d.getElementById("lblTicket3"),
  $lblTicket4 = d.getElementById("lblTicket4");

const $lblEscritorio1 = d.getElementById("lblEscritorio1"),
  $lblEscritorio2 = d.getElementById("lblEscritorio2"),
  $lblEscritorio3 = d.getElementById("lblEscritorio3"),
  $lblEscritorio4 = d.getElementById("lblEscritorio4");

let lblTickets = [$lblTicket1, $lblTicket2, $lblTicket3, $lblTicket4];
let lblEscritorios = [$lblEscritorio1, $lblEscritorio2, $lblEscritorio3, $lblEscritorio4];

socket.on("estadoActual", (data) => {
  actualizaHTML(data.ultimos4);
});

socket.on("ultimos4", (data) => {
  let audio = new Audio("audio/new-ticket.mp3");
  audio.play();
  actualizaHTML(data.ultimos4);
});

function actualizaHTML(ultimos4) {
  for (i = 0; i <= ultimos4.length - 1; i++) {
    lblTickets[i].textContent = `Ticket ${ultimos4[i].numero}`;
    lblEscritorios[i].textContent = `Escritorio ${ultimos4[i].escritorio}`;
  }
}
