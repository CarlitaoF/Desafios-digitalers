let nombre = prompt("Ingresa tu nombre de usuario:")
let password = prompt("Ingresa tu contraseña:")

if (nombre === 'admin' && password === '1234') {
    console.log("Bienvenid@ " + nombre)
} else {
    console.error("No se reconocen las credenciales ingresadas")
}

/*
 *  TIPS para incrementar la seguridad
 *  Puedes validar por separado múltiples condiciones sobre nombre y sobre password. Ejemplo:
 * (nombre !== null && nombre !== '' && nombre === 'admin') && 
 * (password !== null && password !== '' && password === '1234')
 * Validas entre paréntesis y por separado, múltiples posibles valores de la variable 'nombre'
 * Lo mismo aplicas sobre la variable 'password'.
 * Luego concatenas ambos bloques de paréntesis con el operador lógico AND 
 */