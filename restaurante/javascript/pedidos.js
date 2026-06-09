let metodo_pago =  document.getElementById("metodo_pago").value;
let descripcion = document.getElementById("descripcion").value;
let referencias = document.getElementById("referencias").value; 
let direccion = document.getElementById("direccion").value;
let nombre = document.getElementById("nombre").value;
let email = document.getElementById("email").value;
let telefono = document.getElementById("telefono").value;
let pedido = document.getElementById("pedido").value;


function validarDatos() {

    // letras 
    if (metodo_pago != "" || descripcion != "" || referencias != "" || direccion != "" || nombre != "" || email != "" || telefono != "" || pedido != "" ){

        if (nombres ==  /[^\d+$]/ ){
            console.log("Los datos ingresados son incorrectos")
        }
        if (email == /[^\d+$]/){
            console.log("Los datos ingresados son incorrectos")
        }
    }
    else{
        console.log("Ingrese los datos correctos")
    }
}

 // Nombre (que no contenga números), Email(que contenga @), telefono (Que no contenga letras y que no sea mayor  10 digitos)