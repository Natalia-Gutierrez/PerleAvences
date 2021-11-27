const imagen = {
    src: "..\\resources\\images\\combo1.jpg",
    alt: "Gatitos, no se puede decir más",
    nombre: "Cajita | La noche estrellada",
    descripcion: "La noche estrellada es un óleo sobre lienzo del pintor posimpresionista neerlandés Vincent van Gogh . Pintado en junio de 1889, representa la vista desde la ventana orientada al este de su habitación de asilo en Saint-Rémy-de-Provence, justo antes del amanecer, con la adición de un pueblo imaginario.",
    tiempo: "2 semanas",
    precio: 52,
};

function imagenProducto(imagen) {
    let html = "";

    html += `
        <div class = "imagen_producto">
            <img src="${imagen.src}" alt="${imagen.alt}"/>
        </div>
        <div class = "informacion_producto">
            <h2><center>${imagen.nombre}</center></h2>
            <p><center>${imagen.descripcion}</center></p>
            <p><center>Tiempo de espera aproximado: ${imagen.tiempo}</center></p>
            <p><center>Precio: ${imagen.precio} Bs.</center></p>
            <center><button type="button" class="agregar_carrito">
                Agregar a carrito<img src="../resources/images/otrasConfiguraciones/agregar.svg" alt="add" width="15px"/>
            </button></center>
        </div>
    `;

$("#producto_informacion").html(html);
}
  
$(function () {
imagenProducto(imagen);
});

const imagenes = [
{
    src: "..\\resources\\images\\combo3.jpg",
    alt: "Gatitos, no se puede decir más",
    nombre: "Artículo 1",
    precio: 52,
},
{
    src: "..\\resources\\images\\combo2.jpg",
    alt: "Gatitos, no se puede decir más",
    nombre: "Artículo 2",
    precio: 82,
},

{
    src: "..\\resources\\images\\linea1.jpg",
    alt: "Gatitos, no se puede decir más",
    nombre: "Artículo 1",
    precio: 52,
},
{
    src: "..\\resources\\images\\linea2.jpg",
    alt: "Gatitos, no se puede decir más",
    nombre: "Artículo 1",
    precio: 52,
},
{
    src: "..\\resources\\images\\linea3.jpg",
    alt: "Gatitos, no se puede decir más",
    nombre: "Artículo 1",
    precio: 52,
},
{
    src: "..\\resources\\images\\producto1.jpg",
    alt: "Gatitos, no se puede decir más",
    nombre: "Artículo 1",
    precio: 52,
},
{
    src: "..\\resources\\images\\producto2.jpg",
    alt: "Gatitos, no se puede decir más",
    nombre: "Artículo 1",
    precio: 52,
},
{
    src: "..\\resources\\images\\combo3.jpg",
    alt: "Gatitos, no se puede decir más",
    nombre: "Artículo 1",
    precio: 52,
},
{
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
            <div class="card">
                <img src="${imagen.src}" class="card-img-top" alt="${imagen.alt}" />
                <h3 class="card-title">${imagen.nombre}</h3>
                <p class="card-text">${imagen.precio} Bs.</p>
            </div>
        </div>
    `;
});

$("#galeria").html(html);
}

$(function () {
    renderizarGaleria(imagenes);
});