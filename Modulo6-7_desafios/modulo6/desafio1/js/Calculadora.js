function calcularPuntoDeEquilibrio(){ 
    
    let costosFijos = parseFloat(document.getElementById("costosFijos").value);
    let precioVenta = parseFloat(document.getElementById("precioVenta").value);
    let costoVariable = parseFloat(document.getElementById("costoVariable").value);

    if (precioVenta > costoVariable) {
        const puntoDeEquilibrio = costosFijos / (precioVenta - costoVariable);
        document.getElementById('resultado').innerText = `El punto de equilibrio es ${puntoDeEquilibrio.toFixed(2)} unidades.`;
    } else {
        document.getElementById('resultado').innerText = 'El precio de venta debe ser mayor que el costo variable.';
    }
}