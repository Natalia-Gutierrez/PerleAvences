module.exports = function(app, databaseService) {

    const express = require('express');
    app.use(express.json({
        type: '*/*'
    }));
    //ruta tipo get -> inicial(apenas ingrese a la página)
    app.get('/', (request, response) => {
        // Status 200 -> todo bien 🤠
        response.status(200).json({ "mensaje": "Todo bien" });
    });
    //Llamado linea
    //ruta tipo post -> agregar datos
    // 2 argumentos, ruta y función
    app.post('/linea', (request, response) => {
        const dato = request.body; //request.body -> la info que viene 
        console.log(dato);

        databaseService.crearLinea(dato)
            .then(() => {
                response.json({ "mensaje": "dato ingresado!" });
                console.log('dato ingresado!');
            }).catch(e => {
                response.status(500).json(e);
                console.log(e);
            });

    });

    //ruta para leer -> get(navegador o postman)
    app.get('/linea', (request, response) => {
        databaseService.leerLinea().leerProducto().leerContacto().leerCombo()
            .then(resultado => {
                response.json(resultado);
            }).catch(e => { //Definiiendo error con estado 500
                response.status(500).json(e)
                console.log(e);
            });
    });

    app.get('/combo', (request, response) => {
        databaseService.leerCombo()
            .then(resultado => {
                response.json(resultado);
            }).catch(e => {
                response.status(500).json(e)
                console.log(e);
            });
    });
    app.get('/productos', (request, response) => {
        databaseService.leerProducto()
            .then(resultado => {
                response.json(resultado);
            }).catch(e => {
                response.status(500).json(e)
                console.log(e);
            });
    });

    app.get('/contacto', (request, response) => {
        databaseService.leerContacto()
            .then(resultado => {
                response.json(resultado);
            }).catch(e => {
                response.status(500).json(e)
                console.log(e);
            });
    });

    app.get('/tipoProducto', (request, response) => {
        databaseService.leerTipoProducto()
            .then(resultado => {
                response.json(resultado);
            }).catch(e => {
                response.status(500).json(e)
                console.log(e);
            });
    });

    app.get('/lineaProducto', (request, response) => {
        databaseService.leerLineaProducto()
            .then(resultado => {
                response.json(resultado);
            }).catch(e => {
                response.status(500).json(e)
                console.log(e);
            });
    });
};