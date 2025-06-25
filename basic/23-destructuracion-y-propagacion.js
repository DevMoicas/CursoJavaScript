//Destructuracion una sintaxis que permite extraer valores de arrays o de objetos y asignarlos a variables

let myArray = [1,2,3,4]

let person = {
    name: "Brais",
    age: 37,
    alias: "MoureDev"
}


//Sintaxis arrays

let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray

console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)


//Sintaxis de arrays con valores predeterminados.

let [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0] = myArray

console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9)


//Ignorar elementos del array

console.log("Ignoramos elementos del arrray , aqui debe arrojar 1 y 4:")
let [myValue10, , , myValue13] = myArray

console.log(myValue10)

console.log(myValue13)

//Destructuracion de objetos sintaxis
let {name,age,alias} = person

console.log(name)
console.log(age)
console.log(alias)


//Sintaxis de objetos con valores predetrerminados
let {name2, age2, alias2, email = "testemail@gmail.com"} = person

console.log(name2) //no existe
console.log(age2) //no existe
console.log(alias2) //no existe
console.log(email)

//Sintaxis objects pero con nuevos nombres de variables
let {name: name3,age: age3,alias: alias3} = person

console.log(name3)
console.log(age3)
console.log(alias3)

//Desestructuracion de objetos anidados
let person3 = {
    name: "Brais",
    age: 37,
    alias: "Mouredev",
    walk: function walk () {
        console.log("La persona esta caminando")
    },
    job: {
        name: "Programar",
        exp: 15,
         work: function work () {
        console.log("La persona esta trabajando")
        }
    }
}

let {name: name4, job: {name: jobName}} = person3

console.log(name4)
console.log(jobName)


/**Propagar permite expandir elementos de un array o un objeto 
 * a otros arrays u otros objetos*/

let myArray2 = [...myArray, 5, 6]
console.log(myArray2)


//Copia de arrays
let myArray3 = [...myArray] //Copia
console.log(myArray3)


//Combinación de arrays

let myArray4 = [...myArray2, ...myArray3, ...myArray]

console.log(myArray4)

//Sintaxis de propagación a objetos
let person4 = {...person, email: "emailpropagacion@gmail.com"}
console.log(person4)

//Copia de objetos
let person5 = {...person}

console.log(person5)
