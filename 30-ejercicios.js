//1. Crea una funcion que use un error correctamente
function isMayorThan18(age) {
    if(!Number.isInteger(age)) {
        console.error("No es un numero")
    } else if(age < 18) {
        console.log("El usuario es menor de edad")
    } else if(age >= 18) {
        console.log("El usuario es mayor de edad")
    }
}

isMayorThan18(18)
//2. Crea una funcion que use warn correctamente
function isMayorThan182(age) {
    if(!Number.isInteger(age)) {
        console.error("No es un numero")
    } else if(age < 18) {
        console.warn("Debes ser mayor de edad para usar este sistema")
    } else if(age >= 18) {
        console.log("El usuario es mayor de edad")
    }
}
//3. Crea una funcion que utilice info correctamente
function info(lenguaje) {
    if(lenguaje.toUpperCase() === "JavaScript" || lenguaje === "JAVASCRIPT") { 
        console.info("JavaScript es un lenguaje de programacion usado mayormente para web")
        } else if(lenguaje.toUpperCase() === "Python" ||lenguaje === "PYTHON" ) {
            console.info("Python es un lenguaje de programacion con sintaxis facil")
        }
}

info("PYTHON")
//4. Usa table
let usuariosDataBase = [
    {username: "Pepito"},
    {username: "Juanito"},
    {username: "Moicaspro900"}
]
let usuariosDataBaseCopy = [
    {username: "Pepito"},
    {username: "Juanito"},
    {username: "Moicaspro900"}
]

console.log(usuariosDataBase)
console.table(usuariosDataBase)
//5. Usa group
console.group("Bases de datos:")
console.table(usuariosDataBase)
console.table(usuariosDataBaseCopy)
console.groupEnd("")
console.log("Grupo finalizado")
//6. Usa time
console.time("TIEMPO1")

function sumarPares() {
     let suma = 0
    for(i = 0; i < 100; i++) {
        if(i % 2 == 0) {
            suma = suma + i
        }
    }
   return suma
}

console.log(sumarPares())

console.timeEnd("TIEMPO1")
//7. Valida con assert si un numero es positivo
let numero = -2
console.assert(numero > 0, "El numero debe ser positivo")
//8. Utiliza count
console.count("CLICK")
console.count("CLICK")
console.count("CLICK")
//9. Utiliza trace
console.trace()
//10. Utiliza clear
console.clear()