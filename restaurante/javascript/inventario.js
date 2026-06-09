let codigo_producto = document.getElementById("codigo_producto").value;
let nombre_producto = document.getElementById("nombre_producto").value;
let precio_unitario = document.getElementById("precio_unitario").value;
let cantidad_producto = document.getElementById("cantidad_producto").value;
let marca_producto = document.getElementById("marca_producto").value;
let categoria_producto = document.getElementById("categoria_producto").value;
let unidad_medida = document.getElementById("unidad_medida").value;

function validarDatos() {

    // letras 
    if (codigo_producto != "" || precio_unitario != "" || nombre_producto != "" || cantidad_producto != "" || marca_producto != "" || categoria_producto != "" || unidad_medida != "" ) {
        if(codigo_producto == /[a-zA-Z]/){
            console.log("Los datos ingresados son incorrectos")
        }
        if (precio_unitario == /[a-zA-Z]/){
            console.log("Los datos ingresados son incorrectos")
        }
        if (cantidad_producto == /[a-zA-Z]/){
            console.log("Los datos ingresados son incorrectos")
        }
    //Números
        if (nombre_producto ==  /[^\d+$]/ ){
            console.log("Los datos ingresados son incorrectos") 
        }
        if (unidad_medida == /[^\d+$]/ ){
            console.log("Los datos ingresados son incorrectos")
        }
        if (categoria_producto == /[^\d+$]/){
            console.log("Los datos ingresados son incorrectos")
        }
    }
    else{
        console.log("Ingrese los datos correctos")
    }
}