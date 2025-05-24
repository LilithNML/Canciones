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
const margenSeguridad = 20;
const distanciaMinima = 60;

function hayColision(rect1, rect2, padding = distanciaMinima) {
  return !(
    rect1.right + padding < rect2.left ||
    rect1.left - padding > rect2.right ||
    rect1.bottom + padding < rect2.top ||
    rect1.top - padding > rect2.bottom
  );
}

function mostrarPensamiento() {
  if (index >= pensamientos.length) index = 0;

  const mensaje = document.createElement('div');
  mensaje.className = 'mensaje';
  mensaje.textContent = pensamientos[index++];

  contenedor.appendChild(mensaje);

  let intentos = 0;
  let x, y, rectNuevo, colision;

  do {
    x = Math.random() * (window.innerWidth - 200 - margenSeguridad * 2) + margenSeguridad;
    y = Math.random() * (window.innerHeight - 100 - margenSeguridad * 2) + margenSeguridad;

    mensaje.style.left = `${x}px`;
    mensaje.style.top = `${y}px`;

    rectNuevo = mensaje.getBoundingClientRect();
    colision = mensajesActivos.some(r => hayColision(r, rectNuevo));

    intentos++;
  } while ((colision || !estaDentroDePantalla(rectNuevo)) && intentos < 100);

  if (intentos >= 100) {
    mensaje.remove();
    return;
  }

  mensajesActivos.push(rectNuevo);

  setTimeout(() => {
    mensaje.remove();
    const index = mensajesActivos.indexOf(rectNuevo);
    if (index > -1) mensajesActivos.splice(index, 1);
  }, 15000);
}

function estaDentroDePantalla(rect) {
  return (
    rect.left >= 0 + margenSeguridad &&
    rect.top >= 0 + margenSeguridad &&
    rect.right <= window.innerWidth - margenSeguridad &&
    rect.bottom <= window.innerHeight - margenSeguridad
  );
}

mostrarPensamiento();
setInterval(mostrarPensamiento, 1500);
