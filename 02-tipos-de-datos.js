//tipos de datos
//PRIMITIVOS:
//1.String(cadena de texto)
let miNombre = "Moises"

//2. Numeros (number)
let age = 20
let height = 1.76

//3. Booleans (boolean), solo puede ser true or false
let isStudent = true
let isMen = true
let isTeacher = false

//4. undefined significa que la variable esta declarada pero aun NO TIENE UN VALOR ASOCIADO
let undefinedValue
console.log(undefinedValue)
//5. null, el null representa que intencionalmente hay una ausencia de valor
let nullValue = null 

//6. Symbol //esto intenta representar valores unicos, utiles para crear propiades de futuros objetos y sirven para evitar colisiones
let mySymbol = Symbol("mysymbol")

//7.BigInt, se usa para representar un numero tan extremadamente grande cuando nos queremos pasar de los 64 bits
let myBigInt2 = 3268328743983426398723648624834383472378346343247n //--> este es el ejemplo uno de como podemos representar un numero grande, poniendo n al final del mismo
let myBigInt = BigInt(2331321321322318031291223)

//Mostrar los tipos de datos
console.log(typeof isMen) //usar typeof
console.log(typeof mySymbol)
console.log(typeof nullValue) //este es un objeto
console.log(typeof miNombre)