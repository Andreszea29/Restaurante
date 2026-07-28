function validarDatos() {

let metodo_pago = document.getElementById("metodo_pago").value;
let pedido = document.getElementById("pedido").value;
let referencias = document.getElementById("referencias").value;
let direccion = document.getElementById("direccion").value;
let nombre = document.getElementById("nombre").value;
let email = document.getElementById("email").value;
let telefono = document.getElementById("telefono").value;



    if (metodo_pago == "" || referencias == "" || direccion == "" || nombre == "" || email == "" || telefono == "" || pedido == "") {

        Swal.fire({
            title: "Debe completar todos los campos",
            icon: "warning"
        });
        return;
    }

    if (!/^[a-zA-ZÁÉÍÓÚáéíóúñÑ ]+$/.test(nombre)) {
        console.log("Los datos ingresados son incorrectos");
        Swal.fire({
            title: "El nombre debe contener solo letras",
            icon: "error"
        });
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        console.log("Los datos ingresados son incorrectos");
        Swal.fire({
            title: "El correo electrónico no es válido",
            icon: "error"
        });
        return;
    }

    if (!/^\d{10}$/.test(telefono)) {
        console.log("Los datos ingresados son incorrectos");
        Swal.fire({
            title: "El teléfono debe contener exactamente 10 números",
            icon: "error"
        });
        return;
    }
    Swal.fire({
        title: "Datos ingresados correctamente",
        icon: "success"
    });
}