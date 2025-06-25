//exercices about data structures

//1. Crea un array que almacene cinco animales
let animals = ["perro", "gato", "ardilla", "caballo", "tortuga"]

console.log(animals)
//2. añade dos mas, uno al principio y otro al final
animals.push("leon") //agrega elementos al final del array
animals.pop("Gaviota")

console.log(animals)
//3. Elimina el que se encuentra en la tercera posicion
delete(animals[3])
console.log(animals)


//4. Crea un set que almacene cinco libros
let books = new Set(["El principito", "CleanCode", "El negociador", "Refactoring", "Three Little Pigs"])
console.log(books)
//5. Añade dos más, uno de ellos repetido
books.add("Blancanieves")
books.add("Refactoring") // este no se agrega porque esta repetido

console.log(books)
//6. Elimina uno concreto a tu eleccion
books.delete("CleanCode")
console.log(books)
//7. Crea un mapa que asocie el numero del mes a su nombre
let months = new Map ([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
])
//8. Comprueba si el mes numero 5 existe en el map e imrpime su valor
console.log(months.has(5))
console.log(months.get(5))
//9. Añaade al mapa una clave con un array como que almacene los meses de verano
months.set("MesesDeVerano", ["Mayo", "Junio", "Julio"])
console.log(months)
//10. Crea un array, transformalo a un SET y almacenalo en un MAP.
let apps = ["MercadoPago", "WhatsApp", "Facebook", "Instagram", "Tiktok"]
console.log(apps)
apps = new Set(apps)
console.log(apps)

let softwares = new Map([
    ["Edicion", ["Filmora", "AdobePremiere", "Photoshop"]],
    ["Array", (apps)]
])
console.log(softwares)
