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

const letraLRC = `00:07.630 -> Come with me into the trees
00:11.880 -> We'll lay on the grass and let hours pass
00:17.080 -> Take my hand, come back to the land
00:21.600 -> Let's get away just for one day
00:26.580 -> Let me see you stripped
00:35.640 -> Let me see you stripped
00:43.140 -> 🎵
01:02.540 -> Metropolis has nothing on this
01:07.240 -> You're breathing in fumes, I taste when we kiss
01:12.430 -> Take my hand, come back to the land
01:16.960 -> Where everything's ours for a few hours
01:23.980 -> Let me see you stripped
01:33.790 -> Let me see you stripped
01:43.320 -> Let me hear you make decisions without your television
01:53.560 -> Let me hear you speaking just for me
02:00.280 -> 🎵
02:21.830 -> Let me see you stripped
02:31.480 -> Let me see you stripped
02:41.110 -> Let me hear you make decisions without your television
02:51.400 -> Let me hear you speaking just for me
03:00.480 -> Let me see you stripped
03:10.060 -> Let me see you stripped
03:19.780 -> Let me see you stripped
03:29.940 -> Let me see you stripped`;

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
