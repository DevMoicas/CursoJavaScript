//SET

//declaracion

let mySet = new Set()

//inicializar

mySet = new Set(["Moises","Grimaldo", "Moicas", 20, true, "grimaldogarcia2004@gmail.com"])

console.log(mySet)

//metodos comunes

//add y delete

mySet.add("https://google.com") //add agrega al final
console.log(mySet)

mySet.delete("https://google.com")
console.log(mySet)


//has

console.log(mySet.has("Moises"))
console.log(mySet.has("https://google.com"))


//size
console.log(mySet.size)


//convertir set a array

let myArray = Array.from(mySet)

console.log(myArray)

//convertir de array a set

mySet = new Set(myArray)

console.log(mySet)


//un set NO ADMITE DUPLICADOS