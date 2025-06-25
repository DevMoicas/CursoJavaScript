//Clases, una clase tambien es un objeto complejo, sirve para acabar creando objetos , esto es para crear plantillas de objetos

class Person {
    constructor(name, age, alias){
this.name = name
this.age = age
this.alias = alias}
}


//Sintaxis
let person =new Person("Moises", 20, "Moicas")
let person2 = new Person("Pepe", 20, "Pepito")
console.log(person)
console.log(person2)

//Valores por defectos
class DefaultPerson {
    constructor(name = "Sin nombre", age = 0, alias = "Sin alias"){
this.name = name
this.age = age
this.alias = alias}
}

let person3 = new DefaultPerson("Juan", 40)

console.log(person3)


//Acceso a propiedades

console.log(person3.alias)
console.log(person3["alias"])

person3.alias = "Juanito"

console.log(person3.alias)

//Funciones en clases
class PersonWithMetod {
    constructor(name, age, alias){
this.name = name
this.age = age
this.alias = alias}

walk() {
    console.log("La persona esta caminando")
    }
}

let person4 = new PersonWithMetod("Arturo", 63, "Arturin")
person4.walk()

//Propiedades privadas
class PrivatePerson {
    #bank
    constructor(name, age, alias, bank){
this.name = name
this.age = age
this.alias = alias
this.#bank = bank
    }
    pay() {
        this.bank
    }
}

let person5 = new PrivatePerson("Elon", 30, "Musk", "8515852014")

person5.newBank = 12345

console.log(person5)

//Getters y setters
class GetSetPerson {
    #name
    #age
    #alias
    #bank
    constructor(name, age, alias, bank){
this.#name = name
this.#age = age
this.#alias = alias
this.#bank = bank
    }
    get name() {  //Se puede leer pero no modificar
        return this.#name
    }
    set bank(newBank) {  //Escribe pero no lee
        this.#bank = newBank
    }
}

let persona6 = new GetSetPerson("MoisesGrimaldo", 20, "Moicaspro900", "Banorte")

console.log(persona6.name)

persona6.bank = "new BBVA"
console.log(persona6.bank)

//Herencia, heredar propiedades y comportamiento de una clase

class Animal {
    constructor(name) {
        this.name = name
    }

    sound () {
        console.log("Emite un sonido generico")
    }
}

class Dog extends Animal{
    run() {
        console.log("El perro esta corriendo")
    }

    sound() {
        console.log("guau")
    }
}


class Fish extends Animal{
    constructor(name, size) {
        super(name)
        this.size = size
    }
    swim() {
        console.log("El pez esta nadando")
    }
}


let myDog = new Dog("Mouredog")
myDog.run()
myDog.sound()

let myFish = new Fish("Mourefish", 10)
myFish.swim()
myFish.sound()

//Metodos estaticos

class MathOperations {
    static sum(a,b) {
        return a + b
    }
}

console.log(MathOperations.sum(5,10))


