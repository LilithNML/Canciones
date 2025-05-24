const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const frases = ["te amo", "mi vida", "mi amor", "mi princesa", "mi niño"];
const fontSize = 32;
const cantidad = 25;

const lineas = Array.from({ length: cantidad }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  velocidad: 0.5 + Math.random(),
  texto: frases[Math.floor(Math.random() * frases.length)]
}));

function dibujar() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00FF00";
  ctx.font = fontSize + "px monospace";

  for (let linea of lineas) {
    ctx.fillText(linea.texto, linea.x, linea.y);
    linea.y += linea.velocidad;

    if (linea.y > canvas.height) {
      linea.y = -fontSize;
      linea.x = Math.random() * canvas.width;
      linea.texto = frases[Math.floor(Math.random() * frases.length)];
    }
  }

  requestAnimationFrame(dibujar);
}

dibujar();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
