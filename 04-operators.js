//The operators are using for operations

//Operadores aritmeticos
let a = 5
let b = 10
console.log(5 + 10) //Suma
console.log(a - b) //Resta
console.log(a * b) //Multiplicacion
console.log(a / b) //Division

console.log(a % b) //Modulo o residuo de la division
console.log(a ** b) //Exponente

a++ //incremento
console.log(a) 

b-- //decremento
console.log(b)

//cuando usamos incremento aumentamos valor en 1, si usamos decremento disminuimos valor en 1

//Operadores de asignación

let myVariable = 2  //simbolo de igual ("=")
console.log(myVariable)
myVariable += 2 //modifica el valor de variable usando el valor que ya tiene
console.log(myVariable)

//Operadores de comparación
console.log(a > b) //mayor que
console.log(a < b) //menor que
console.log(a >= b) //mayor o igual que
console.log(a <= b) //menor o igual que
console.log(a == 6) //comparamos igualdad por valor
console.log(a == "6") // igualdad por valor
console.log(a === a) //igualdad por tipo y  valor
console.log(a === "6") //falso, porque ambos son 6, uno es string y otro number
console.log(a != 6) //a es distinto de 6
console.log(a !== 6)

/*Truthy values (todos los valores verdaderos)
1. Todos los numeros positivos y negativos menos 0
2. El boolean tru

Falsy values (todos los valores falsos)
1.0
2. 0n
3. null
4. undefined
5.NaN
6.El boolean false
7. Strings vacios
*/

//Operadores logicos
//and (&&)

console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20) //todo verdadero = true, todo falso = false, uno verdadero y otro falso =false
console.log(5 < 10 && 15 > 20)


//OR (||)
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20) //Con que se cumpla una el resultado sera TRUE
console.log(5 < 10 || 15 > 20)


//combinacion de ambos operadores
console.log(5 > 10 && 15 > 20 || 30 < 40)


//NOT (!)
console.log(!(5 < 10 && 15 > 20))
console.log(!(5 > 10 || 15 > 20))

//Operadores ternarios

const isRaining = true

isRaining ?console.log("Esta lloviendo"): console.log("No esta lloviendo")