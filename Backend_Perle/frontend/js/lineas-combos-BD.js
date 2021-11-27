function botonAgregarLinea(){
    let nombre = document.getElementById('input-nombre-linea').value;
    let descripcion = document.getElementById('desc-linea').value;;
    let src = document.getElementById('input-imagen-linea').value;
    src = src.substring(12,src.length);
    let contenedorProductos = document.getElementById('opciones-productos-crear');
    let productos = contenedorProductos.getElementsByClassName('producto-seleccionado');
    productos = filtradoProductos(productos);
    let transaccion = {nombre: nombre, descripcion: descripcion, src: src, productos: productos};
    let transaccionJSON = JSON.stringify(transaccion);
    console.log(transaccionJSON);
    fetch('http://localhost:3000/Administrador/lineas/agregar-linea', {
        method: 'Post',
        body: transaccionJSON
    }).then(x => console.log('ok'))
        .catch(e=> {
        console.log(e);
    });  
}

function botonAgregarCombo(){
    let nombre = document.getElementById('input-nombre-combo').value;
    let descripcion = document.getElementById('desc-combo').value;;
    let src = document.getElementById('input-imagen-combo').value;
    let precio = document.getElementById('input-precio-combo').value;
    src = src.substring(12,src.length);
    let transaccion = {nombre: nombre, descripcion: descripcion, src: src, precio: precio};
    let transaccionJSON = JSON.stringify(transaccion);
    console.log(transaccionJSON);
    fetch('http://localhost:3000/Administrador/combos/agregar-combo', {
        method: 'Post',
        body: transaccionJSON
    }).then(x => console.log('ok'))
        .catch(e=> {
        console.log(e);
    });
}

function botonEditarLinea(idLinea){
    idLinea = idLinea.substring(12, idLinea.length);
    console.log(idLinea);
    let nombre = document.getElementById('input-nombre-editarLinea').value;
    let descripcion = document.getElementById('desc-linea-editar').value;;
    let src = document.getElementById('input-imagen-editarLinea').value;
    src = src.substring(12,src.length);
    let contenedorProductos = document.getElementById('opciones-productos-editar');
    let productos = contenedorProductos.getElementsByClassName('producto-seleccionado');
    productos = filtradoProductos(productos);
    let transaccion = {cod_linea: idLinea, nombre: nombre, descripcion: descripcion, src: src, productos: productos};
    let transaccionJSON = JSON.stringify(transaccion);
    console.log(transaccionJSON);
    fetch('http://localhost:3000/Administrador/lineas/editar-linea', {
        method: 'Post',
        body: transaccionJSON
    }).then(x => console.log('ok'))
        .catch(e=> {
        console.log(e);
    });  
}

function filtradoProductos(lista){
    let nuevaLista = [];
    for(i=0;i<lista.length;i++){
        let id = (lista[i].id);
        id = id.substring(9, id.length);  
        nuevaLista.push(id);
    }
    return nuevaLista;
}