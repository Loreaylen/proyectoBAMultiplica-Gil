// Ejercicio 1:

/* let numero = Number(prompt("Ingresa un número"))

if(numero > 10 && numero < 50){
  alert(`El número es ${numero}, y está entre 10 y 50`)
}
else {
  alert(`El número no está dentro del rango`)
} */

// Ejercicio 2:

/* const frutas = ["Pera", "Manzana", "Naranja", "Banana", "Mandarina"]

console.log(frutas)
console.log(frutas.length)
console.log(frutas[0]) */

//Ejercicio 3

/* const fecha = new Date()

switch (fecha.getDay()) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sábado");
    break;
  default:
    console.log("Domingo");
    break;
} */

//Ejercicio 4
/* let valor = Number(prompt("Ingresa un número"))

if(valor > 10){
  alert("El número es mayor a 10")
}
else if(valor <= 10){
  alert("El número es menor o igual a 10")
}
else {
  alert("No es un número")
} */

//Ejercicio 5

function esNumeroDeLaSuerte(numero) {
  if(numero > 0 && numero !== 15 && (numero % 2 === 0 || numero % 3 === 0)){
    return console.log("Es un número de la suerte")
  }
  else {
    return console.log("No es de la suerte")
  }
}

esNumeroDeLaSuerte(-2)