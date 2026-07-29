const elMayor = (a,b) => (a > b)? a:b;
//arrow function using booleans
const tieneMemebrsia = (membresia) => (membresia)? '2 dolares':'10 dolares'
console.log(elMayor(100,23))
console.log(tieneMemebrsia(true))

//create arrays or objects with any specific condition
const amigo=true;
const amigoArr=[
    'Peter',
    'Bruno',
    'Santi',
    amigo ? 'Thor' : 'Loki'
]

console.log(amigoArr)

const nota = 65;
const grado = nota >= 95 ? 'A+':
              nota >= 90 ? 'A':
              nota >= 85 ? 'B+':
              'F';

console.log([nota, grado])