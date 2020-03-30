const inventors = [
    {first: 'Albert', last: 'Einsten', year: 1879},
    {first: 'Isaac', last: 'Newton', year: 1643},
    {first: 'Galileo', last: 'Galilei', year: 1564},
];

let i=0;
while (i < inventors.length) {
    console.log(inventors[i]);
    i++;
}

// do while
console.log('do while');
let j=0
do {
    console.log(inventors[i]);
    j++;
} while (i < inventors.length);

// Ejercicio: dada una cadena por ejemplo 'javascriptloops' imprimir todas las vocales 
// primero y a continuacion las consonantes
Ejercicio1('javascriptlOOps');


function Ejercicio1(cadena){
    let i = 0;
    while (i < cadena.length) {
        switch (cadena[i].toLocaleLowerCase()) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                console.log(cadena[i]);
                break;
        }
        i++;
    }
    let j = 0;
    while (j < cadena.length) {
        switch (cadena[j].toLocaleLowerCase()) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                break;
            default:
                console.log(cadena[j]);
        }
        j++;
    }
}




