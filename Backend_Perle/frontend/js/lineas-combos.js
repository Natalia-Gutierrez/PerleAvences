//Conexion BD
//lineas
const imagenesLineas = fetch("http://localhost:3000/Administrador/lineas")
    .then(response => response.json())
    .then(data => {
        const listings = data.map(listing => {
            insertElementLinea(listing);
        })
    });
0


function insertElementLinea(imagen) {
    let html = `
    <div class="col-xs-10 col-sm-4 col-md-3 product">
      <div class="card" name="card-linea">
          <img src="..\\resources\\images\\Administrador\\${imagen.src}" class="card-img-top" alt="${imagen.nombre}" />
          <h3 class="card-title">${imagen.nombre}</h3>
          <button type="button" id="editar_card${imagen.codigo}" class="boton-editar" data-bs-toggle="modal" data-bs-target="#editarLinea" onclick="cargarDatosLinea(${imagen.cod_linea})">
              <img id="editCard${imagen.cod_linea}" src="../resources/images/otrasConfiguraciones/editar.svg" alt="editar" width="16px"/>
          </button>
          <button type="button" id="eliminar_card${imagen.cod_linea}" class="boton-eliminar" data-bs-toggle="modal" data-bs-target="#eliminarLinea">
              <img id="deleteCard${imagen.cod_linea}" src="../resources/images/otrasConfiguraciones/basurero_blanco.svg" alt="editar" width="16px"/>
          </button>
          <button type="button" id="ocultar_card${imagen.cod_linea}" class="boton-ocultar-lineas" data-bs-toggle="modal" data-bs-target="#ocultarLinea">
              <img id="hideCard${imagen.cod_linea}" src="../resources/images/iconos/ojo_rayado.svg" alt="ocultar" width="16px"/>
          </button>
      </div>
    </div>
  `;
    let elemento = document.getElementById('galeria-lineas');
    elemento.innerHTML += html;
}

//Combos
const imagenesCombos = fetch("http://localhost:3000/Administrador/combos")
    .then(response => response.json())
    .then(data => {
        const listings = data.map(listing => {
            insertElementCombo(listing);
        })
    });

function insertElementCombo(imagen) {
    let html = `
    <div class="col-xs-10 col-sm-4 col-md-3 product">
    <div class="card" name="card-combo">
        <img src="..\\resources\\images\\Administrador\\${imagen.src}" class="card-img-top" alt="${imagen.nombre}" />
        <h3 class="card-title">${imagen.nombre}</h3>
        <p class="card-text">${imagen.precio} Bs.</p>
        <button type="button" id="editar_card${imagen.cod_combo}" class="boton-editar" data-bs-toggle="modal" data-bs-target="#editarCombo">
            <img id="editCard${imagen.cod_combo}" src="../resources/images/otrasConfiguraciones/editar.svg" alt="editar" width="16px"/>
        </button>
        <button type="button" id="eliminar_card${imagen.cod_combo}" class="boton-eliminar" data-bs-toggle="modal" data-bs-target="#eliminarCombo">
            <img id="deleteCard${imagen.cod_combo}" src="../resources/images/otrasConfiguraciones/basurero_blanco.svg" alt="editar" width="16px"/>
        </button>
        <button type="button" id="ocultar_card${imagen.cod_combo}" class="boton-ocultar-combos" data-bs-toggle="modal" data-bs-target="#ocultarCombo">
            <img id="hideCard${imagen.cod_combo}" src="../resources/images/iconos/ojo_rayado.svg" alt="ocultar" width="16px"/>
        </button>
    </div>
    </div>
  `;
    let elemento = document.getElementById('galeria-combos');
    elemento.innerHTML += html;
}

// Imagenes productos
const getImagenes = fetch("http://localhost:3000/Administrador/lineas/productos")
    .then(response => response.json())
    .then(data => {
        const listings = data.map(listing => {
            insertElement(listing);
        })
    });


function insertElement(listing) {
    let html = `
      <div class="col-xs-10 col-sm-4 col-md-3 product">
        <div class="card">
            <img src="..\\resources\\images\\Administrador\\${listing.src}" class="card-img-top" alt="${listing.nombre}" />
            <h3 class="card-title">${listing.nombre}</h3>
            <div class="div-checkbox-prod">
              <input type="checkbox" id="checkbox-id=${listing.cod_prod}-fin-id-${listing.nombre}" class="checkbox-prod">
              <span class="checkmark"></span>
            </div>
        </div>
      </div>
  `;
    let elemento_crear = document.getElementById('galeria-crear');
    let elemento_editar = document.getElementById('galeria-editar');
    elemento_crear.innerHTML += html;
    elemento_editar.innerHTML += html;
}


