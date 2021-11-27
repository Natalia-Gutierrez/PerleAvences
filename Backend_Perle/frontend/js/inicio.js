const combosContainer = document.querySelector(".combos-container");
const spinner = document.querySelector("#spinner");
//const previous = document.querySelector("#previous");
//const next = document.querySelector("#next");

let limit = 8;
let offset = 1;

const imagenesCombos = fetch("http://localhost:3000/combo")
    .then(response => response.json())
    .then(data => {
        const listings = data.map(listing => {
            insertElementLinea(listing);
        })
    });

const imagenesLineas = fetch("http://localhost:3000/linea")
    .then(response => response.json())
    .then(data => {
        const listings = data.map(listing => {
            insertElementLinea(listing);
        })
    });


//   Solo deben mostrarse 5 productos *
const imagenesProductos = fetch("http://localhost:3000/productos")
    .then(response => response.json())
    .then(data => {
        const listings = data.map(listing => {
            insertElementLinea(listing);
        })
    });

function cargarDatosCombo(idLinea) {
    limpiarProductos();
    const getDatosCombo = fetch("http://localhost:3000/Combo")
        .then(response => response.json())
        .then(data => {
            const listings = data.map(listing => {
                if (listing.cod_Combo == idCombo) {
                    console.log("..\\resources\\images\\Administrador\\" + listing.src);
                    document.getElementById('imagen-Producto').src = '../resources/images/Administrador/' + listing.src;
                    document.getElementById('combo').value = listing.nombre;
                    document.getElementById('combo').value = listing.descripcion;
                    return
                }
            })
        });
}

function cargarDatosLinea(idLinea) {
    limpiarProductos();
    const getDatosLinea = fetch("http://localhost:3000/linea")
        .then(response => response.json())
        .then(data => {
            const listings = data.map(listing => {
                if (listing.cod_linea == idLinea) {
                    console.log("..\\resources\\images\\Administrador\\" + listing.src);
                    document.getElementById('imagen-Producto').src = '../resources/images/Administrador/' + listing.src;
                    document.getElementById('linea').value = listing.nombre;
                    document.getElementById('linea').value = listing.descripcion;
                    return
                }
            })
        });
}

function cargarDatosProducto(idProducto) {
    const getDatosProducto = fetch("http://localhost:3000/Producto")
        .then(response => response.json())
        .then(data => {
            const listings = data.map(listing => {
                if (listing.cod_Producto == idProducto) {
                    console.log("..\\resources\\images\\Administrador\\" + listing.src);
                    document.getElementById('imagen-Producto').src = '../resources/images/Administrador/' + listing.src;
                    document.getElementById('producto').value = listing.nombre;
                    document.getElementById('producto').value = listing.descripcion;
                    document.getElementById('producto').value = listing.tiempo_espera;
                    return
                }
            })
        });
}

function cargarDatoContacto(idContacto) {
    const getDatosContacto = fetch("http://localhost:3000/contacto")
        .then(response => response.json())
        .then(data => {
            const listings = data.map(listing => {
                if (listing.cod_contacto == idContacto) {
                    document.getElementById(nombre);
                    document.getElementById(enlace);
                    return
                }
            })
        });
}

function renderizarGaleria(imagenes, elemento) {
    let html = "";
    if (elemento == '#box-lineas') {
        imagenes.forEach(function(imagen) {
            html += `
            
        <div class="col-sm-6 col-md-4">
            <div class="lightbox">
                <img src=${imagen.src}>
                <div class="contenido">
                    <h3 class="h3-nombre"> ${imagen.nombre}</h3>
                    <div style = "width = 500px">
                    <p class="h3-secundario"> ${imagen.descripcion}</p>
                    </div>
                </div>
            </div>
        </div>
        `;
        });
    } else {
        imagenes.forEach(function(imagen) {
            html += `
                
            <div class="col-sm-6 col-md-4">
                <div class="lightbox">
                    <img src=${imagen.src}>
                    <div class="contenido">
                        <h3 class="h3-nombre"> ${imagen.nombre}</h3>
                        <h3 class="h3-secundario"> Precio: ${imagen.precio} Bs.</h3>
                    </div>
                </div>
            </div>
            `;
        });
    }
    if (elemento == '#box-productos') {
        html += `
        <div class="col-sm-6 col-md-4">
            <div class="lightbox">
                <a href = "../html/productos.html">Ver más</a>
    
            </div>
        </div> 
        
        `;
    }

    $(elemento).html(html);
}

$(function() {
    renderizarGaleria(imagenesLineas, '#box-lineas');
    renderizarGaleria(imagenesCombos, '#box-combos');
    renderizarGaleria(imagenesProductos, '#box-productos');

});




var scrollPerClick = 600;
var scrollAmount = 0;

function sliderScrollLeft(id) {
    console.log('ok');
    let box = document.getElementById(id);
    // document.getElementById('box').scrollLeft -= 50;
    // box.scrollLeft=10;
    box.scrollTo({
        top: 0,
        left: (scrollAmount -= scrollPerClick),
        behavior: 'smooth'
    });
    if (scrollAmount < 0) {
        scrollAmount = 0;
    }
}

function sliderScrollRight(id) {
    // document.getElementById('box').scrollLeft += 50;
    let box = document.getElementById(id);
    if (scrollAmount <= box.scrollWidth - box.clientWidth) {
        box.scrollTo({
            top: 0,
            left: (scrollAmount += scrollPerClick),
            behavior: 'smooth'
        })
    }
    console.log('next');
}