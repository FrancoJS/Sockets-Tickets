let socket = io();
const $h1 = document.querySelector("h1");
const $button = document.querySelector("button");
const $small = document.querySelector("small");
let searchParams = new URLSearchParams(window.location.search);

if (!searchParams.has("escritorio")) {
  window.location = "index.html";
  throw new Error("El escritorio es necesario");
}

let escritorio = searchParams.get("escritorio");

$h1.textContent = `Escritorio ${escritorio}`;

$button.addEventListener("click", () => {
  socket.emit("atenderTicket", { escritorio }, (data) => {
    if (data === "No hay tickets") {
      $small.textContent = data;
      alert(data);
      return;
    }
    $small.textContent = `Ticket ${data.numero}`;
  });
});
