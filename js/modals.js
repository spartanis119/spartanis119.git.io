let btn = document.getElementsByClassName('btn-cotizar');
let modal = document.getElementsByClassName('contenedor-formulario')[0];

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', mostrarModal);
}

function mostrarModal() {
    modal.style.display = 'block';
}

let cerrar = document.getElementById('btn-cerrar');
cerrar.addEventListener('click', function (e) {
    modal.style.display = 'none';
    error.style.display = 'none';
    formulario.reset();
    e.preventDefault();
})

let formulario = document.getElementById('formulario');
let modelo = formulario.modelo;
let nombre = formulario.nombre;
let apellido = formulario.apellido;
let direccion = formulario.direccion;
let telefono = formulario.telefono;
let correo = formulario.correo;
let terminos = formulario.terminos;
let error = document.getElementById('error');

formulario.addEventListener('submit', validarFormulario);

function validarModelo(e) {
    if (modelo.value == null || modelo.value == '' || modelo.value == '---') {
        error.style.display = 'block';
        error.innerHTML += '<li>Por favor seleccione su modelo</li>';
        e.preventDefault();
    } else {
        error.style.display = 'none'
        return true;
    }
}

function validarNombre(e) {
    if (nombre.value == null || nombre.value == '') {
        error.style.display = 'block';
        error.innerHTML += '<li>Por favor digite su nombre</li>';
        e.preventDefault();
    } else if (nombre.value.length > 25) {
        error.style.display = 'block';
        error.innerHTML += '<li>Su nombre debe ser menor a 25 caracteres</li>';
        e.preventDefault();
    } else {
        error.style.display = 'none'
        return true;
    }
}

function validarApellido(e) {
    if (apellido.value == null || apellido.value == '') {
        error.style.display = 'block';
        error.innerHTML += '<li>Por favor digite su apellido</li>';
        e.preventDefault();
    } else if (apellido.value.length > 25) {
        error.style.display = 'block';
        error.innerHTML += '<li>Su apellido debe ser menor a 25 caracteres</li>';
        e.preventDefault();
    } else {
        error.style.display = 'none'
        return true;
    }
}

function validarDireccion(e) {
    if (direccion.value == null || direccion.value == '') {
        error.style.display = 'block';
        error.innerHTML += '<li>Por favor digite su dirección</li>';
        e.preventDefault();
    } else if (direccion.value.length > 50) {
        error.style.display = 'block';
        error.innerHTML += '<li>Su direccion debe ser menor a 50 caracteres</li>';
        e.preventDefault();
    } else {
        error.style.display = 'none'
        return true;
    }
}

function validarTelefono(e) {
    if (telefono.value == null || telefono.value == '') {
        error.style.display = 'block';
        error.innerHTML += '<li>Por favor digite su telefono</li>';
        e.preventDefault();
    } else {
        error.style.display = 'none'
        return true;
    }
}

function validarCorreo(e) {
    if (correo.value == null || correo.value == '') {
        error.style.display = 'block';
        error.innerHTML += '<li>Por favor digite su correo</li>';
        e.preventDefault();
    } else {
        error.style.display = 'none'
        return true;
    }
}

function validarTerminos(e) {
    if (terminos.checked == false) {
        error.style.display = 'block';
        error.innerHTML += '<li>Por favor acepta los terminos</li>';
        e.preventDefault();
    } else {
        error.style.display = 'none'
        return true;
    }
}

function validarFormulario(e) {
    error.innerHTML = '';
    let bol1 = validarModelo(e);
    let bol2 = validarNombre(e);
    let bol3 = validarApellido(e);
    let bol4 = validarDireccion(e);
    let bol5 = validarTelefono(e);
    let bol6 = validarCorreo(e);
    let bol7 = validarTerminos(e);
    if (bol1 == true && bol2 == true && bol3 == true && bol4 == true && bol5 == true && bol6 == true && bol7 == true) {
        alert('Cotizacion Exitosa, en los proximos dias recibira un correo con la información de su auto');
    }
}