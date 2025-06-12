//Simple

function myFunction () {
    console.log("Hola mi funcion")
}

myFunction()

//Con parametros
function myFuncWithParams(name) {
    console.log(`Hola ${name}`)
}

myFuncWithParams("Moises")
myFuncWithParams("Grimaldo")

//Funciones anonimas
const myFunc2= function(name) {
     console.log(`Hola ${name}`)
}

myFunc2("Funcion anonima")

//Arrow Functions

const ArrowFunction = (name) =>  console.log(`Hola ${name}`)
ArrowFunction("Función flecha")

//Parametros
function suma (a, b) {
    console.log(a + b)
}
suma(10,5)

function defaultSum(a = 0, b = 0) {
    console.log(a + b)
}

defaultSum(10)

//Valores de retorno

function mult(a, b) {
    return a * b
}

console.log(mult(5, 10))


//Funcion anidada

function extern() {
    console.log("Funcion externa")
    function intern() {
console.log("Funcion interna")
    }
    intern()
}

extern()
// intern() fuera del scope


//Funciones de orden superior
function applyFunc(func, param) {
    func(param)
}

applyFunc(ArrowFunction, "Funcion de orden superior")

//forEach , el foreach es una funcion que sirve para ejecutar bucles asociados a elementos iterabls

let myArray = [1,2,3,4,5]

myArray.forEach((value) => console.log(value))