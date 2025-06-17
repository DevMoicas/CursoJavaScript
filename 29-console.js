//console

//log
console.log("Hola mundo")

//error
console.error("Este es un mensaje de error")
console.error("Error el conectarse a la base de datos", new Error("Conexion fallida"))

//warn
console.warn("este es un mnesjae de advertenciaa")

//info
console.info("Este es un mensaje de informacion")

//table
let data = [
    ["Moises", 20]
    ["Brais", 37]
]
console.table(data)

data = [
    {name: "Moises", age: 20},
    {name: "Brais,", age: 30}
]

console.table(data)

//group ()

console.group("Usuario:")
console.log("Moises")
console.groupEnd()
console.log("otro")

//time
// console.time("Tiempo de ejecucion")

// for(i = 0; i < 10000; i++) {
//     console.log(i)
// }

// console.timeEnd("Tiempo de ejecucion")

//assert, si es false la condicion se imprime
let age = 17
console.assert(age >= 18, "El usuario debe ser mayor de edad")

//count
console.count("CLICK")
console.count("CLICK")
console.count("CLICK")
console.countReset("CLICK")
console.count("CLICK")
console.count("CLICK")

//trace, muestra seguimiento de la pila de ejecución
function func() {
 funcB()
}

function funcB() {
console.trace("Seguimiento de la ejecucion")
}

func()

//clear limpia todo

// console.clear()
