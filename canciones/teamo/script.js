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
const mensajesActivos = [];

function hayColision(rect1, rect2) {
  return !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  );
}

function mostrarPensamiento() {
  if (index >= pensamientos.length) index = 0;

  const mensaje = document.createElement('div');
  mensaje.className = 'mensaje';
  mensaje.textContent = pensamientos[index++];

  contenedor.appendChild(mensaje);
  mensaje.style.left = '0px';
  mensaje.style.top = '0px';

  const ancho = mensaje.offsetWidth;
  const alto = mensaje.offsetHeight;
  const margen = 20;

  let intentos = 0;
  let x, y;
  let rectNuevo;
  let colision;

  do {
    x = Math.random() * (window.innerWidth - ancho - margen * 2) + margen;
    y = Math.random() * (window.innerHeight - alto - margen * 2) + margen;
    mensaje.style.left = `${x}px`;
    mensaje.style.top = `${y}px`;

    rectNuevo = mensaje.getBoundingClientRect();
    colision = mensajesActivos.some(r => hayColision(r, rectNuevo));

    intentos++;
  } while (colision && intentos < 100);

  if (intentos >= 100) {
    mensaje.remove();
    return;
  }

  mensajesActivos.push(rectNuevo);

  // Eliminar después de un tiempo y limpiar lista
  setTimeout(() => {
    mensaje.remove();
    mensajesActivos.splice(mensajesActivos.indexOf(rectNuevo), 1);
  }, 15000);
}

mostrarPensamiento();
setInterval(mostrarPensamiento, 1500);
