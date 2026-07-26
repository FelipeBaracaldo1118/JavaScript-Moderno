//using brackets is a way to indentify thats an Object in jS
//inside the object there are to things to take into account the key and it's value, the Key is the one that gives a reference for the element.
let personaje = {
    nombre: 'Tony Stark',
    edad: 25,
    codeName: 'IronMan',
    vivo: false,
    coord: {
        lat:1234,
        long:-1231.12
    },
    trajes: ['Mark1', 
        'Mark213',
        'HulkBuster'
    ]
}

console.log(personaje)
//to look for info inside the objects we can do it on different ways. 1. Using dot (.) notation, 2. using []. 
console.log(personaje['trajes'])
// we can enter into the object that it's inside the main object. 
console.log(personaje.coord.lat)
//number of suits IronMan has
console.log(personaje.trajes.length)
personaje.trajes.push('SpiderMan')
console.log(personaje.trajes.length, personaje.trajes)
//to search for the latest element inside the array
console.log(personaje.trajes[personaje.trajes.length - 1])