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
  if (index >= pensamientos.length) index = 0;

  const mensaje = document.createElement('div');
  mensaje.className = 'mensaje';
  mensaje.textContent = pensamientos[index++];

  // Posición completamente aleatoria por la pantalla
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;

  mensaje.style.left = `${x}px`;
  mensaje.style.top = `${y}px`;

  contenedor.appendChild(mensaje);

  // Desaparecer luego de 15s
  setTimeout(() => mensaje.remove(), 15000);
}

// Mostrar pensamientos de forma creciente
mostrarPensamiento();
setInterval(mostrarPensamiento, 1500);
