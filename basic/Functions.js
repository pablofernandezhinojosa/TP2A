// Tipos de declaracion de funciones

// la forma simple
function add(a,b){
    return a + b;
}
console.log(add(5,7));

// asignando a una variable
const square = function(x){
    return x*x;
}
console.log(square(3));

// Arrow Function 
const getSum = (a,b) => {
    return a + b;
};

const getSquare = x => x*x;

console.log(getSquare(3));


