//Exportacion de modulos

export function add(a,b) {
    return a + b
}

console.log(add(10, 5))

//Propiedades
export const PI = 3.1416

//Exportacion por defecto
export default function substract(a,b) {
    return a - b
}

//clases
export class Circle {
    constructor(radius) {
        this.radius = radius
    }
    area() {
        return Math.PI * Math.pow(this.radius, 2)
    }
}