// crear un array

let frutas = ["Manzana", "Banana", "Sandia", "Pera"]

console.log(frutas)

//Acceder a un elemento de array mediante su indice
let primerElemento = frutas[0]
console.log(primerElemento)

let ultimoElemento = frutas[frutas.length - 1] // Ultimo elemento siempre va ser el 1
console.log(ultimoElemento)

//Recorrer un array manera uno

frutas.forEach(function (fruta, indice) {
    console.log(`La fruta en el indice ${indice} es: ${fruta}`)
})

//Recorrer un array usando funcion flecha
frutas.forEach((fruta, indice) => {
    console.log(`El indice ${indice} corresponde a la fruta: ${fruta}`)
})

//Añadir un elemento al final del array
frutas.push("naranja")
console.log(frutas)

//Eliminar el ultimo elemento de un array
frutas.pop()
console.log(frutas)

//Añadir un elemento al principio de un Array
frutas.unshift("Fresa")
console.log(frutas)

//Eliminar el primer elemento de un array
frutas.shift()
console.log(frutas)

//Encontrar el indice de un elemento en un array
console.log(frutas.indexOf("Pera"))

//Eliminar un unico elemento mediante su posicion
// let elementoBorrado= frutas.splice(1, 2) // A partir del elemento 3 borra 2 elementos
// console.log(frutas)

//Copiar un array
let copiaFrutas = frutas.slice()
console.log(copiaFrutas)

//Imprimir un elemento de un array
console.log(frutas[1])

frutas.join("prueba")
console.log(frutas)

//converir array a string
console.log(frutas.toString())


//Aqui termina lo aprendido con la documentacion de MDN e inicia lo aprendido del video de youtube
console.log("---------------------------------------------")
console.log("Aqui inicia lo aprendido del curso de Arrays")
let numbers = [2,3,4,5,6,7,8,9,0]
console.log(numbers.length) //saber longitud de un array

//Alternativas para acceder a un array
console.log(numbers[8]) //usando corchete
console.log(numbers.at(-1)) //Usando at





