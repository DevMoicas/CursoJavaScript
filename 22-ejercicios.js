//1. Crea un objeto con 3 propiedades.
let persona = {
    name: "Moises",
    age: 20,
    alias: "Moicas"
}
//2. Accede y muestra su valor.
console.log(persona.name)
console.log(persona.age)
console.log(persona.alias)
//3. Agrega una nueva propiedad.
persona.email = "testcorreo@gmail.com"

console.log(persona)
//4. Elimina una de las 3 primeras propieades.
delete persona.age

console.log(persona)
//5. Agrega una funcion e invocala.
persona.walk = function (){  
    return "La persona esta caminando"
}
console.log("----")
console.log(persona.walk())
//6. Itera las propieades del objeto.
for (value in persona) {
    console.log(value)
}
//7. Crea un objeto anidado.
persona.trabajo = {
    name: "Programador",
    exp: "junior"
}

persona.estudios = {
    bachillerato: "Universidad de colima",
    carrera: "Ing de software"
}


//8. Accede y muestra el valor de las propieades anidadas.
console.log(persona.trabajo)
console.log(persona.estudios)
//9. Comprueba si los dos objetos creados son iguales.
console.log(persona.trabajo === persona.estudios)
//10. Comprueba si dos propieades diferentes son iguales.
console.log(persona.name === persona.alias)
