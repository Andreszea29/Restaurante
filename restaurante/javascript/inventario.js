function validarDatos() {

let codigo_producto = document.getElementById("codigo_producto").value;
let nombre_producto = document.getElementById("nombre_producto").value;
let precio_unitario = document.getElementById("precio_unitario").value;
let cantidad_producto = document.getElementById("cantidad_producto").value;
let marca_producto = document.getElementById("marca_producto").value;
let categoria_producto = document.getElementById("categoria_producto").value;
let unidad_medida = document.getElementById("unidad_medida").value;

    if (codigo_producto == "" || nombre_producto == "" || precio_unitario == "" || cantidad_producto == "" || marca_producto == "" || categoria_producto == "" || unidad_medida == "") {
        Swal.fire({
            title: "Ingresa los datos",
            icon: "warning"
        });
        return;
    }

    if (!/^[a-zA-ZÁÉÍÓÚáéíóúñÑ ]+$/.test(codigo_producto)) {
        console.log("Los datos ingresados son incorrectos");
        Swal.fire({
            title: "Código del producto debe contener letras",
            icon: "error"
        });
        return;
    }

    if (!/^[a-zA-ZÁÉÍÓÚáéíóúñÑ ]+$/.test(nombre_producto)) {
        console.log("Los datos ingresados son incorrectos");
        Swal.fire({
            title: "Nombre del producto debe contener letras",
            icon: "error"
        });
        return;
    }

    if (!/^\d+$/.test(cantidad_producto)) {
        Swal.fire({
            title: "Cantidad del producto debe contener números",
            icon: "error"
        });
        return;
    }

    if (!/^[a-zA-ZÁÉÍÓÚáéíóúñÑ ]+$/.test(unidad_medida)) {
        console.log("Los datos ingresados son incorrectos");
        Swal.fire({
            title: "Unidad de medida debe contener letras",
            icon: "error"
        });
        return;
    }

    if (!/^\d+$/.test(precio_unitario)) {
        Swal.fire({
            title: "Precio unitario debe contener números",
            icon: "error"
        });
        return;
    }

    if (!/^[a-zA-ZÁÉÍÓÚáéíóúñÑ ]+$/.test(marca_producto)) {
        console.log("Los datos ingresados son incorrectos");
        Swal.fire({
            title: "Marca del producto debe contener letras",
            icon: "error"
        });
        return;
    }

    if (!/^[a-zA-ZÁÉÍÓÚáéíóúñÑ ]+$/.test(categoria_producto)) {
        console.log("Los datos ingresados son incorrectos");
        Swal.fire({
            title: "Categoría debe contener letras",
            icon: "error"
        });
        return;
    }

    console.log(
        `Información del Producto:
        ${codigo_producto}
        ${nombre_producto}
        ${precio_unitario}
        ${cantidad_producto}
        ${marca_producto}
        ${categoria_producto}
        ${unidad_medida}`
    );

    let producto = {
        codigo_producto,
        nombre_producto,
        precio_unitario,
        cantidad_producto,
        marca_producto,
        categoria_producto,
        unidad_medida
    };

    localStorage.setItem("producto", JSON.stringify(producto));

    Swal.fire({
        title: "Datos ingresados correctamente",
        icon: "success"
    });

}