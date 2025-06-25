//Map o diccionario en otros lenguajes,un map es una colección de elementos

//declaracion

let myMap = new Map()

console.log(myMap)

//inicializacion

myMap = new Map([
    ["name", "Moises"],
    ["email", "grimaldogarcia2004@gmail.com"],
    ["age", 20]
])

console.log(myMap)

//Metodos y propiedades

//set es para actualizar un elemento o agregarlo

myMap.set("alias", "moicas")
myMap.set("name", "MoisesGrimaldo")
console.log(myMap)

//get para recuperar el valor
console.log(myMap.get("name"))
console.log(myMap.get("surname"))

// has , comprobar si una clave existe o no
console.log(myMap.has("surname"))
console.log(myMap.has("name"))

// delete
myMap.delete("name")
console.log(myMap)

//clear
// myMap.clear()

// console.log(myMap)
console.log(myMap.keys())

//size
console.log(myMap.size)


//entries te dice todas las claves y valores
console.log(myMap.entries())