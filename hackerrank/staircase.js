// Complete the staircase function below.
function staircase(n) {
    for (let index = 1; index < n+1; index++) {
        //console.log(spaceBuilder(n-index)+ numeralBuilder(index));

        // alternativa solo utilizando .repeat
        console.log(" ".repeat(n-index) + "#".repeat(index));
    }
}

// mi propia función builder " "
function spaceBuilder(n){
    let spaceString = '';
    for (let index = 0; index < n; index++) {
        spaceString+= ' ';
    }
    return spaceString;
}

// mim propia funcion builder de "#"
function numeralBuilder(n){
    let numeralString = '';
    for (let index = 0; index < n; index++) {
        numeralString+= '#';
    }
    return numeralString;
}

staircase(6);