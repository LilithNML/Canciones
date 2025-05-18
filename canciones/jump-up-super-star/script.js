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

const letraLRC = `00:11.900 -> Here we go
00:12.320 -> Off the rails
00:13.330 -> Don't you know it's time to raise our sails?
00:16.470 -> It's freedom like you never knew
00:20.560 -> Don't need bags or a pass
00:22.820 -> Say the word, I'll be there in a flash
00:25.530 -> You could say my hat is off to you
00:29.480 -> Oh we can zoom all the way to the moon
00:31.800 -> From this great wide wacky world
00:34.800 -> Jump with me
00:35.840 -> Grab coins with me
00:36.960 -> Oh yeah!
00:41.170 -> It's time to jump up in the air
00:44.300 -> Jump up, don't be scared
00:46.530 -> Jump up and your cares will soar away
00:50.580 -> And if the dark clouds start to swirl
00:53.590 -> Don't fear, don't shed a tear 'cause
00:56.160 -> I'll be your 1-UP girl
00:59.830 -> So let's all jump up super high!
01:03.330 -> High up in the sky!
01:05.550 -> There's no power-up like dancing
01:09.380 -> You know that you're my Super Star
01:12.450 -> No one else can take me this far
01:14.900 -> I'm flipping the Switch
01:17.080 -> Get ready for this
01:18.830 -> Oh, let's do the Odyssey
01:25.960 -> Odyssey-- Yes, see!
01:28.100 -> Odyssey-- Yes, see!
01:30.580 -> Odyssey-- Yes, see!
01:32.890 -> Odyssey-- Yes, see!
01:35.010 -> Odyssey-- Yes, see!
01:37.480 -> Odyssey-- Yes, see!
01:41.400 -> Odyssey, Odyssey!
01:48.650 -> Spin the wheel
01:49.850 -> Take a chance
01:51.050 -> Every journey starts a new romance
01:54.070 -> A new world's calling out to you
01:58.280 -> Take a turn
01:59.350 -> Off the path
02:00.670 -> Find a new addition to the cast
02:03.170 -> You know that any captain needs a crew
02:07.090 -> Take it in stride as you move, side to side
02:09.330 -> They're just different points of view
02:12.640 -> Jump with me
02:13.590 -> Grab coins with me
02:14.560 -> Oh yeah!
02:18.730 -> Come on and jump up in the air
02:21.980 -> Jump without a care
02:24.220 -> Jump up 'cause you know that I'll be there
02:28.260 -> And if you find you're short on joy
02:31.210 -> Don't break, just don't forget that
02:33.780 -> You're still our 1-UP boy
02:37.540 -> So go on, straighten up your cap
02:40.570 -> Let your toes begin to tap
02:42.960 -> This rhythm is a power mushroom
02:46.910 -> Don't forget you're the super star
02:50.090 -> No one else could make it this far
02:52.340 -> Put a comb through that 'stache
02:54.420 -> Now you've got panache
02:56.970 -> Oh, let's do the Odyssey!
03:05.920 -> It's time to jump up in the air
03:09.030 -> Jump up, don't be scared
03:11.450 -> Jump up and your cares will soar away
03:15.240 -> And if the dark clouds start to swirl
03:18.290 -> Don't fear, don't shed a tear 'cause
03:20.890 -> I'll be your 1-UP girl
03:24.690 -> Now listen, all you boys and girls
03:27.660 -> All around the world
03:30.070 -> Don't be afraid to get up and move
03:34.040 -> You know that we're all superstars
03:37.040 -> We're the ones who made it this far
03:39.540 -> Put a smile on that face
03:41.630 -> There's no time to waste, so
03:44.470 -> Let's do the Odyssey!
03:52.190 ->`;

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
