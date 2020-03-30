// Tipos de datos en javascript
// Number, String, Boolean, Symbol, Null, Undefined, Object

//NUMBER
let var1 = 1;
let var2 = 0;
let var3 = -0;

console.log("1/0: " + var1 / var2);
console.log("Raiz cuadrada (-1): " + Math.sqrt(-1));

// STRING 
let saludo1 = "Hola mundo 'infectado' ";
let caracter = "c";

let pizza = '🍕🍕';

console.log(saludo1 + "quiero una " + pizza );
// con bastick
console.log(`${saludo1} 
quiero una 
${pizza}`);

// undefined : representa la ausencia de inicializacion o asignación
let nodefinido;
console.log(nodefinido);

// Null
let nulo = 45;
nulo = null;
console.log(nulo);

variableNoDeclarada = 10;

// Numero
let primeraVariable = 1.5e5;

// string
let segundaVariable = "Hola";

// Boolean
let terceraVariable = true;

console.log("que tipo es primeraVariable:" + typeof terceraVariable);

// Ejercicio 1
// que pase si a un numero le añado un numero en formato de cadena string 
// 2 + "2"
// a un booleano le añado un string
// 2 + true

let algunNumero = 2;
let algunString = "2";

let algunBoolean = true;

let sumaNumeroString = algunNumero + parseInt(algunString);
console.log(sumaNumeroString);

let cadenaFloat = '34.5xxx34';
console.log(parseFloat(cadenaFloat));
console.log(parseFloat(cadenaFloat) + 5.4);

// declaración de objetos
let actor = {
    name : "Julia Roberts",
    age : 46
};

// acceso a las propiedades usando la notación de corchetes []
console.log("La propiedad 'name;' " + actor['name']);
console.log("La propiedad 'age;' " + actor['age']);

// acceso a las propiedades usando la notacion punto
console.log("La propiedad 'name;' " + actor.name);
console.log("La propiedad 'age;' " + actor.age);






