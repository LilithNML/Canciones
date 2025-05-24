const contenedor = document.getElementById('contenedor');

// Mensajes/pensamientos que quieres mostrar
const pensamientos = [
  "Solo pienso en ti.",
  "¿Dónde estarás ahora?",
  "Tu sonrisa no sale de mi mente.",
  "Cada instante contigo es mágico.",
  "Siento tu abrazo aunque estés lejos.",
  "Mi corazón late solo por ti.",
  "Eres mi paz y mi tormenta.",
  "Tu voz es mi melodía favorita.",
  "Imagino nuestro futuro juntos.",
  "Quisiera detener el tiempo a tu lado.",
  "Nada más importa cuando pienso en ti.",
  "Eres mi pensamiento constante.",
  "Me haces sentir completo/a.",
  "Cada detalle tuyo me enamora más.",
  "Gracias por existir en mi vida.",
];

// Control para no saturar la pantalla
const maxMensajesEnPantalla = 20;
let index = 0;

function mostrarMensaje() {
  if(index >= pensamientos.length) {
    index = 0; // Repetir ciclo
  }

  const mensaje = document.createElement('div');
  mensaje.classList.add('mensaje');
  mensaje.textContent = pensamientos[index];
  contenedor.appendChild(mensaje);

  // Mantener solo un número máximo de mensajes
  if (contenedor.children.length > maxMensajesEnPantalla) {
    contenedor.removeChild(contenedor.firstChild);
  }

  index++;
}

// Mostrar el primer mensaje inmediatamente
mostrarMensaje();

// Luego mostrar mensajes cada 2 segundos
setInterval(mostrarMensaje, 2000);
