formulario = document.querySelector('#formulario');
barras = document.querySelector('#barras');
proyects = document.querySelector('#otros');

cargarTodo()

function cargarTodo() {
    formulario.addEventListener('submit', mandandoCorreo)
    document.addEventListener('DOMContentLoaded', () => {
        cargarTecnos()
        cargarProyects()
    })
} 
function mandandoCorreo(e) {
    e.preventDefault();
    nombre = document.querySelector('#nombre').value;
    email = document.querySelector('#email').value;
    mensaje = document.querySelector('#mensaje').value;

    if(nombre==='' || email==='' || mensaje===''){
        error("Disculpa, debes completar todos los campos, sin embargo, lamento informarte que la opcion de enviar E-mail no está disponible, puedes encontrar el correo en la parte inferior, Muchas gracias")
        return;
    }
    
    error('Hubo un error enviando el correo, puedes encontrar mas formas de contactarme en la parte inferior.')
}
function error(mensaje){
    mensajeError = document.createElement('p')
    mensajeError.textContent = `${mensaje}`
    mensajeError.classList.add('error')
    formulario.appendChild(mensajeError)
}

function cargarTecnos() {
    url = '../data/tecnologias-1.json'
    fetch(url)
        .then(resultado => resultado.json())
        .then(respuesta => progressBar(respuesta))
}
function progressBar(tecnologiaObj) {
    tecnologies = tecnologiaObj.tecnologias;
    tecnologies.forEach(tecnologia => {
        const {nombre, valor} = tecnologia;
        const estado = () => {
            if (valor > 75) {
                return "success"; //warning danger
            }else if(valor < 50){
                return "danger";
            }else{
                return "warning";
            }
        }
        const barra = document.createElement('div')
        barra.classList.add('d-flex', 'w-100')
        barra.innerHTML = `
            <div class="html w-${valor} progress-bar progress-bar-striped progress-bar-animated bg-${estado()} p-1">
                <div class="">${nombre.toUpperCase()}</div>
            </div>
            <span class="w-${100-valor} text-end p-1">${valor}%</span>
        `;
        barras.appendChild(barra)
    });
}
function cargarProyects() {
    url = '../data/proyectos.json'
    fetch(url)
        .then(resultado => resultado.json())
        .then(respuesta => mostrarProyectos(respuesta))
}
function mostrarProyectos({proyecto1, proyecto2, proyecto3, proyecto4, proyecto5, proyecto6}) {
    crearCarta(proyecto1)
    crearCarta(proyecto2)
    crearCarta(proyecto3)
    crearCarta(proyecto4)
    crearCarta(proyecto5)
    crearCarta(proyecto6)
}
function crearCarta({img, nombre, descripcion, href}) {
    let carta = document.createElement('div')
    carta.classList.add('card', 'w-18r')
    carta.innerHTML = `
        <img href="src/${href}.html" src="img/index/${img}.png" class="card-img-top" alt="${nombre}">
        <div class="card-body">
            <h5 class="card-title">${nombre}</h5>
            <p class="card-text">${descripcion}</p>
            <a href="src/${href}.html" class="btn btn-primary">Leer Mas...</a>
        </div>
    `;
    proyects.appendChild(carta)
}