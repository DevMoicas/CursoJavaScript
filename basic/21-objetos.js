//Todo lo que no es un dato primitivo es un objeto, un objeto es una coleccion de propiedades tipo clave valor

// Sintaxis

let person = {
    name: "Moises",
    age: 20,
    alias: "Moicas"
}

//Acceso a propieades

//notacion punto
console.log(person.name)
console.log(person.age)
console.log(person.alias)

//notacion de corchetes
console.log(person["name"])
console.log(person["age"])
console.log(person["alias"])

//Modificacion
person.name = "Moises Grimaldo"
console.log(person.name)

person.age = "20"
console.log(person.age)

//Eliminacion de propiedades
delete person.age

console.log(person)

//agregar una propiedad
person.email = "test@gmail.com"

console.log(person)


//Metodos (funciones)

let person2 = {
    name: "Brais",
    age: 37,
    alias: "Mouredev",
    walk: function walk () {
        console.log("La persona esta caminando")
    }
}

person2.walk()

//Anidacion de objetos
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

console.log(person3)
console.log(person3.job.name)

//igualdad de objetos

let person4 = {
    name: "Moises",
    age: 20,
    alias: "Moicas"
}

//iteracion , se itera con in no con of
for(let value in person4) {
    console.log(value)
}


console.log(`La persona ${this.person4.name}`)

//funciones como objetoss

function Person (name,age) { //deberia ser clase
this.name = name
this.age = age
}