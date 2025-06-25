//1. Imprime por consola tu nombre si una variable toma su valor
let favoriteGame = "fifa"
let persona 

if (favoriteGame.toUpperCase() == "GTAV") {
    persona = "moises"
} else {
    persona = "Es otra persona"
}

console.log(persona.toUpperCase())
//2. Imprime por consola un mensaje si el usuario y contraseña coincide con unos establecidos
const userName = "Moicaspro9900"
const password = "123456789"
let resultado 

if (userName == "Moicaspro900" && password == "123456789") {
resultado = "Los datos para iniciar sesión son correctos"
} else {
   resultado = "Los datos son incorrectos"
}

console.log(resultado)
//3. Verifica si un numero es positivo , negativo o cero e imprime un mensaje
let number = -2

if (number > 0) {
    console.log("El numero es positivo")
} else if(number < 0) {
console.log("El numero es negativo")
} else {
    console.log("El numero es cero")
}
//4. Verifica si una persona puede votar o no e indica cuantos años le faltan
let age = 20
let añosFaltantes
if (age >= 18) {
    console.log ("El usuario puede votar")
} else {
añosFaltantes = 18 - age
console.log(`A la persona le faltan ${añosFaltantes} años para poder votar`)
}
//5. Usa el operador ternario para asignar el valor "adulto" o menor dependiendo de la edad
if (age >= 18) {
    console.log("El usario es considerado un adulto")
} else {
    console.log("El usuario no es un adulto")
}

//6. Muestra en que estación del año nos encontramos dependiendo de una variable mes
let month = "DICIEMBRE"
let station

if (month === "Diciembre" ||month === "Enero"||month === "Febrero") {
    station = "Invierno"
} else if(month === "Marzo" ||month === "Abril" ||month === "Mayo") {
station = "Primavera"
} else if (month === "Junio" ||month === "Julio" ||month === "Agosto") {
    station = "Verano"
} else if (month === "Septiembre" ||month === "Octubre"||month === "Noviembre") {
    station = "Otoño"
} else {
    station = "Estacion del año invalida, el mes no es correcto"
}

console.log(station)
//7. Muestra el numero de dias que tiene un mes dependiendo de la variable del ejercicio anterior 
let monthDays

if (month === "Enero" ||month === "Marzo"||month === "Mayo"||month === "Julio"||month === "Agosto"||month === "Octubre"||month === "Diciembre" ) {
    monthDays = 31
} else if(month === "Abril" || month === "Junio"||month === "Septiembre"||month === "Noviembre") {
monthDays = 30
} else if (month === "Febrero") {
    monthDays = 28
} else {
    monthDays = "El mes no existe"
}

console.log(monthDays)
//8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idiom = "english".toUpperCase()
let greeting 

switch(idiom) {
    case "ESPAÑOL":
    greeting = "Holaaa"
    break

    case "INGLES" && "ENGLISH":
    greeting = "Hello"
    break

    case "FRENCH" && "FRANCES":
        greeting = "Bon jour"
        break
        
        default:
            greeting = "Idioma no disponible"
}

console.log(greeting)
//9. Usa un switch para hacer de nuevo el ejercicio 6


let station2
switch(month) {

    case "DICIEMBRE":
    case "ENERO": 
    case "FEBRERO":
    station2 = "invierno"
    break

    case "MARZO": 
    case "ABRIL": 
    case "MAYO":
    station2 = "primavera"
    break

    case "JUNIO":
    case "JULIO": 
    case "AGOSTO":
        station2 = "verano"
        break

        case "SEPTIEMBRE":
        case "OCTUBRE": 
        case "NOVIEMBRE":
            station2 = "otoño"
            break

            default:
                station2 = "el mes no existe"
}

console.log(station2)
//10. Usa un switch para hacer de nuevo el ejercicio 7

switch(month) {
    case "ENERO":  
    case"MARZO": 
    case "MAYO": 
    case "JULIO":
    case "AGOSTO":  
    case "OCTUBRE": 
    case "DICIEMBRE":
        monthDays = 31
        break

        case "ABRIL":
        case "JUNIO": 
        case "SEPTIEMBRE": 
        case "NOVIEMBRE":
        monthDays = 30
        break

        case "FEBRERO":
            monthDays = 28
            break

            default:
                monthDays = "Mes no existe"
}

console.log(monthDays)