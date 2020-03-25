// let vs Var
// let es la forma moderna de declarar variables desde ES6

let x = 1;
if( x === 1 ){
    let x = 2; 
    console.log(x);
}

console.log(x);

// const para declarar constantes
const key = 'abc123';
//key = 'abcdef';

const person = {
    name: 'Pablo',
    age: 28
}

person.name = 'Juan';

const personFreez = Object.freeze(person);

personFreez.name = 'Pedro';
console.log(personFreez);

