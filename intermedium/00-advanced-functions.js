//funciones avanzadas

//ciudadanos de primera clase, entidades que las podemos tratar como cualquier otro valor del lenguaje

const great = function (name) {
    console.log(`Hola ${name}`)
}

great("Moises")

function processGreat(greatFunction, name) {
greatFunction(name)
}

function returnGreeting(name) {
    return great
}

processGreat(great, "Alejandro")
console.log(returnGreeting())


//arrow functions avanzadas
// Una arrow function es un ciudadano de primera clase

//1. Arrow function con retorno implicito, no necesita el return

const multiply = (a,b) => a * b

console.log(multiply(5,5))

//2. This léxico
const handler = {
    name: "Moises",
    greeting: function() {
        console.log(`Hola ${this.name}`)
    },
     arrowGreeting: () => {
        console.log(`Hola ${this.nombre}`)
    }
}

handler.greeting()
handler.arrowGreeting(); //Imprime undefined porque crea su propio contexto del this


//IIFE Inmediatly invocate function expression => Expresion de funcion invocada inmediatamente

//IIFE clásico (Se debe poner punto y coma en la ultima linea anterior para diferenciar la ejecución)
(function() {
    console.log("IIFE clasico")
})();

(() => {
    console.log("IIFE con arrowFunction")
})();

//Parámetros rest (...)

function sum(...numbers) { // Se usa cuando no sabes cuantos parametros va llevar
    let result = 0
    for(let number of numbers) {
        result += number
    }
    return result
}

console.log(sum(1,2,3,4,5))
console.log(sum(10,15))

//Operador spread (...)

const numbers = [1,2,3]

function sumWithSpread(a,b,c) {
    return a + b + c
}

console.log(sumWithSpread(1,2,3))
console.log(sumWithSpread(...numbers))


//Closures (clausuras)
/**Ocurre cuando una funcion interna 
 * accede a valores de la funcion externa */

function createCounter() {
    let counter = 0
    return function () {
        counter++
        console.log(`Contador: ${counter}`)
    }
}

const counter2 = createCounter()
counter2()

//Recursividad => Funcion que se llama a si misma

function factorial(n) {
    if(n == 1) { 
        return 1
    }
    return n * factorial(n - 1)    
}

console.log(factorial(5))

//Funciones parciales
 /**Dividir una funcion  con varios parametros
  * en funciones mas pequeñas que reciben parte d elos 
  * parametros y retornan una nueva funcion que retorna los 
  * siguientes parametros
 */

 function partialSum(a) {
    return function(b,c) {
        return sum(a,b,c)
    }
 }

 const sumWith = partialSum(4)
 console.log(sumWith(2, 3))

 //Currying, transformas una funcion que recibe varios parametros en una funcion que reciba uno cada vez

 function currySum(a) {
    return function(b) {
        return function(c) {
            return sum(a,b,c)
        }
    }
 }

 const sumAB = currySum(1)(2)
 console.log(sumAB(3))
 console.log(sumAB(4))
 console.log(sumAB(5))

//Callbacks, a una funcion le pasamos otra funcion como argumento para personalizar su compotamiento

function proccessData(data, callback) {
    const result = sum(...data)
    callback(result)
}

function proccessResult(result) {
    console.log(result)
}

proccessData([1,2,3])


