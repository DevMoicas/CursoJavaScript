//Exercices about operators

//1. Crea una variable para cada operacion aritmetica
console.log("Ejercicio 1:")
console.log("---------------------------------------------------")
let a = 50
let b = 100
let sumar = 5 + 7
let resta = 5 - 2
let multiplicacion = 5 * 2
let division = 6 / 2
console.log(sumar)
console.log(resta)
console.log(multiplicacion)
console.log(division)
a++
console.log(a)
b--
console.log(b)

//2. Crea una variable para cada tipo de operacion de asignacion, que haga uso
// de las variables utilizadas para las operaciones aritmeticas
console.log("Ejercicio #2")
console.log("---------------------------------------------------")
division += 10
console.log(division)

sumar -= 1
console.log(sumar)

resta *= 3
console.log(resta)

multiplicacion /= 2
console.log(multiplicacion)

//3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparacion
console.log("Ejercicio 3")
console.log("---------------------------------------------------")
console.log(5 == "5")
console.log(5 === 5)
console.log("hola" != "hol")
console.log(5 < 20)
console.log(10> 2)
//4. Imprime 5 comparaciones falsas con diferentes operadores de comparacion
console.log("Ejercicio 4")
console.log("---------------------------------------------------")
console.log(5 === "5")
console.log(100 < 20)
console.log("5" !== "5")
console.log(3 != 3)
console.log("3" === 3)
//5. Utiliza el operador logico AND
console.log("Ejercicio 5")
console.log("---------------------------------------------------")
console.log(5 < 3 && 3 < 10)
console.log(true === 1 && false === 0)
console.log(0 == false && false == "")
console.log(1 > 0 && 10 > 3)
console.log(6 == 6 && 10 === "10" && 4 == 4)
console.log(40 == 40 && 40 === "40")

//6. Utiliza el operador logico OR
console.log("Ejercicio 6")
console.log("---------------------------------------------------")
console.log(5 === 5 || 5 === "5")
console.log(true == 1 || false === 0)
console.log(332232321332332323213123132312331n == 332232321332332323213123132312331 || false === 0)
console.log("" === "" || "Hola" == 0)
console.log(3 < 100 || 40 < 30)
//7. Combina ambos operadores
console.log("Ejercicio 7")
console.log("---------------------------------------------------")
console.log(5 === 5 && 4 < 0 || "hoa" == "hola")
console.log(3 === "3" && "hola" == "hola" || 0 == 50)
//8. Añade alguna negacion 
console.log("Ejercicio 8")
console.log("---------------------------------------------------")
console.log(!(5 === 5 && 4 < 0 || "hoa" == "hola"))
console.log(!("Hola" == "Hola"))
//9. Utiliza el operador ternario
console.log("Ejercicio 9")
console.log("---------------------------------------------------")
const isHot = false
isHot ?console.log("Esta haciendo calor"): console.log("No esta haciendo calor")
//10. Combina operadores aritmeticos, de comparacion y logicos
console.log("Ejercicio 10")
console.log("---------------------------------------------------")
console.log("Operadores aritmeticos:")
console.log(5+10)
console.log(5*10)
console.log(5/10)
console.log(5-10)
console.log(5**2)

console.log("Operadores de comparacion")
let variable1 = 30
console.log(3 == 3) 
console.log(3 === "3")
console.log("Hola"=== "Hola")
console.log(variable1 += 5)

console.log("Operadores logicos")
console.log("5" === "5" && 4 === 4)
console.log("5" === "5" && 4 === 3 || "ho" === "hola")