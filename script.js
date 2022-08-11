const puntajeUsuario = 0;
const puntajeComputadora = 0;
let jugador = document.querySelector('.jugador')
const puntosUsuario = document.getElementById('puntajeUsuario');
const puntosComputadora = document.getElementById('puntajeComputadora');
const tablero = document.querySelector('.tablero');
const eleccion = document.querySelector('.eleccion');const resultado = document.querySelector('.resultado')
const piedra = document.getElementById('piedra');
const papel = document.getElementById('papel');
const tijera = document.getElementById('tijera');
let nuevoDiv = document.createElement('div')

class Jugador {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

let jugador1 = new Jugador(prompt('Ingresa tu nombre'))
jugador.innerHTML = jugador1.nombre

localStorage.setItem('Jugador', JSON.stringify(jugador1.nombre))

let JugadorActivo = JSON.parse(localStorage.getItem('Jugador'))
nuevoDiv.innerHTML = `<p>Esta jugando ` + JugadorActivo
document.body.append(nuevoDiv)
console.log('Esta jugando ' + JugadorActivo);


function maquina() {
    const opciones = ['Piedra', 'Papel', 'Tijera'];
    const opcRandom = Math.floor(Math.random(opciones) * 3)
    return opciones[opcRandom]
}


function juego(eleccionUsuario) {
    const eleccionMaquina = maquina();
    console.log('el usuario eligio ' +eleccionUsuario);
    console.log('La maquina eligio ' +eleccionMaquina);
    eleccion.innerHTML = `<h2>Elegiste ${eleccionUsuario}! La maquina eligio ${eleccionMaquina}`

    switch (eleccionUsuario) {
        case 'Piedra':
            if (eleccionMaquina == 'Tijera') {
                console.log('Ganaste');
                resultado.innerHTML = `<h6 class="ganar">Ganaste!</h6>`
            } else if (eleccionMaquina == 'Piedra') {
                console.log('Empate');
                resultado.innerHTML = `<h6 class="empatar">Empate!</h6>`
            } else if (eleccionMaquina == 'Papel') {
                console.log('Perdiste');
                resultado.innerHTML = `<h6 class="perder">Perdiste!</h6>`
            }
            break
        case 'Papel':
            if (eleccionMaquina == 'Piedra') {
                console.log('Ganaste');
                resultado.innerHTML = `<h6 class="ganar">Ganaste!</h6>`
            } else if (eleccionMaquina == 'Papel') {
                console.log('Empate');
                resultado.innerHTML = `<h6 class="empatar">Empate!</h6>`
            } else if (eleccionMaquina == 'Tijera') {
                console.log('Perdiste');
                resultado.innerHTML = `<h6 class="perder">Perdiste!</h6>`
            }
            break
        case 'Tijera':
            if (eleccionMaquina == 'Papel') {
                console.log('Ganaste');
                resultado.innerHTML = `<h6 class="ganar">Ganaste!</h6>`
            } else if (eleccionMaquina == 'Tijera') {
                console.log('Empate');
                resultado.innerHTML = `<h6 class="empatar">Empate!</h6>`
            } else if (eleccionMaquina == 'Piedra') {
                console.log('Perdiste');
                resultado.innerHTML = `<h6 class="perder">Perdiste!</h6>`
            }
    }
}


piedra.addEventListener('click', ()=> {
    juego('Piedra')
})

papel.addEventListener('click', ()=> {
    juego('Papel')
})

tijera.addEventListener('click', ()=> {
    juego('Tijera')
})

reiniciar.addEventListener('click', () => {
    let jugador2 = new Jugador(prompt('Ingresa tu nombre'))
    jugador.innerHTML = jugador2.nombre
    localStorage.setItem('Jugador2', JSON.stringify(jugador2.nombre))
    let JugadorActivo = JSON.parse(localStorage.getItem('Jugador2'))
    nuevoDiv.innerHTML = `<p>Esta jugando ` + JugadorActivo
    document.body.append(nuevoDiv)
    console.log('Esta jugando ' + JugadorActivo);
    eleccion.innerHTML = `<h3>Elegi una opcion!</h3>`
})











