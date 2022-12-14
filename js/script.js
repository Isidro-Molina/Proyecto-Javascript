let puntajeUsuario = 0;
let puntajeComputadora = 0;
let jugador = document.querySelector('.jugador')
const puntosUsuario = document.getElementById('puntajeUsuario');
const puntosComputadora = document.getElementById('puntajeComputadora');
const tablero = document.querySelector('.tablero');
const eleccion = document.querySelector('.eleccion');
const resultado = document.querySelector('.resultado')
const piedra = document.getElementById('piedra');
const papel = document.getElementById('papel');
const tijera = document.getElementById('tijera');
let tabla = document.querySelector('#tabla');

class Jugador {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

Swal.fire({
    title: 'Bienvenido!',
    text: 'Ingresa tu nombre',
    input: 'text',
    preConfirm: (player) => {
        return player;
    }
}).then((result) => {
    if (result.value != null) {
        let jugador1 = new Jugador(result.value)
        jugador.innerHTML = jugador1.nombre
        localStorage.setItem('Jugador', JSON.stringify(jugador1.nombre))

        let JugadorActivo = JSON.parse(localStorage.getItem('Jugador'))
        document.getElementById('active').innerHTML = `<h6>Esta jugando ` + JugadorActivo
    }
})

function maquina() {
    const opciones = ['Piedra', 'Papel', 'Tijera'];
    const opcRandom = Math.floor(Math.random(opciones) * 3)
    return opciones[opcRandom]
}

function ganar() {
    puntajeUsuario++;
    puntosUsuario.innerHTML = puntajeUsuario;
    puntosComputadora.innerHTML = puntajeComputadora;
}

function perder() {
    puntajeComputadora++;
    puntosComputadora.innerHTML = puntajeComputadora;
    puntosUsuario.innerHTML = puntajeUsuario;
}

function juego(eleccionUsuario) {
    const eleccionMaquina = maquina();
    eleccion.innerHTML = `<h2>Elegiste ${eleccionUsuario}! La maquina eligio ${eleccionMaquina}`

    switch (eleccionUsuario) {
        case 'Piedra':

            if (eleccionMaquina == 'Tijera') {
                resultado.innerHTML = `<h6 class="ganar">Ganaste!</h6>`
                document.getElementById('piedra').classList.add('gano');
                document.getElementById('tijera').classList.add('perdio');
                setTimeout(() => {
                    document.getElementById('piedra').classList.remove('gano')
                }, 700)
                setTimeout(() => {
                    document.getElementById('tijera').classList.remove('perdio')
                }, 700)
                ganar()
            } else if (eleccionMaquina == 'Piedra') {
                resultado.innerHTML = `<h6 class="empatar">Empate!</h6>`
                document.getElementById('piedra').classList.add('empato')
                setTimeout(() => {
                    document.getElementById('piedra').classList.remove('empato')
                }, 700)
            } else if (eleccionMaquina == 'Papel') {
                resultado.innerHTML = `<h6 class="perder">Perdiste!</h6>`
                document.getElementById('piedra').classList.add('perdio')
                document.getElementById('papel').classList.add('gano')
                setTimeout(() => {
                    document.getElementById('piedra').classList.remove('perdio')
                }, 700)
                setTimeout(() => {
                    document.getElementById('papel').classList.remove('gano')
                }, 700)
                perder()
            }
            break;

        case 'Papel':

            if (eleccionMaquina == 'Piedra') {
                resultado.innerHTML = `<h6 class="ganar">Ganaste!</h6>`
                document.getElementById('papel').classList.add('gano');
                document.getElementById('piedra').classList.add('perdio');
                setTimeout(() => {
                    document.getElementById('papel').classList.remove('gano')
                }, 700)
                setTimeout(() => {
                    document.getElementById('piedra').classList.remove('perdio')
                }, 700)
                ganar();
            } else if (eleccionMaquina == 'Papel') {
                resultado.innerHTML = `<h6 class="empatar">Empate!</h6>`
                document.getElementById('papel').classList.add('empato')
                setTimeout(() => {
                    document.getElementById('papel').classList.remove('empato')
                }, 700)
            } else if (eleccionMaquina == 'Tijera') {
                resultado.innerHTML = `<h6 class="perder">Perdiste!</h6>`
                document.getElementById('papel').classList.add('perdio')
                document.getElementById('tijera').classList.add('gano')
                setTimeout(() => {
                    document.getElementById('papel').classList.remove('perdio')
                }, 700)
                setTimeout(() => {
                    document.getElementById('tijera').classList.remove('gano')
                }, 700)
                perder()
            }
            break;

        case 'Tijera':

            if (eleccionMaquina == 'Papel') {
                resultado.innerHTML = `<h6 class="ganar">Ganaste!</h6>`
                document.getElementById('tijera').classList.add('gano');
                document.getElementById('papel').classList.add('perdio');
                setTimeout(() => {
                    document.getElementById('tijera').classList.remove('gano')
                }, 700)
                setTimeout(() => {
                    document.getElementById('papel').classList.remove('perdio')
                }, 700)
                ganar()
            } else if (eleccionMaquina == 'Tijera') {
                resultado.innerHTML = `<h6 class="empatar">Empate!</h6>`
                document.getElementById('tijera').classList.add('empato')
                setTimeout(() => {
                    document.getElementById('tijera').classList.remove('empato')
                }, 700)
            } else if (eleccionMaquina == 'Piedra') {
                resultado.innerHTML = `<h6 class="perder">Perdiste!</h6>`
                document.getElementById('tijera').classList.add('perdio')
                document.getElementById('piedra').classList.add('gano')
                setTimeout(() => {
                    document.getElementById('tijera').classList.remove('perdio')
                }, 700)
                setTimeout(() => {
                    document.getElementById('piedra').classList.remove('gano')
                }, 700)
                perder()
            }
            break;
    }
}


piedra.addEventListener('click', () => {
    juego('Piedra')
})

papel.addEventListener('click', () => {
    juego('Papel')
})

tijera.addEventListener('click', () => {
    juego('Tijera')
})


reiniciar.addEventListener('click', () => {
    puntajeComputadora = 0;
    puntajeUsuario = 0
    puntosComputadora.innerHTML = puntajeComputadora
    puntosUsuario.innerHTML = puntajeUsuario


    Swal.fire({
        title: 'Bienvenid@!',
        text: 'Ingresa tu nombre',
        input: 'text',
        preConfirm: (player) => {
            return player;
        }
    }).then((result) => {
        if (result.value != null) {
            let jugador2 = new Jugador(result.value)
            jugador.innerHTML = jugador2.nombre
            localStorage.setItem('Jugador2', JSON.stringify(jugador2.nombre))

            let JugadorActivo = JSON.parse(localStorage.getItem('Jugador2'))
            document.getElementById('active').innerHTML = `<h6>Esta jugando ` + JugadorActivo
            eleccion.innerHTML = `<h3>Elegi una opcion!</h3>`
        }
    })
})


function crearTabla(array) {
    array.forEach((jugadores) => {
        const tablon = `<p>${jugadores.nombre} con un puntaje de ${jugadores.puntaje}</p>`
    tabla.innerHTML += tablon
    })
}

async function bringData() {
    const response = await fetch('./js/data.json');
    const data = await response.json();
    crearTabla(data)
}

bringData()