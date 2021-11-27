const imagenes = fetch("http://localhost:3000/productos")
    .then(response => response.json())
    .then(data => {
        const listings = data.map(listing => {
            insertElementProductos(listing);
        })
    });

function renderizarGaleria(imagenes) {
    let html = "";

    imagenes.forEach(function(imagen) {
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

$(function() {
    renderizarGaleria(imagenes);
});