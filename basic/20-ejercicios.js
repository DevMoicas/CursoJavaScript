//1. Crea una funcion que reciba dos numeros y devuelva una suma
function sumarDosNumeros (a = 0, b = 0) {
    let resultado = a + b
    console.log(`El resultado de sumar ${a} + ${b} es igual a ${resultado} (Este ejercicio fue hecho con función de parametros)`)
}

const sumarDosNumerosArrow = (a = 0,  b = 0) => { 
    let resultado = a + b 
    console.log(`El resultado es igual a ${resultado}`)
}
sumarDosNumeros(10, 20)
sumarDosNumerosArrow(10, 20)
//2. Crea una funcion que reciba un array de numeros y devuelva el mayor de ellos

function numeroMayor(numeros = []) {
    let numeroMayor = numeros[0]
    for (i = 0; i < numeros.length; i++) {
if (numeros[i] > numeroMayor) {
    numeroMayor = numeros[i]
        }
    }
    return numeroMayor
}
console.log("El numero mayor es:")
console.log(numeroMayor(numeros = [10,20,40,80,520]))


//3. Crea una funcion que reciba un string y devuelva el numero de vocales que contiene
function vocalsNumber (word) {
    contador = 0
    for (i = 0; i < word.length; i++) { 
    if("AaEeIiOoUu".includes(word[i]))
        contador +=1
    }
    return contador
}

console.log(vocalsNumber(`${word = "Avion"}`))
console.log(`La palabra ${word}, tiene un total de ${contador} vocales`)
//4. Crea una funcion que reciba un array de strings y devuelva un nuevo array con las strings en mayusculas
function stringsInUpperCase (stringss) { 
let newArrays = []

for(i = 0; i < stringss.length; i++) {
    newArrays.push(stringss[i].toUpperCase())
    }
    return newArrays
}

console.log(stringsInUpperCase(stringss = ["hola", "mundo","mi","NomBre","Es", "MoIsEs"]))
//5. Crea una funcion que reciba un numero y devuelva true si es primo y false caso contrario
function esPrimo(number) {
if (number <= 1 ) {
    return false
}
for(i = 2; i < number; i++) {
    if(number % i === 0) {
        return false
    } else {
        return true
    }
}
}

console.log(esPrimo(4))
//6. Crea una función que reciba dos arryas y devuelva un numevo array que contenga los elementos comunes entre ambos
function sameElements (arr1, arr2) {
    let same = []
    for (i = 0; i < arr1.length && arr2.length; i++) {
        if (arr1[i] === arr2[i]) {
            same.push(arr1[i])
        }
    }
    return same
}

console.log(sameElements([10,20,"Moises", "plato", "vaso"], [10, 20, "MOISES", "plato", "vaso"]))
//7. Crea una funcion que reciba un array de numeros y devuelva la suma de todos los numeros pares
function sumarPares (numerosArray) {
    let suma = 0;

for(i = 0; i < numerosArray.length; i++) { 
if(numerosArray[i] % 2 == 0) {
    suma = numerosArray[i] + suma
        } 
    }
    return suma
}

console.log(sumarPares([2,4,3, 10, 15, 8]))
//8. Crea una funcion que reciba un array de numeros y devuelva un nuevo array con cada numero elevado al cuadrado
function alCuadrado (cuadrado) {
    let numerosAlCuadrado = []

    for (i = 0; i < cuadrado.length; i++) {
        numerosAlCuadrado.push(cuadrado[i] ** 2)
    }
    return numerosAlCuadrado
}

console.log(alCuadrado([5,3, 1, 2, 10]))
//9 Crea una funcion que reciba una cadena de texto y devuelva la misma cadena con palabras en orden inverso
function aLaInversa (normalText) {
let textoInverso = []
let stringInverso = ""
for (i = 0; i < normalText.length; i++) {
    textoInverso.unshift(normalText[i])
    stringInverso = textoInverso.toString()
    }
    return stringInverso
}

console.log(aLaInversa("Moises"))
//10 Crea una funcion que calcule el factorial del numero dado.

function factorial (c) {
    let resultado = 1
    for (i = c; i > 0; i--) {
        resultado *= i
    }
    return resultado
}

console.log(factorial(5))