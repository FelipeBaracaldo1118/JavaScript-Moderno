const regresaTrue = () => {
    console.log('regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('regresa false');
    return false;
}

//transforms the value to the opposite
console.warn('Not o negacion')

//and operator && both values must be true to return true
// if the first value is false, the second value is not evaluated
console.warn('And');

//OR || at least one value must be true to return true
// if the first value is true, the second value is not evaluated
console.warn('Or');

//Assignment = assigns the value of the right side to the left side
console.warn('Asignacion');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && "Hola mundo";
//if are working with and there's 2 values to be evaluated but the second one is not defined, this will be assigned to the variable as a value
const a2 = "Hola" && "Mundo";

//make assignment wiht or
const a3 = soyFalso || "Ya no soy falso";
