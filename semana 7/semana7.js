/*ejercicio3 1/
let suma = 5;
let contador = 1; 

for (let i = 1; i <= suma; i++){
        contador *= i;
}
console.log(`la sumatoria es ${contador}`)

/*ejercicio2 */
function facRecur(numeroDado) {
    if ( numeroDado == 0) {
        return 1;
    } else {
        return numeroDado * facRecur(numeroDado - 1); 
    }
}

console.log(facRecur(5));



/*ejercicio3 */
function doble(_c) {
    if (_c == 0) {
        return ("es impar");
    } else {
        return doble2(_c-1);
    }
}

function doble2(_c){O
    if (_c == 0) {
        return ("es par")
    }else{
        return doble(_c-1);
    }
}
console.log(doble(4));


