//loops ejercicios, explorar diferentes sintaxis de bucles para resolver los ejercicios

//1. Crea un bucle que imprima los numeros del 1 al 20
console.log("----------------------------------------")
console.log("Ejercicio 1 hecho con for:")
for(i = 0; i < 21; i++) {
    console.log(i)
}


console.log("----------------------------------------")
i = 0
console.log("Ejercicio 1 hecho con while:")
while(i <21) {
console.log(i)
i++
}


//2. Crea un bucle que sume todos los numeros del 1 al 100 y muestre el resultado   
console.log("----------------------------------------")
console.log("Sumar numeros del 1 al 100:")
let suma = 0
for(i = 1; i < 101; i++) {
     suma = suma + i
     if(suma != 5050) {
        continue
     } else if (suma == 5050)
console.log(`El resultado de sumar consecutivamente los numeros del 1 al 100 es: ${suma}`)
}


//3. Crea un bucle que imprima todos los numeros pares entre 1 y 50
console.log("----------------------------------------")
console.log("Ejercicio imprimir todos los numeros pares del 1 al 50")
for(i = 0; i <= 50; i++) {
    if(i % 2 == 0) {
        console.log(i)
    } else {
        continue
    }
}


//4. Dado un array de nombres, usa un bucle para imprimir cada nombre en consola
console.log("----------------------------------------")
console.log("Imprimir por consola los nombres de un array")
let names = ["Moises", "Ximena", "Dulce"]

for(let valor of names) {
    console.log(valor)
}

for(i = 0; i < names.length; i++) {
    console.log(names.toString())
}
//5. Esribe un bucle que cuente el numero de vocales de una cadena de texto
const saludo = "Hola mundo";
let contador = 0;

for (let i = 0; i < saludo.length; i++) {
  if ("aeiouAEIOU".includes(saludo[i])) {
    contador += 1;
  }
}

console.log(`La palabra "${saludo}" tiene ${contador} vocales.`);


//6. Dado un array de numeros, usa un bucle para multiplicar todos los numeros y mostrar el producto
let myNumbersArray = [5,1,2,3,10]  // <---- De resultado al multiplicar deberia arrojar 150
let multiplicacion = 0

for(i = 1; i < myNumbersArray.length; i++) {
    multiplicacion = multiplicacion * i
    console.log(multiplicacion)
}
//7. Escribe un bucle que imrpima la tabla de multiplicar del 5
console.log("Tabla de multplicar del 5:")
for (i = 1; i < 11; i++) {
    let resulado = i * 5
    console.log(`El resultado de multiplicar 5 * ${i} es igual a: ${resulado}`)
}

i = 0
while(i < 11) {
    resultado = 0
    resultado = i * 5
    console.log(`El resultado de multiplicar 5 * ${i} es igual a: ${resultado}, (Esto fue hecho usando ciclo while)`)
    i++
}
//8. Usa un bucle para invertir una cadena de texto
let myName = "Moises"
let invertedName = []
for(i = 0; i < myName.length; i++) {
invertedName.unshift(myName[i])
console.log(invertedName)
}
//9. Usa un bucle para generar los primeros 10 numeros de la secuencia de fibonacci
console.log("Fibonnacci")
const arrFib = [0,1]
//0,1,1,2,3,5,8,13,21,34.........
for (i = 2; i < 10; i++) {
    arrFib.push(arrFib[i - 1] + arrFib[i - 2])
}
console.log(arrFib)
//10. Dado un array de numeros, usa un bucle para crear un nuevo array que contenga solo los numeros mayores a 10'
let numbersArray = [1,2,4,6,8,12,14,20,50,3,150,30]
let newArray = []

for (i = 0; i < numbersArray.length; i++) {
if (numbersArray[i] > 10) {
    newArray.push(numbersArray[i])
    }
}

console.log(newArray)

//11. Crea un bucle que imprima los números impares del 1 al 30
for (i = 0; i <= 30; i++) {
    if (i % 2 == 0) {
        continue
    } else {
        console.log(i)
    }
}
//12. Suma todos los números pares entre 1 y 50 y muestra el resultado
let sumaPares = 0

