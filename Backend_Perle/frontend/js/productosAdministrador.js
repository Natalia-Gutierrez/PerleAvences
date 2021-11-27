const lineas = [
    {
        nombre: 'Noche Estrellada'
    },
    {
        nombre: 'Gatito'
    },
    {
        nombre: 'Harry Styles'
    },
];
function renderizarLineas(lineas) {
    let html = `<select title="lineas_productos" id="lineasProductos">`;
    
    lineas.forEach(function(line){
        html += `
            <option value="${line.nombre}">${line.nombre}</option>
        `;
    });
    html += `
    </select>`
    $('#lineasDeProductos').html(html);
}
$(function() {
    renderizarLineas(lineas);
});
function renderizarEditarLineas(lineas) {
    let html = `<select title="lineas_productos" id="lineasProductos">`;
    
    lineas.forEach(function(line){
        html += `
            <option value="${line.nombre}">${line.nombre}</option>
        `;
    });
    html += `
    </select>`
    $('#editarLineasDeProductos').html(html);
}
$(function() {
    renderizarEditarLineas(lineas);
});

const imagenes = [
{
    codigo: 100,
    src: "..\\resources\\images\\combo3.jpg",
    alt: "Gatitos, no se puede decir más",
    nombre: "Artículo 1",
    precio: 52,
},
{
    codigo: 101,
    src: "..\\resources\\images\\combo2.jpg",
    alt: "Gatitos, no se puede decir más",
    nombre: "Artículo 2",
    precio: 82,
},
{
    codigo: 102,
    src: "..\\resources\\images\\combo1.jpg",
    alt: "Gatitos, no se puede decir más",
    nombre: "Artículo 3",
    precio: 99,
},
{
    codigo: 103,
    src: "..\\resources\\images\\linea1.jpg",
    alt: "Gatitos, no se puede decir más",
    nombre: "Artículo 1",
    precio: 52,
},
{
    codigo: 104,
    src: "..\\resources\\images\\linea2.jpg",
    alt: "Gatitos, no se puede decir más",
    nombre: "Artículo 1",
    precio: 52,
},
{
    codigo: 105,
    src: "..\\resources\\images\\linea3.jpg",
    alt: "Gatitos, no se puede decir más",
    nombre: "Artículo 1",
    precio: 52,
},
{
    codigo: 106,
    src: "..\\resources\\images\\producto1.jpg",
    alt: "Gatitos, no se puede decir más",
    nombre: "Artículo 1",
    precio: 52,
},
{
    codigo: 107,
    src: "..\\resources\\images\\producto2.jpg",
    alt: "Gatitos, no se puede decir más",
    nombre: "Artículo 1",
    precio: 52,
},
{
    codigo: 108,
    src: "..\\resources\\images\\combo3.jpg",
    alt: "Gatitos, no se puede decir más",
    nombre: "Artículo 1",
    precio: 52,
},
{
    codigo: 109,
    src: "..\\resources\\images\\combo2.jpg",
    alt: "Gatitos, no se puede decir más",
    nombre: "Artículo 2",
    precio: 82,
},
];

function renderizarGaleria(imagenes) {
let html = "";

imagenes.forEach(function (imagen) {
    html += `
    <div class="col-xs-10 col-sm-4 col-md-3 product">
        <div class="card" name="card-producto">
            <img src="${imagen.src}" class="card-img-top" alt="${imagen.alt}" />
            <h3 class="card-title">${imagen.nombre}</h3>
            <p class="card-text">${imagen.precio} Bs.</p>
            <button type="button" id="editar_card${imagen.codigo}" class="boton-editar" data-bs-toggle="modal" data-bs-target="#editarProducto">
                <img id="editCard${imagen.codigo}" src="../resources/images/otrasConfiguraciones/editar.svg" alt="editar" width="16px"/>
            </button>
            <button type="button" id="eliminar_card${imagen.codigo}" class="boton-eliminar" data-bs-toggle="modal" data-bs-target="#eliminarProducto">
                <img id="deleteCard${imagen.codigo}" src="../resources/images/otrasConfiguraciones/basurero_blanco.svg" alt="editar" width="16px"/>
            </button>
            <button type="button" id="ocultar_card${imagen.codigo}" class="boton-ocultar" data-bs-toggle="modal" data-bs-target="#ocultarProducto">
                <img id="hideCard${imagen.codigo}" src="../resources/images/iconos/ojo_rayado.svg" alt="ocultar" width="16px"/>
            </button>
        </div>
    </div>
    `;
});
$("#galeria").html(html);
}
$(function () {
renderizarGaleria(imagenes);
});