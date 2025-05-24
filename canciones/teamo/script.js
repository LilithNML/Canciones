const contenedor = document.getElementById('contenedor');

const pensamientos = [
  "Solo pienso en ti.",
  "Tu voz vive en mi mente.",
  "Tu nombre aparece en todos mis pensamientos.",
  "No puedo dejar de imaginarte.",
  "Me haces sonreír sin estar presente.",
  "Eres mi primer pensamiento del día.",
  "Y también el último.",
  "Nada ni nadie ocupa tanto espacio en mí como tú.",
  "Pienso en tus ojos todo el tiempo.",
  "Imagino tu risa cuando cierro los ojos.",
  "Estás en cada rincón de mi mente.",
  "Te amo más de lo que sé decir.",
  "Cada pensamiento tiene tu forma.",
  "Eres mi universo interno.",
  "No hay respiro sin pensarte.",
];

let index = 0;

function mostrarPensamiento() {
  if (index >= pensamientos.length) {
    index = 0; // Repetir pensamientos si se acaban
  }

  const mensaje = document.createElement('div');
  mensaje.classList.add('mensaje');
  mensaje.textContent = pensamientos[index++];

  // Posición aleatoria dentro del viewport
  const padding = 40;
  const x = Math.random() * (window.innerWidth - 200 - padding * 2) + padding;
  const y = Math.random() * (window.innerHeight - 100 - padding * 2) + padding;
  mensaje.style.left = `${x}px`;
  mensaje.style.top = `${y}px`;

  contenedor.appendChild(mensaje);

  // Eliminar después de cierto tiempo
  setTimeout(() => {
    mensaje.remove();
  }, 15000);
}

// Iniciar con uno y luego intervalos
mostrarPensamiento();
setInterval(mostrarPensamiento, 2000);
