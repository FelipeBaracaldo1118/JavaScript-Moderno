//using brackets is a way to indentify thats an Object in jS
//inside the object there are to things to take into account the key and it's value, the Key is the one that gives a reference for the element.
//creating an object using cost means that the properties inside the object can be mutable such as using let. BUT we cannot be able to change it's purpose like changing the objecto to a string.


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


//HOW TO DELETE PROPERTIES INSIDE THE OBJECTS
delete personaje.edad
console.log(personaje)

// IF WE NEED TO SEARCH INSIDE OF EACH INFO AND OBTAIN THEIR VALUES WE CAN USE :
const entriesPares = Object.entries(personaje)
//this will give a value for each propertie and value such as an array so it's easier to search inside the objects
console.log(entriesPares)

// Create a new propertie inside the object. 
personaje.casado = true;
console.log(personaje)

//to block the modification for the properties we sould use:
//this will freeze the object at the moment when the function/method is called. This will only affect the properties that have their assigned value, but no to the objects or arrays inside the main object.
Object.freeze(personaje)
personaje.dinero = 10000000;
console.log(personaje)

//print the properties name created inside the object.
let properties = Object.getOwnPropertyNames (personaje)
//print the values
let values = Object.values(personaje)
console.log(properties)
console.log(values)