const piedra = document.getElementById('piedra')
const papel = document.getElementById('papel')
const tijera = document.getElementById('tijera')
const reiniciar = document.getElementById('reiniciar')
let titulo = document.getElementById('tituloPrincipal')
let eleccionUsuario = document.createElement('div')
let eleccionMaquina = document.createElement('div')

function maquina() {
    const opciones = ['Piedra', 'Papel', 'Tijera'];
    const opcRandom = Math.floor(Math.random(opciones) * 3)
    return opciones[opcRandom]
}

piedra.addEventListener('click', () => {
    eleccionUsuario.innerHTML = '<h2>Elegiste piedra!</h2>'
    document.body.append(eleccionUsuario)
    eleccionMaquina.innerHTML = '<h2>La maquina eligio ' + maquina();
    document.body.append(eleccionMaquina)
})

papel.addEventListener('click', () => {
    eleccionUsuario.innerHTML = '<h2>Elegiste papel!</h2>'
    document.body.append(eleccionUsuario)
    eleccionMaquina.innerHTML = '<h2>La maquina eligio ' + maquina();
    document.body.append(eleccionMaquina)
})

tijera.addEventListener('click', () => {
    eleccionUsuario.innerHTML = '<h2>Elegiste tijera!</h2>'
    document.body.append(eleccionUsuario)
    eleccionMaquina.innerHTML = '<h2>La maquina eligio ' + maquina();
    document.body.append(eleccionMaquina)
})

reiniciar.addEventListener('click', () => {
    eleccionMaquina.remove();
    eleccionUsuario.remove()
})






