function validarDatos() {

let nombre = document.getElementById("nombre").value;
let email = document.getElementById("email").value;
let celular = document.getElementById("celular").value;
let genero = document.getElementById("genero").value;
let fecha_nacimiento = document.getElementById("fecha_nacimiento").value;
let direccion = document.getElementById("direccion").value;
let contrasena = document.getElementById("contrasena").value;


    if (nombre == "" || email == "" || celular == "" || genero == "" || fecha_nacimiento == "" || direccion == "" || contrasena == "") {

        Swal.fire({
            title: "Debe completar todos los campos",
            icon: "warning"
        });
        return;
    }

    if (!/^[a-zA-ZÁÉÍÓÚáéíóúñÑ ]+$/.test(nombre)) {
        Swal.fire({
            title: "El nombre debe contener solo letras",
            icon: "error"
        });
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        Swal.fire({
            title: "El correo electrónico no es válido",
            icon: "error"
        });
        return;
    }

    if (!/^\d{10}$/.test(celular)) {
        Swal.fire({
            title: "El celular debe contener exactamente 10 números",
            icon: "error"
        });
        return;
    }

    if (!/^[a-zA-ZÁÉÍÓÚáéíóúñÑ ]+$/.test(genero)) {
        Swal.fire({
            title: "El género debe contener solo letras",
            icon: "error"
        });
        return;
    }

    if (fecha_nacimiento == "") {
        Swal.fire({
            title: "Debe seleccionar una fecha de nacimiento",
            icon: "error"
        });
        return;
    }

    if (!/^[a-zA-ZÁÉÍÓÚáéíóúñÑ0-9#.,\- ]+$/.test(direccion)) {
        Swal.fire({
            title: "La dirección contiene caracteres no válidos",
            icon: "error"
        });
        return;
    }

    if (contrasena.length < 8) {
        Swal.fire({
            title: "La contraseña debe tener mínimo 8 caracteres",
            icon: "error"
        });
        return;
    }

    let usuario = {
        nombre: nombre,
        email: email,
        celular: celular,
        genero: genero,
        fecha_nacimiento: fecha_nacimiento,
        direccion: direccion,
        contrasena: contrasena
    };

    localStorage.setItem("usuario", JSON.stringify(usuario));

    Swal.fire({
        title: "Datos ingresados correctamente",
        icon: "success"
    });

}