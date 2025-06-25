//1. Crea una clase que reciba dos propiedades
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

let person1 = new Person("Moises", 20)
console.log(person1.name)
//2. Añade un metodo a la clase que utilice las propiedades
class PersonWithGreeting {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greeting() {
        console.log(`Hola ${this.name}, veo que tu edad es de ${this.age} años`)
    }
}

let person2 = new PersonWithGreeting("Moi", 20)
console.log(person2.greeting())

//3. Muestra los valores de las propiedades e invoca a la funcion
console.log(person2.name)
console.log(person2.age)
console.log(person2.greeting())

//4. Añade un metodo estatico a la primera clase
class Person2 {
    constructor(name, age = 20) {
        this.name = name
        this.age = age
    }
     static bornYear(age) {
        let año = 2025 - age
        return año
    }
}

//5. Haz uso del metodo estatico
console.log(Person2.bornYear(30))
//6. Crea una clase que haga uso de herencia
class Animal {
    constructor(nombre, tipo) {
        this.nombre = nombre
        this.tipo = tipo
    }
}

class Dog extends Animal {
    ladrar() {
        console.log(`${this.nombre} esta ladrando`)
    }
}

let firulais = new Dog("Firu", "Pastor aleman")
firulais.ladrar()
//7. Crea una clase que haga uso de getters y setters
class Usuarios {

    constructor(name, password, age, username) {
        this.name = name
        this. password = password
        this.age = age
        this.username = username
    }
    get password() {
        return this.password 
    }
    set username(NewUserName) {
        this.username = NewUserName
    }
}


//8. Modifica la clase con getters y setters para que use propiedades privadas
class Usuarios2 {
    #password
    #username
    constructor(name, password, age, username) {
        this.name = name
        this.#password = password
        this.age = age
        this.#username = username
    }
    get password() {
        return this.#password 
    }
    set username(NewUserName) {
        this.#username = NewUserName
    }
}
//9. Utiliza los get y set y muestra sus valores
let usuario1 = new Usuarios2("Moises", "123456", 20, "Moicaspro900")
console.log(usuario1.password)
usuario1.password = "7890"
console.log(usuario1.password)
console.log(person1.username)  // <-- Muestra undefined porque esta en set
//10. Sobreescribe un metodo de una clase que utilice herencia
class Animals {
    constructor(nombre, tipo) {
        this.nombre = nombre
        this.tipo = tipo
    }
    sonido() {
        console.log("El animal esta reproduciendo un sonido")
        
    }
}

class Cats extends Animals {
    sonido() {
        console.log("Miau, Miau")
    }
}

let churu = new Cats("Churu", "Desconocida")
churu.sonido()