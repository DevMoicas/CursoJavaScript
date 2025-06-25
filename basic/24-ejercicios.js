//1. Usa desestructuración para extraer los dos primeros elementos de un array
let arrayNumbers = [4,8,12,16,20,24]

let [valor1, valor2, valor3, valor4, valor5, valor6] = arrayNumbers
console.log(valor1)
console.log(valor2)
console.log(valor3)
console.log(valor4)
console.log(valor5)
console.log(valor6)
//2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [valor7, valor8, valor9, valor10, valor11, valor12, valor13 = 28] = arrayNumbers
console.log(valor7)
console.log(valor8)
console.log(valor9)
console.log(valor10)
console.log(valor11)
console.log(valor12)
console.log(valor13)
//3. Usa desestructuración para extraer dos propieades de un objeto
let personObject = {
    name: "Pepe",
    edad: 16,
    deporteFavorito: "Futból",
    ocupacion: "Estudiante",
    estudios: {
        universidad: "Ucol",
        primaria: "Colima"
    }
}

let {edad, ocupacion} = personObject

console.log(edad)
console.log(ocupacion)
//4. Usa desestructuración para extraer dos propieades de un objeto y asignalas a nuevas variables con valores diferentes
let {deporteFavorito: cambioDeporteFavorito, ocupacion: trabajo} = personObject

console.log(cambioDeporteFavorito)
console.log(trabajo)
//5. Usa desestructuración para extraer dos propieades de un objeto anidado
let {estudios: {universidad: carrera}} = personObject
let {estudios: {primaria: estado}} = personObject

console.log(carrera)
console.log(estado)
//6. Usa propagación para combinar dos arrays en uno nuevo
let frutas = ["Manzana", "Piña", "Pera", "Platano"]
let verduras = ["Tomate", "Apio", "Brocoli", "Lechuga"]

let platoBuenComer = [...frutas, ...verduras]

console.log(platoBuenComer)
//7. Usa propagación para crear una copia de un array
let platoBuenComerCopia = [...platoBuenComer]

console.log(platoBuenComerCopia)
//8. Usa propagación para combinar dos objetos en un nuevo
let user1 = {
    userName: "Moicas",
    password: "12345",
    date: "13/06/2025"
}

let user2 = {
    userName1: "Pedro",
    password1: "6789",
    date1: "10/10/2024"
}


let usuariosDataBase = {...user1, ...user2}

console.log(usuariosDataBase)
//9, Usa propagación crear una copia de un objeto
let usuariosDataBase2 = {...usuariosDataBase}

console.log(usuariosDataBase2)
//10. Combina desestructuracion y propagación
let user3 = {
    username2: "Andres",
    password2: "101112",
    date2: "05/10/2023"
 }

 let {username2, password2, date2} = user3

 console.log(username2)
 console.log(password2)
 console.log(date2)

 let user3Copy = {
    username: username2,
    password: password2,
    date: date2
 }


 let dataBase = {user3, user3Copy}
console.log("Aqui tienes la base de datos")
 console.log(dataBase)