//Otras funciones
$(function() {
    comprimirElementos("card-combo");
});
$(function() {
    comprimirElementos("card-linea");
});

function comprimirElementos(name) {
    let cards = document.getElementsByName(name);
    for (i = 0; i < cards.length; i++) {
        if (i >= 4) {
            cards[i].style.visibility = "hidden";
            cards[i].style.transition = '0.08s linear';
            cards[i].style.opacity = 0;
            cards[i].style.height = 0;
            cards[i].style.padding = 0;
            cards[i].style.margin = 0;

        }
    }
}

function descomprimir(name, boton) {
    let h5 = document.getElementById(boton);
    if (h5.innerHTML == 'Ver más') {
        let cards = document.getElementsByName(name);
        for (i = 0; i < cards.length; i++) {
            cards[i].style.visibility = "visible";
            cards[i].style.opacity = 1;
            cards[i].style.height = 'auto';
            cards[i].style.transition = 'opacity 0.2s linear';
            cards[i].style.marginBottom = '30px';
        }
        h5.textContent = 'Ver menos';
    } else {
        comprimirElementos(name);
        h5.textContent = 'Ver más';
    }
}

function llenarProductos(opcion) {
    let html = "";
    let contenedor;
    let id;
    let colores = ["e5e6b5", "eecabd", "e1ede7"];
    if (opcion == 'crear') {
        contenedor = document.getElementById('galeria-crear');
        id = "#opciones-productos-crear";
    } else {
        contenedor = document.getElementById('galeria-editar');
        id = "#opciones-productos-editar";
    }
    let boxes = contenedor.getElementsByClassName('checkbox-prod');
    for (i = 0; i < boxes.length; i++) {
        if (boxes[i].checked) {
            let nombre = (boxes[i].id);
            let nombreStr = nombre.substring(nombre.indexOf('fin-id-') + 7, nombre.length);
            let idProducto = nombre.substring(12, nombre.indexOf('-fin-id-'));
            // console.log(idProducto);
            html += `
          <div class="producto-seleccionado" id="producto-${idProducto}" style="background-color:#${colores[(i+1)%3]};">
              ${nombreStr}
          </div>
        `;
        }
    }
    $(id).html(html);
}

function limpiarProductos() {
    id = "#opciones-productos-crear";
    $(id).html("");
    id = "#opciones-productos-editar";
    $(id).html("");
    let contenedor = document.getElementById('galeria-crear');
    let boxes = contenedor.getElementsByClassName('checkbox-prod');
    for (i = 0; i < boxes.length; i++) {
        boxes[i].checked = false;
    }
}



function cargarDatosLinea(idLinea) {
    limpiarProductos();
    const getDatosLinea = fetch("http://localhost:3000/Administrador/lineas")
        .then(response => response.json())
        .then(data => {
            const listings = data.map(listing => {
                if (listing.cod_linea == idLinea) {
                    document.getElementById('guardar-linea').className = 'boton-modal ' + idLinea;
                    console.log("..\\resources\\images\\Administrador\\" + listing.src);
                    document.getElementById('imagen-linea').src = '../resources/images/Administrador/' + listing.src;
                    document.getElementById('input-nombre-editarLinea').value = listing.nombre;
                    document.getElementById('desc-linea-editar').value = listing.descripcion;
                    return
                }
            })
        });
    const getDatosLineaProducto = fetch("http://localhost:3000/Administrador/lineas/editar-linea")
        .then(response => response.json())
        .then(data => {
            let i = 0;
            let colores = ["e5e6b5", "eecabd", "e1ede7"];
            const listings = data.map(listing => {
                console.log(listing.Linea_cod_linea);
                if (listing.Linea_cod_linea == idLinea) {
                    llenarLineaProducto(listing.Producto_cod_prod, colores[(i + 1) % 3]);
                }
                i++;
            })
        });
}

function llenarLineaProducto(codigo, color) {
    let html = "";
    const getImagenes = fetch("http://localhost:3000/Administrador/lineas/productos")
        .then(response => response.json())
        .then(data => {
            const listings = data.map(listing => {
                if (listing.cod_prod == codigo) {
                    html += `
          <div class="producto-seleccionado" id="producto-${codigo}" style="background-color:#${color};">
            ${listing.nombre}
          </div>
        `;
                    document.getElementById('opciones-productos-editar').innerHTML += html;
                    return
                }
            })
        });
}