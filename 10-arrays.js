//array

//declarar array

let myArray2 = new Array()
let myArray = []

myArray = ["Moises", "Grimaldo", "Moicas", 29, false]
myArray2 = new Array("Moises","Grimaldo", "Moicas", 20, true)

console.log(myArray2)
console.log(myArray)

myArray2 = new Array(3)
myArray2[0] = "Moises"
//myArray2[1] = "Grimaldo"
myArray2[2] = "Moicas"

console.log(myArray2)

myArray = []
myArray[0] = "Moises"
//myArray[1] = "Grimaldo"
myArray[2] = "Moicas"

console.log(myArray)


//metodos comunes en arrays
myArray = []

//push y pop
myArray.push("moises")
myArray.push("grimaldo")
myArray.push(20) //agrega al final del array

console.log(myArray)

// console.log(myArray.pop())
// myArray.pop() //elimina al final del array

console.log(myArray)

//shift y unshift

console.log(myArray.shift()) //shift elimina el primer elemento del array

console.log(myArray)

console.log(myArray.unshift("moises", "alejandro")) //agrega elementos al principio

console.log(myArray)

//length

console.log(myArray.length)

//clear
myArray = []
myArray = ["Moises", "Grimaldo", "Moicas", 29, false]
//slice

let newArray = myArray.slice(0, 2)  //devuelve una copia de una porcion del array
console.log(newArray)


//splice

myArray.splice(1,3, "AGREGAMOS UN NUEVO ELEMENTO")
console.log(myArray)

