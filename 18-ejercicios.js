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

for(i = 0; i <= 50; i++) {
    if(i % 2 == 0) {
        console.log(i)
    } else {
        continue
    }
}


//4. Dado un array de nombres, usa un bucle para imprimir cada nombre en consola
let names = ["Moises", "Ximena", "Dulce"]

for(let valor of names) {
    console.log(valor)
}

for(i = 0; i < names.length; i++) {
    console.log(names.toString())
}
//5. Esribe un bucle que cuente el numero de vocales de una cadena de texto

//6. Dado un array de numeros, usa un bucle para multiplicar todos los numeros y mostrar el producto

//7. Escribe un bucle que imrpima la tabla de multiplicar del 5

//8. Usa un bucle para invertir una cadena de texto

//9. Usa un bucle para generar los primeros 10 numeros de la secuencia de fibonacci

//10. Dado un array de numeros, usa un bucle para crear un nuevo array que contenga solo los numeros mayores a 1'