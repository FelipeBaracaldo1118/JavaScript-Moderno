/*const crearPersona = (nombre, apellido) => {
        return {
            nombre: nombre,
            apellido: apellido
        }
}

const persona = crearPersona ('Felipe', 'Baracaldo');

console.log(persona) */

//In ES6 when we want to return something that the propertie and the value has the same name we can just specify it ones.
//JS already understands that if you are calling it just once it's because the share the same name for the propertie and it's value
//If we want to return it, we should use parenthesis, it would recognize whats going on.
const crearPersona = (nombre, apellido) => ({nombre, apellido})
const persona = crearPersona ('Felipe', 'Baracaldo');

//we can also just recieve a value for an specific property if we need it using the propertie.
const {apellido} = crearPersona('Felipe', 'Amado')
console.log({apellido})

//arrow functions does not creeate arguments object. so we have to pass the arguments propertie as a value
//if we only use the reserved word arguments it will return only the 1 value argument detected. or create an array with all the arguments ... usgin this as a rest parameter
function imprimeArguemntos (...arguments) {
    console.log(arguments)
}
//after the rest paramter is not possible to bring another argument there.
// if we need to substract a value before the rest value it will show the value and it's property before the args and then the args as an array
let imprimeArgumentos2 = ( ...args) =>{
    //console.log({edad, args})
    return args
}
//we can create an array with name propeties to assign the arguments as it's values.
const [numero, saludo, casado, nombre] = imprimeArgumentos2 (1, 'hola', true, 'Felipe')
console.log({numero, saludo, casado, nombre})

//ARGUMENTS DESTRUCTURE

let tony = {
    
    nombre: 'Tony Stark',
    edad: 25,
    codeName: 'IronMan',
    vivo: false,
    trajes: ['Mark1', 'Mark63', 'HulkSmasher']
}
//if any property or value does not appear we can give it an specific value, but if that value exists it would affect the code and will be assigned to the expected value
//example I'll remove the age and asign it on the code
const imprimePropiedad = ({nombre, edad=40, codeName, vivo, trajes}) =>{
    console.log({nombre, edad, codeName, vivo, trajes})
}

imprimePropiedad(tony)