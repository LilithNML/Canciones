function iniciarCancion() {
  const pantallaInicial = document.getElementById('pantalla-inicial');
  const pantallaCancion = document.getElementById('pantalla-cancion');
  pantallaInicial.classList.remove('fade-in');
  pantallaInicial.classList.add('fade-out');

  setTimeout(() => {
    pantallaInicial.classList.add('oculto');
    pantallaCancion.classList.remove('oculto');
    pantallaCancion.classList.remove('fade-out');
    pantallaCancion.classList.add('fade-in');
    document.getElementById('audio').play();
    mostrarLetraSincronizada();
  }, 1000);
}

const letraLRC = `00:38.076 -> Le dijeron: "No vengas nunca por aquí
00:41.249 -> No quiero ver tu cara, será mejor que desaparezcas"
00:44.445 -> El fuego está en sus ojos y sus palabras son realmente claras
00:48.046 -> Así que lárgate, sólo lárgate (Ooh!)
00:52.137 -> Más vale que corras, más vale que hagas lo que puedas (Ooh!)
00:55.101 -> No quiero ver sangre, no seas machista (Ooh!)
00:58.259 -> Si quieres ser duro, mejor haz lo que puedas
01:01.774 -> Así que lárgate, pero quieres ser malo
01:05.319 -> 
01:05.319 -> Solo lárgate, lárgate, lárgate, lárgate 
01:09.088 -> Nadie quiere ser derrotado
01:12.228 -> Mostrando lo funky y fuerte que es tu lucha
01:15.633 -> No importa quién esté equivocado o tenga razón
01:19.143 -> Sólo lárgate (Lárgate)
01:20.817 -> Sólo lárgate (Lárgate)
01:22.572 -> Sólo lárgate (Lárgate)
01:24.351 -> Sólo lárgate (Lárgate, eh)
01:26.440 -> 
01:26.440 -> Van por ti, mejor vete mientras puedas
01:29.600 -> No quieres ser un niño, quieres ser un hombre
01:33.020 -> Si quieres seguir vivo, mejor haz lo que puedas
01:36.372 -> Así que lárgate, sólo lárgate (Ooh!)
01:40.269 -> Tienes que mostrarles que realmente no tienes miedo (Ooh!)
01:43.535 -> Estás jugando con tu vida, esto no es una verdad o un desafío (Ooh!)
01:46.763 -> Te patearán, luego te golpearán, luego te dirán que es justo
01:50.283 -> Así que lárgate, pero quieres ser malo
01:53.784 -> 
01:53.784 -> Solo lárgate, lárgate, lárgate, lárgate 
01:57.312 -> Nadie quiere ser derrotado
02:00.645 -> Mostrando lo funky y fuerte que es tu lucha
02:04.295 -> No importa quién esté equivocado o tenga razón
02:07.569 -> Solo lárgate, lárgate, lárgate, lárgate 
02:11.120 -> Nadie quiere ser derrotado
02:14.543 -> Mostrando lo funky y fuerte que es tu lucha
02:17.862 -> No importa quién esté equivocado o tenga razón
02:21.429 -> Solo lárgate, lárgate, lárgate, lárgate
02:24.499 -> Lárgate (Lárgate, lárgate, ha, ha, ha, ha)
02:31.070 -> Lárgate (Lárgate , lárgate)
02:33.742 -> Lárgate (Lárgate , lárgate)
02:40.694 -> Lárgate (Lárgate , lárgate)
02:42.742 -> 
02:43.350 -> 
03:15.777 -> 
03:17.047 -> Lárgate, lárgate, lárgate, lárgate
03:20.328 -> Nadie quiere ser derrotado
03:23.709 -> Mostrando lo funky y fuerte que es tu lucha
03:27.161 -> No importa quién esté equivocado o tenga razón (Quien tiene razón)
03:30.538 -> Sólo lárgate, lárgate, lárgate, lárgate (Hoo-hoo!)
03:34.245 -> Nadie quiere ser derrotado (Oh, lord)
03:37.653 -> Mostrando lo funky y fuerte que es tu lucha (Hee-hee-hee!)
03:40.912 -> No importa quién esté equivocado o tenga razón
03:44.317 -> Sólo lárgate, lárgate, lárgate, lárgate
03:47.973 -> Nadie quiere ser derrotado (Oh-no!)
03:51.477 -> Mostrando lo funky que es (Hoo-hoo!) Y fuerte es tu lucha (Hee-hee! Hoo!)
03:54.842 -> No importa quién esté equivocado o tenga razón
03:58.264 -> Sólo lárgate, lárgate, lárgate, lárgate
04:01.829 -> Nadie quiere ser derrotado 
04:05.298 -> Mostrando lo funky y fuerte que es tu lucha
04:08.628 -> No importa quién esté equivocado o tenga razón (Quien tiene razón)
04:12.227 -> Sólo lárgate, lárgate, lárgate, lárgate (Hoo-hoo!)
04:15.754 -> Nadie quiere ser derrotado`;

function mostrarLetraSincronizada() {
  const audio = document.getElementById('audio');
  const contenedor = document.getElementById('letra-container');
  const lineas = [];

  letraLRC.split('\n').forEach(l => {
    const match = l.match(/(\d+):(\d+\.\d+)\s*->\s*(.*)/);
    if (match) {
      const tiempo = parseInt(match[1]) * 60 + parseFloat(match[2]);
      const texto = match[3].trim();
      const elemento = document.createElement('div');
      elemento.textContent = texto;
      elemento.className = 'linea';
      contenedor.appendChild(elemento);
      lineas.push({ tiempo, elemento });
    }
  });

  audio.ontimeupdate = () => {
    const tiempoActual = audio.currentTime;
    for (let i = 0; i < lineas.length; i++) {
      const actual = lineas[i];
      const siguiente = lineas[i + 1];
      if (!siguiente || tiempoActual < siguiente.tiempo) {
        lineas.forEach(l => l.elemento.classList.remove('activa'));
        actual.elemento.classList.add('activa');
        actual.elemento.scrollIntoView({ behavior: 'smooth', block: 'center' });
        break;
      }
    }
  };
    }