for(i = 0; i <= 51; i++) {
    if(i % 2 == 0) {
        sumaPares = sumaPares + i
    } else {
        continue
    }
}
console.log(`La suma de los pares del 1 al 50 es igual a = ${sumaPares}`)
//13. Dado un array de palabras, imprime solo aquellas que tienen más de 5 caracteres
let words5 = ["Pizza", "Maleta", "Lombriz", "Maestra", "Lupa", "Moises", "Sal", "Mamá"]
let newArray5 = []

for (i = 0; i < words5.length; i++) {
    if(words5[i].length >= 5) {
newArray5.push(words5[i])
    } 
}
console.log(newArray5)


//14. Crea un bucle que imprima los números del 10 al 1 en orden descendente
for (i = 10; i >= 0; i--) {
    console.log(i)
}
//15. Dado un array de números, usa un bucle para encontrar el número máximo y mostrarlo
console.log("Encontrar el numero maximo: ")

let numeros = [20, 10, 30, 100, 200, 500, 1550, 1000, 9999, 50, 10000, 20000, 5]
let numeroMayor = numeros[0]

for (i = 0; i < numeros.length; i++) {
if (numeros[i] > numeroMayor) {
    numeroMayor = numeros[i]
    }
}
console.log(`El numero mayor es: ${numeroMayor}`)
//16. Cuenta cuántas consonantes tiene una cadena de texto
let consonantesCount = 0
let cadenaDeTexto = "Otorrinolaringologo"
for (i = 0; i < cadenaDeTexto.length; i++) {
    if ("BbCcDdFfGgHhJjKkLlMmNnÑñPpQqRrSsTtVvWwXxYyZz".includes(cadenaDeTexto[i])) {
        consonantesCount += 1
    }
}
console.log(`La palabra ${cadenaDeTexto} tiene ${consonantesCount} consonantes`)
//17. Dado un array de números, crea un nuevo array que contenga los números multiplicados por 3
let multiplosDeTres = [3,6,9,10,12,31,30,60]
let newMultiplos = []

for (i = 0; i<multiplosDeTres.length; i++) {
    if(multiplosDeTres[i] % 3 === 0) {
newMultiplos.push(multiplosDeTres[i])
    }
}

console.log(`Los numeros multiplos de 3 son: ${newMultiplos}`)
//18. Usa un bucle para imprimir los primeros 15 números pares
for (i  = 0; i <= 15; i++) {
    if(i % 2 == 0) { 
        continue
        } else {
            console.log(i)
        }
}
//19. Dado un array de nombres, imprime solo los que empiezan con la letra "M"
let words = ["Pizza", "Maleta", "Lombriz", "Maestra", "Lupa", "Moises"]
let newWords = []
//20. Dado un string, usa un bucle para crear otro string que tenga solo las letras en mayúscula
let lowerCaseString = "HoLa cOMo EsTAn todos"
let upperCaseString = ""
let newWord = ""

for (i = 0; i < lowerCaseString.length; i++) {
    upperCaseString = lowerCaseString[i].toUpperCase()
   newWord = newWord + upperCaseString
}
    console.log(`La palabra en mayusculas es: ${newWord}`)
//21 Dada una matricula de vehiculo, las matriculas que terminan en A pueden circular de lunes a miercoles, las terminadas en B Jueves y viernes, las terminadas en C fines de semana 
//y las terminadas en AB pueden circular toda la semana.

let matricula = "1A2ABCABCDAB"
let newMatricula = [] 


    if(matricula.endsWith("AB")) {
        console.log("El vehiculo circula toda la semana")
        
    } else if (matricula.endsWith("A")) {
        console.log("El vehiculo puede circular de lunes a miercoles")
        
    } else if(matricula.endsWith("C")) {
        console.log("El vehiculo puede circular fines de semana")
        
    } else if(matricula.endsWith("B")) { 
        console.log("El vehiculo puede circular jueves y viernes")
        
        } else {
            console.log("Placa no valida")
            
    }

