// Operadores de igualdad
// (==) igualdad sin verificar tipo

//1 == "1"
console.log(0 == false);
console.log(0 == null);
console.log("0 == undefined", 0 == undefined);
console.log("null == undefined", null == undefined);

// (===) igualdad verificando tipo
// 1 === "1"
console.log("0 === false: ",0 === false);
console.log("0 === null: ",0 === null);
console.log("0 === undefined:", 0 === undefined);
console.log("null === undefined:", null === undefined);

// condicionales
function clasifyAge(age){
    if (age < 13) {
        return age + " es un niño(a)";
    } else if(age < 20) {
        return age + " es un adolecente";
    } else if(age >= 20){
        return age + " es un adulto";
    } else {
        return "El parametro no es valido";
    }
}

// valores falsos
// false, undefined, null, 0 , NaN, '' (cadena vacia)

if(0) {
    console.log("El cero es verdadero");
}else {
    console.log("El cero es falso");
}

let d = 2;
d % 2 == 0 ? console.log("Es par"): console.log("Es impar");

//switch
let key = 3;
switch (key) {
    case 2:
    case 4:
    case 6:
        console.log("A");
        break;
    case 3:
        console.log("B");
        break;
    default:
        console.log("Z");
}







