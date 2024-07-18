let nombre = prompt("Ingresa tu nombre de usuario:")
let contrasena = prompt("Ingresa tu contraseña:")

if (nombre === 'admin' && contrasena === '1234') {
    alert("Bienvenid@ " + nombre)
} else {
    alert("No se reconocen las credenciales ingresadas")
}
