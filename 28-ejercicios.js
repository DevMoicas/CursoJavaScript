console.time("tiempo")
//1. Captura una excepcion utilizando try-catch
let persona = {
    name: "Moises",
    age: 20
}

let persona1 = {
    name: "Pepe",
    age: 20
}

let persona2 = {
    name: "Juan",
    age: 20
}
try {
    console.log(persona)
} catch(error) {
    console.log("Moises no existe como persona, prueba con persona, persona1 o persona2")
} 

//2. Captura una excepcion utilizando try-catch y finally
try {
    console.log(persona3)
} catch(error) {
    console.log("Moises no existe como persona, prueba con persona, persona1 o persona2")
} finally {
    console.log("Intenta de nuevo mas tarde")
}
//3. Lanza una excepcion generica
 function sumarDosNumerosPares(a,b) {
    if(!(a % 2 == 0) ||!(b % 2 == 0)) {
        throw new Error("Uno de los dos numeros no es par, prueba con unicamente numeros pares")
    }
    return a + b
 }

//  try {
//     console.log(sumarDosNumerosPares(10,21))
//  } catch(error) {
//     console.log("Se ha producito un error:", error.message)
//  } finally {
//     console.log("Proceso finalizado")
//  }
//4. Crea una excepcion personalizada
function sumarDosNumerosImpares(a,b) {
    if(a % 2 == 0 || b % 2 == 0) {
        throw new Error("Uno de los dos numeros no es impar, prueba con unicamente numeros impares", a,b)
    }
    if (a == 0 || b == 0) {
        throw new NumberIsZero("Uno de los dos numeros es cero, intenta con otro numero", a,b)
    }
    return a + b
 }

 class NumberIsZero extends Error {
    constructor(message,a,b) {
        super(message)
        this.a = a
        this.b = b
    }
    printNumbers() {
        console.log(this.a, "+", this.b)
    }
 }


//5. Lanza una excepcion personalizada
 try {
    console.log(sumarDosNumerosImpares(5, 10))
 } catch(error) {
    console.log("se ha producido un error;", error.message)
 }
//6. Lanza varias excepciones segun una logica definida
function verPlacas(placa) {
    if(placa.length < 3) {
        throw new Error("Placa muy pequeña")
    }
    if(placa.length > 10) {
        throw new Error("Placa no valida, es muy grande")
        } 
}

try {
    console.log(verPlacas("ho"))
} catch(error) {
    console.log("Se ha producido un error:", error.message)
}
//7. Captura varias excepciones dentro de un try-catch
function confirmAge(age) {
    if(!(Number.isInteger(age))) {
        throw new Error("La edad debe ser un numero entero")
    }
    if (age < 18) {
        throw new TypeError("La edad es menor de 18, no puedes continuar")
    }
    if(age > 150) {
        throw new RangeError("La edad no es correcta, ingrese una edad valida")
    }
    return age
}

try {
    console.log(confirmAge(1000))
} catch(error) {
   if(error instanceof TypeError) {
    console.log("Se ha producido el error 2")
} else if(error instanceof RangeError) {
    console.log("Se ha producido el error 3")
} else if(error instanceof Error) {
    console.log("Se ha producido el error 1: ", error.message)
}
}
//8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

function ConverToFloat(numero) {
    for(i = 0; i < numero.length; i++) {
        if("AaBbCcDdEeFfGgHhIiJjKkLlMmNnÑñOoPpQqRrSsTtUuVvWwXxYyZz".includes(numero[i])) {
            throw new Error("Unicamente se aceptan letras , no numeros")
        } 
         let conversion = parseFloat(numero)
    console.log(conversion)
    }
}

try { 
ConverToFloat("3")
} catch(error) {
    console.log("error", error.message)
}


//9. Crea una funcion que verifique si un objeto tiene una propiedad especifica y lance una excepcion personalizada
let Moises = {
    name: "Moises",
    age: 20
}

function verificarPropiedad(obj, propiedad) {
    if (!(propiedad in obj)) {
        throw new Error(`La propiedad "${propiedad}" no existe en el objeto.`)
    }
    return obj[propiedad]
}

try {
    console.log(verificarPropiedad(Moises, "nam"))  // Esta propiedad no existe
} catch (error) {
    console.log("Error producido:", error.message)
}






//10. Crea una funcion que realice reintentos en caso de error hasta un maximo de 10

function mayorA18(numero) {
    if(typeof numero != "number") {
        throw new Error("El numero debe ser un numero entero, intentando nuevamente")
    }
    return numero
}

for(i = 1; i <= 10; i++) {
    try {
        console.log(mayorA18())
        break
    } catch(error) {
        console.log(`Se ha producido un error, intento numero ${i}`, error)
    }
}

console.timeEnd("tiempo")