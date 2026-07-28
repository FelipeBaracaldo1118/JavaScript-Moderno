let a = 10;
let b = 10;

a =20;

let juan = {
    nombre: 'Juan'
}

//when we use it anywhere not like a parameter ... is a spread operator and separates the objects.
let ana = {...juan};
ana.nombre = 'Ana';
console.log({juan, ana})
// when we use ... in an argument it is a rest parameter.

const cambiaNombre = ({...persona}) => {
    persona.nombre = 'Tony';
    return persona
}

let peter = {nombre: 'Peter'}
let tony = cambiaNombre(peter);

console.log(peter, tony)


//ARRAYS

const fruits = ['Manzana', 'Pera', 'Piña']
//cuts the array and returns the elements we specify
console.time('slice')
const otrasFrutas = fruits.slice();
console.timeEnd('slice')

console.time('spread')
const otrasFrutas2 = [...fruits]
console.timeEnd('spread')

otrasFrutas.push('Mango')
otrasFrutas2.push('fresa')
console.table(fruits)
console.table(otrasFrutas)

