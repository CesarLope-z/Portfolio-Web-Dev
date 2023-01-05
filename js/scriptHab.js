const espacioWeb = document.querySelector('#addWeb')
const espacioFrameworks = document.querySelector('#addFrameworks')
const espacioBackend = document.querySelector('#addBackend')
const espacioExtra = document.querySelector('#addExtra')
cargarTodo()

function cargarTodo() {
    document.addEventListener('DOMContentLoaded', cargarHab)
} 
function cargarHab() {
    url = '../data/tecnologias-2.json';
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarHab(resultado))
}
function mostrarHab(obj){
    habilidadesDeWeb = obj.web;
    habilidadesDeFrameworks = obj.frameworks;
    habilidadesDebackend = obj.backend;
    habilidadesDeextra = obj.extra;
    mostrar(habilidadesDeWeb)
    mostrar(habilidadesDeFrameworks)
    mostrar(habilidadesDebackend)
    mostrar(habilidadesDeextra)
}
function mostrar(habilidades){
    habilidades.forEach(habilidad => {
        const { id, nombre, img } = habilidad;
        const div = document.createElement('div');
        div.classList.add('tecnology');
        div.innerHTML = `
            <p>${nombre.toUpperCase()}</p>
            <img src="./img/iconos/${img}.png" alt="icono ${nombre}">
        `;
        switch (id) {
            case 1:
                espacioWeb.appendChild(div)
                break;
            case 2:
                espacioFrameworks.appendChild(div)
                break;
            case 3:
                espacioBackend.appendChild(div)
                break;
            case 4:
                espacioExtra.appendChild(div)
                break;
            default:
                alert("Algo ha fallado en el codigo")
                break;
        }
        
    });
}