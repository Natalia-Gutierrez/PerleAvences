/*Llenar todos los datos en los campos*/
window.onload = function llenarDatos(){
    document.getElementById("user").value="Usuario";
    document.getElementById("name").value="Nombre";
    document.getElementById("correo").value="Correo";
    document.getElementById("ig").value="Instagram";
    document.getElementById("wsp").value="Whatsapp";
    document.getElementById("fb").value="Facebook";
    document.getElementById("tel").value="Telefono";
    document.getElementById("email").value="Email";
    document.getElementById("price").value="35";
}

/*Habilitar y deshabilitar la opción de editar campo.*/
let n = 0;
function btnChange (id_div, id_img, id_input){
    if (n == 0){
        document.getElementById(id_img).src="../resources/images/otrasConfiguraciones/guardar.svg";
        document.getElementById(id_input).disabled=false;
        
        let html = '';
        html += `
        <div id="delete">
            <button type="button" class="cancelar_edit" onclick="btnChange('${id_div}', '${id_img}', '${id_input}')">
                <img id="cancelEdit" src="../resources/images/otrasConfiguraciones/cancelar.svg" alt="cancelar" width="28px"/>
            </button>
            <style type="text/css">
                .cancelar_edit { 
                    position: flex;
                    align-items: center;
                    justify-content: center;
                    width: 28px;
                    height: 28px;
                    border-radius: 100%;
                    border-width: 0px;
                    background-color: #FFFFFF; 
                }
            </style>
        </div>
        `;
        $('#'+id_div).html(html);
        n = 1;
    } else {
        document.getElementById(id_img).src="../resources/images/otrasConfiguraciones/editar.svg";
        document.getElementById(id_input).disabled=true;
        var y = document.getElementById("delete");
        var x = document.getElementById(id_div);
        x.removeChild (y);
        n = 0;
    }
}

/*Mostrar password*/
function mostrarPassword(id_passw, id_icon){
    var cambio = document.getElementById(id_passw);
    if(cambio.type == "password"){
        cambio.type = "text";
        $('.'+id_icon).removeClass('fa fa-eye-slash').addClass('fa fa-eye');
    }else{
        cambio.type = "password";
        $('.'+id_icon).removeClass('fa fa-eye').addClass('fa fa-eye-slash');
    }
}

/*Cambiar precio dependiendo del departamento*/
const precios = [
    {
        depto: 'La Paz',
        precio: 35
    },
    {
        depto: 'Cochabamba',
        precio: 40
    },
    {
        depto: 'Santa Cruz',
        precio: 30
    },
];
function cambiarDepto(){
    let d = document.getElementById("departamento").value;
    precios.forEach(function(p){
        if (p.depto == d){
            document.getElementById("price").value=p.precio;
        }
    });
}

const administradores = [
    {
        codigo: 101,
        user_admi: 'Naomi',
        nombre_admi: 'Naomi Tacachira',
        correo_admi: 'naomi.tacachira@gmail.com',
        tipo_Admi: 'Normal'
    },
    {
        codigo: 102,
        user_admi: 'Naomi',
        nombre_admi: 'Naomi Tacachira',
        correo_admi: 'naomi.tacachira@gmail.com',
        tipo_Admi: 'Normal'
    },
    {
        codigo: 103,
        user_admi: 'Naomi',
        nombre_admi: 'Naomi Tacachira',
        correo_admi: 'naomi.tacachira@gmail.com',
        tipo_Admi: 'Normal'
    },
];
  
function renderizarAdministradores(administradores) {
    let html = '';
    
    administradores.forEach(function(admi){
        html += `
            <div class="accordion-item${admi.codigo}" id="accordion-item${admi.codigo}">
                <h2 class="accordion-header" id="flush-heading${admi.codigo}">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${admi.codigo}" aria-expanded="false" aria-controls="flush-collapse${admi.codigo}">
                        Registro de ${admi.nombre_admi}
                    </button>
                </h2>
                <div id="flush-collapse${admi.codigo}" class="accordion-collapse collapse" aria-labelledby="flush-heading${admi.codigo}" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <div class="informacion${admi.codigo}">
                            Información del administrador <br>
                            <t>Código:  ${admi.codigo} <br>
                            <t>Nombre de usuario:  ${admi.user_admi} <br>
                            <t> Correo electrónico:  ${admi.correo_admi} <br>
                            Tipo de administrador:  ${admi.tipo_Admi}
                        </div>
                        <div class="btn_eliminar_admi${admi.codigo}">
                            <button type="button" class="eliminar${admi.codigo}" onclick="btnDelete('accordion-item${admi.codigo}')">
                                Eliminar<img src="../resources/images/otrasConfiguraciones/basurero_blanco.svg" alt="add" width="15px"/>
                            </button>
                        </div>
                    </div>
                </div>
                <style type="text/css">
                    .btn_eliminar_admi${admi.codigo} {
                        display: flex;
                        justify-content: right;
                    }
                    .eliminar${admi.codigo} {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-width: 0px;
                        background-color: #eecabd;
                        color: white;
                        width: 6vw;
                        min-width: 200px;
                        border-radius: 3px;
                        font-size: 90%;
                        font-family: 'Urbanist', sans-serif;
                        padding: 1% 1%;
                    }
                    .eliminar${admi.codigo} img {
                        margin-left: 4%;
                    }
                    .eliminar${admi.codigo}:hover {
                        background: palevioletred;
                    }
                    .accordion-item${admi.codigo} {
                        border-color: #d4d7d9;
                        border-style: solid;
                        border-width: 0.2px;
                        margin-bottom: 1%;
                    }
                </style>
            </div>
        `;
    });
    $('#administrador').html(html);
}
  
$(function() {
    renderizarAdministradores(administradores);
});

function btnDelete (id_div){
    var y = document.getElementById(id_div);
    var x = document.getElementById("administrador");
    x.removeChild(y);
}