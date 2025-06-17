//importacion de modulos
import substract, { add, Circle } from "./31-export-moduls.js"
import { PI } from "./31-export-moduls.js"
import defaults from "./31-export-moduls.js"

//funciones
console.log(add(10,5))

//Propiedades
console.log(PI)

//importacion por defecto (solo se pueden importar funciones por defecto)
console.log(substract(10, 15))

//clases

let circle = new Circle(20)
console.log(circle.radius)
console.log(circle.area().toFixed(2))

//Proyecto modular


