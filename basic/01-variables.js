//VARIABLES

/*Las variables sirven para guardar valores y referencias
en algun software que estemos construyendo , por ejemplo
si estamos construyendo un login necesitamos almacenar quiza el correo del usuario
y su contraseña */

//formas de crear una variable que deben ser con lowerCamelCase:

//var , actualmente ya NO SE DEBEN CREAR VARIABLES USANDO VAR
var helloWorld = "Hello, JavaScript"  //var fue la forma original de declarar variables en JavaScript, hoy en dia ya no es tan usada
console.log(helloWorld) //var quiere decir que la variable puede variar y que en cualquier punto podemos acceder a ella para cambiar su valor

helloWorld = "Hola de nuevo, JavaScript" //aqui accedimos a la variable y le cambiamos su valor , ahora el string dice lo que esta dentro de las ""
console.log(helloWorld)  //aqui imprimimos de nuevo la variable

//let, introducido en ECMASCRIPT 6, estas variables son solo accesibles dentro de un bloque
let helloWorld2 = "Hola JavaScript usando let"
console.log(helloWorld2)

helloWorld2 = "Cambio de holaJavaScript , usando let"
console.log(helloWorld2)


//const, introducido en ECMASCRIPT 6 y esto es una constante, no podemos reasignar su valor
const helloWorld3 = "Hola JavaScript usando const"
console.log(helloWorld3)