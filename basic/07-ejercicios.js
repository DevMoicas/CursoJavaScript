//1. Concatena cadenas de texto
const myUniversity = "Universidad de Colima"
const myName = "Moises"
const myLastName = "Grimaldo"
const allMyInformation = "Moises "+ myLastName + " tiene 20 años y estudia en: " + myUniversity
console.log(allMyInformation)
//2. Muestra la longitud de una cadena de texto
console.log(allMyInformation.length)
//3. Muestra el primer y ultimo caracter de un string
console.log(allMyInformation[0])
console.log(allMyInformation[64])
//4. Convierte a mayusculas y minusculas un string
console.log(allMyInformation.toUpperCase())
console.log(allMyInformation.toLowerCase())
//5. Crea una cadena de texto de varias lineas
let message3Lines = `Este es un ejemplo de un mensaje
el cual utiliza varias lineas en el lenguaje de JavaScript,
para escribirlo se usa el simbolo de acento invetido`
console.log(message3Lines)
//6. Interpola el valor de una variable en un string
console.log(`Hola, mi nombre es ${myName}, me apellido ${myLastName} y estudio en la ${myUniversity}`)
//7. Reemplaza todos los espacios en blanco de un string por guiones
const prueba = "hola" + "hola" + "hola" + "hola" 
console.log(allMyInformation.replace(/ /g, "-"))
console.log(prueba.replace(/hola/g, "adios"))
//8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(allMyInformation.toUpperCase().includes("UNIVERSIDAD"))
//9. Comprueba si dos strings son iguales
let stringOne = "HOLA"
let stringTwo = "hola"
console.log(stringOne.toUpperCase() == stringTwo.toUpperCase())
console.log(stringOne === stringTwo)
//10. Comprueba si dos strings tienen la misma longitud
console.log(stringOne.length == stringTwo.length)