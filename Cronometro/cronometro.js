const botonIniciioPausa= document.getElementById('boton-inicio-pausa')
const botonReiniciar= document.getElementById('boton-reiniciar')
const cronometro = document.getElementById('cronometro')

let [horas, minutos, segundos]= [0, 0, 0];
let intervaloTiempo;
let estadoCronometro = 'pausado';

function actualizarCronometro(){

    segundos++;

    if(segundos/60 === 1){
        segundos = 0;
        minutos++

        if(minutos/60 === 1){
            minutos = 0;
            horas++;
        }
    }

    const segundosConFormato = asignarFormato(segundos);
    const minutosConForm = asignarFormato(minutos);
    const horasConFormato = asignarFormato(horas);

    cronometro.innerText = `${horasConFormato}: ${minutosConForm}: ${segundosConFormato}`;
    
}

function asignarFormato(unidadDeTiempo){

    return unidadDeTiempo < 10 ? '0' + unidadDeTiempo : unidadDeTiempo
}

botonIniciioPausa.addEventListener('click', function(){

    if(estadoCronometro === 'pausado'){

        intervaloTiempo = window.setInterval(actualizarCronometro, 1000)
        botonIniciioPausa.innerHTML = '<i><img src="/imagenes/icons8-pausa-64.png" alt=""></i>';
        botonIniciioPausa.classList.remove('iniciar');
        botonIniciioPausa.classList.add('pausar');
        estadoCronometro = 'activo';

    } else {
      window.clearInterval(intervaloTiempo);
      botonIniciioPausa.innerHTML = '<i><img src="/imagenes/icons8-play-64.png" alt=""></i>';
      botonIniciioPausa.classList.remove('pausar');
      botonIniciioPausa.classList.add('iniciar');
      estadoCronometro = 'pausado';

    }
});

botonReiniciar.addEventListener('click', function(){

    window.clearInterval(intervaloTiempo);

    segundos = 0;
    minutos = 0;
    horas = 0;

    cronometro.innerText = '00:00:00';

    botonIniciioPausa.innerHTML = '<i><img src="/imagenes/icons8-play-64.png" alt=""></i>';
    botonIniciioPausa.classList.remove('pausar');
    botonIniciioPausa.classList.add('iniciar');
    estadoCronometro = 'pausado';

})