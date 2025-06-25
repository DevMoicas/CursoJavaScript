//loops o bucles

//for

for(let i = 0; i < 5; i++) {
    console.log(`Hola ${i}`)
}

const numbers = [1,2,3,4,5,10,20,30]

for(let i = 0; i < numbers.length; i++) {
    console.log(`Elemento ${numbers[i]}`)
}

//while
let i = 0
while(i < 5) {
    console.log(`Hola ${i}`)
    i++
}

//do while
i = 6
do {
 console.log(`Hola ${i}`)
    i++
} while(i < 5)


//for of para recorrer valores de algo iterable
let myArray = [1,2,3,4]
let mySet = new Set(["Moises", "Grimaldo", "Moicas", "20", true, "grimaldogarcia2004@gmail.com"])
let myMap = new Map([
    ["Nombre", "Moises"],
    ["Edad", 20],
    ["Apodo", "Moicas"]
])

myString = "Hola JavaScript"

for(let valor of myArray) {
    console.log(valor)
}

for(let valor of mySet) {
    console.log(valor)
}

for(let valor of myMap) {
    console.log(valor)
}

for(let valor of myString) {
    console.log(valor)
}

//Buenas practicas

//break y continue