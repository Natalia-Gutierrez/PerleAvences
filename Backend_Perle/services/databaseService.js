//cliente knex
const databaseService = () => {

    const knex = require('knex')({
        client: 'mssql',
        connection: {
            server: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB,
        }
    });
    //Nombres de tablas
    //Tabla Linea
    const tableLinea = 'Linea';
    //Tabla combo
    const tableCombo = 'Combo';
    //Tabla Producto
    const tableProducto = 'Producto';
    //Tabla contacto
    const tableContacto = 'contacto';
    //Tabla linea_producto
    const tableLinea_producto = 'linea_producto';
    //Tabla Tipo_Producto
    const tableTipo_Producto = 'Tipo_Producto';

    const crearLinea = ({ nombre, descripcion, src }) => { //Deconstruyendo json
        return knex(tableLinea).insert({
            nombre: nombre,
            descripcion: descripcion,
            src: src,
        }); //retorna una promesa
    };
    const crearCombo = ({ nombre, descripcion, src }) => { //Deconstruyendo json
        return knex(tableCombo).insert({
            nombre: nombre,
            descripcion: descripcion,
            src: src,
        }); //retorna una promesa
    };
    const crearProducto = ({ nombre, descripcion, tiempo_espera, src, tipo_producto }) => { //Deconstruyendo json
        return knex(tableProducto).insert({
            nombre: nombre,
            descripcion: descripcion,
            tiempo_espera: tiempo_espera,
            src: src,
            tipo_producto: Tipo_Producto_cod_tipo,
        }); //retorna una promesa
    };
    const crearContacto = ({ nombre, enlace }) => { //Deconstruyendo json
        return knex(tableContacto).insert({
            nombre: nombre,
            enlace: enlace,
        }); //retorna una promesa
    };
    const crearLinea_producto = ({ Producto_cod_prod, Linea_cod_linea }) => { //Deconstruyendo json
        return knex(tableLinea_producto).insert({
            Producto_cod_prod: Producto_cod_prod,
            Linea_cod_line: Linea_cod_linea,
        }); //retorna una promesa
    };
    const crearTipo_Producto = ({ Producto_cod_prod, Linea_cod_linea }) => { //Deconstruyendo json
        return knex(tableTipo_Producto).insert({
            Producto_cod_prod: Producto_cod_prod,
            Linea_cod_line: Linea_cod_linea,
        }); //retorna una promesa
    };


    //Lectura de tablas
    const leerLinea = () => {
        return knex(tableLinea).select();
    };
    const leerCombo = () => {
        return knex(tableCombo).select();
    };
    const leerProducto = () => {
        return knex(tableProducto).select();
    };
    const leerContacto = () => {
        return knex(tableContacto).select();
    };
    const leerLineaProducto = () => {
        return knex(tableLinea_producto).select();
    };
    const leerTipoProducto = () => {
        return knex(tableTipo_Producto).select();
    };

    return {
        crearLinea,
        crearCombo,
        crearProducto,
        crearContacto,
        crearLinea_producto,
        crearTipo_Producto,
        leerLinea,
        leerCombo,
        leerContacto,
        leerProducto,
        leerLineaProducto,
        leerTipoProducto
    };

};
//Exportamos a toda la aplicacion
module.exports = {
    databaseService
};