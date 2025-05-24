const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const palabra = "te amo ";
const fontSize = 20;
const columnas = canvas.width / fontSize;
const gotas = Array.from({ length: columnas }, () => 1);

function dibujar() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00FF00";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < gotas.length; i++) {
    const letra = palabra[Math.floor(Math.random() * palabra.length)];
    ctx.fillText(letra, i * fontSize, gotas[i] * fontSize);

    if (gotas[i] * fontSize > canvas.height && Math.random() > 0.975) {
      gotas[i] = 0;
    }

    gotas[i]++;
  }

  requestAnimationFrame(dibujar);
}

dibujar();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
