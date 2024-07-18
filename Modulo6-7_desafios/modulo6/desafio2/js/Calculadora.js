function calcularPresupuesto() {
    
    let ingresoTotal = parseFloat(document.getElementById("ingresoTotal").value);

    if (ingresoTotal <= 0) {
        alert("Por favor, ingrese un valor numérico válido mayor que 0.");
        return;
    }
    
    let gastosNecesarios = ingresoTotal * 0.50;
    let gastosOpcionales = ingresoTotal * 0.30;
    let ahorroInversion = ingresoTotal * 0.20;

    document.getElementById("resultado").innerHTML =
        `<p>Gastos necesarios (50%): $${gastosNecesarios.toFixed(2)}</p>` +
        `<p>Gastos opcionales (30%): $${gastosOpcionales.toFixed(2)}</p>` +
        `<p>Ahorro e inversión (20%): $${ahorroInversion.toFixed(2)}</p>`;
    }
