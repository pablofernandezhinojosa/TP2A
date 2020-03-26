let  nombres = ['Juan', 'Pedro', 'Maria', 'Eduardo'];

//nombres[nombres.length - 1]; Ultimo elemento

// iterar Arrays
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

for (const nombre of nombres) {
    if(nombre === 'Maria'){
        break;
    }
    console.log(nombre);
}

// agregar elementos al final de un array
nombres.push('Elena');

// sacar del final
let ultimo = nombres.pop();

// sacar del principio
let primer = nombres.shift();

// agregar al principio
nombres.unshift('Anna');

// Buscar la posición 
let position = nombres.indexOf('Elena');

// Eliminiar en una posicion
// Borrar el elmento en la posicion 2

nombres.splice(2,1);

// realizar una copia
let nuevoNombres = nombres.slice();
nuevoNombres[0] = "xxxx";
console.log(nombres);
