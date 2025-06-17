//Excepcion

let myObject 
// console.log(myObject.email)

//Captura de errores

//Try catch
try {
    console.log(myObject.email)
    console.log("Finaliza la ejecución sin errores")
} catch(error){
    //Bloque de error
    console.log("Se ha producido un error", error.message)
}

//finally, en este caso asi no esta soportando , debe tener el catch
// try {
//     console.log(myObject,email)
//     console.log("Finaliza la ejecución sin errores")
// } finally {
//     console.log("Este codigo de ejecuta siempre")
// }


// throw new Error("Se ha producido un error") 

//Lanzamiento de errores
function sumIntegers(a, b) {
    if(typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Esta operacion solo suma numeros")
    }
    if(!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("esta operacion solo adminite numeros enteros")
    }
    if (a == 0 || b == 0) {
        throw new SumIntegerError("Se este intentado sumar cero", a,b)
    }
    return a + b
}

// try { 
// console.log(sumIntegers("5",1))
// } catch(error) {
//     console.log("Se ha producido un error:", error.message)
// }


//Capturar varios tipos de errores
class SumIntegerError extends Error {
    constructor(message,a, b) {
        super(message)
        this.a = a
        this.b = b
    }
        printNumbers() {
            console.log(this.a, "+", this.b)
        }
}

try { 
// console.log(sumIntegers(5.5,10))
console.log(sumIntegers(0, 10))
} catch(error) {
    console.log("Se ha producido un error:", error.message)
    error.printNumbers()
}

//Crear excepciones personalizadas


