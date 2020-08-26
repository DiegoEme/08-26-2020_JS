/* Var y let permiten modificar sus valores, const no.*/
var global = 0;

function varGlobal() {
  for (let i = 0; i < 5; i++) {
    global = i;
  }
}

function varLocal() {
  var local = "Hola perros!"; // declarando variable local
  console.log(local); //llamanado variable local
}

varLocal();
//console.log(local); //Error! var es una variable local!

function varPrueba() {
  var x = 70;
  if (true) {
    x = 50;
    console.log(x); // resultado 50
  }
  console.log(x); // resultado 50
}

function letPrueba() {
  let y = 30;
  if (true) {
    let y = "hola";
    console.log(y);
  }
  console.log(y);
}

//LET se limita al bloque, scope local

//*****FUNCIONES*****//
let a = 8;
let b = 14;
let suma = (a, b) => a + b;
console.log(suma(a, b));

let nombre = "Diego";

let yomismo = (nombre) => "hola " + nombre;
console.log(yomismo(nombre));

let color = prompt("cual color ñero");

if (color) {
  document.write("<h1 style = 'color:" + color + "'> sí, es red </h1>");
} else {
  document.write("<h1> No, no es " + color + "</h1>");
}

/****SWITCH*****/
let operacion = "div";
let num1 = 1;
let num2 = 2;
switch (operacion) {
  case "suma": //si es igual a suma
    document.write("resultado: " + (num1 + num2));
    break; // se rompe la ejecucion de codigo y no sigue evaluando casos

  case "resta":
    document.write("resultado: " + (num1 - num2));
    break;

  case "mult":
    document.write("resultado: " + num1 * num2);
    break;

  case "div":
    document.write("resultado: " + num1 / num2);
    break;

  default:
    break;
}
