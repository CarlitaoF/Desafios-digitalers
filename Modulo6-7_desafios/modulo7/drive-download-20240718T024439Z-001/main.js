let edad = prompt("Ingresa tu edad, por favor:")

if (edad > 18) { 
    console.log("Bienvenid@ a la plataforma.")
} else {
    console.error("Debes ser mayor de 18 años para ingresar.")
}

/**
 * TIPS Para incrementar los controles podrías validar:
 * edad !== null (esto ocurre si el usuario pulsa el botón cancelar del cuadro de diálogo prompt())
 * edad !== '' (esto ocurre si el usuario pulsa el botón aceptar sin ingresar datos, en el cuadro de diálogo prompt())
 * utilizar para todos estos posibles escenarios el operador lógico AND, así encadenarás todas las varianetes posibles
 * 
 * (edad !== null && edad !== '' && edad > 18)
 * 
 */