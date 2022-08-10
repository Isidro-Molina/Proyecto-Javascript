const puntajeUsuario = 0;
const puntajeComputadora = 0;
let jugador = document.querySelector('.jugador')
const puntosUsuario = document.getElementById('puntajeUsuario');
const puntosComputadora = document.getElementById('puntajeComputadora');
const tablero = document.querySelector('.tablero');
const resultado = document.querySelector('.resultado');
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

piedra.addEventListener('click', ()=> {
    resultado.innerHTML = `<h2>Elegiste piedra! La maquina eligio ` +maquina()
})

papel.addEventListener('click', ()=> {
    resultado.innerHTML = `<h2>Elegiste papel! La maquina eligio ` + maquina()
})

tijera.addEventListener('click', ()=> {
    resultado.innerHTML = `<h2>Elegiste tijera! La maquina eligio ` + maquina()
})

reiniciar.addEventListener('click', () => {
    let jugador2 = new Jugador(prompt('Ingresa tu nombre'))
    jugador.innerHTML = jugador2.nombre
    localStorage.setItem('Jugador2', JSON.stringify(jugador2.nombre))
    let JugadorActivo = JSON.parse(localStorage.getItem('Jugador2'))
    nuevoDiv.innerHTML = `<p>Esta jugando ` + JugadorActivo
    document.body.append(nuevoDiv)
    console.log('Esta jugando ' + JugadorActivo);
    resultado.innerHTML = `<h3>Elegi una opcion!</h3>`
})











