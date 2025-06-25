//strings
//concatenacion
let myName = "Moises"
let greeting = "Hola," + myName + "!"
console.log(greeting)
console.log(typeof greeting)

//Longitud
console.log(greeting.length)

//Acceso a caracteres
console.log(greeting[0])
console.log(greeting[11])

//Metodos comunes
console.log(greeting.toUpperCase()) //toUppercase todo a mayusculas
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Moises"))
console.log(greeting.indexOf("!"))
console.log(greeting.includes("Moises"))
console.log(greeting.includes("Brais"))
console.log(greeting.slice(0, 3))
console.log(greeting.replace("Moises", "tuNombre"))

//template literals
let message = `Hola, estoy aprendiendo
java script
y puliendo los conocimientos.`
let email = "grimaldogarcia2004@gmail.com"
console.log(message)
console.log(`Hola ${myName}!`)
console.log(`Hola ${myName}, tu correo es: ${email}`)