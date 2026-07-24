let games = ['zombies','dash', 'buscaminas']
console.log('length:', games.length)

//lets create variables to represent the position
let utlimo = games[2]
let primero = games[0]
//if the array is Dynamic and i'm not able to be sure which is the latest one, we can use the lenght
console.log(utlimo)

ultimo = games[games.length - 1]

console.log(ultimo)

//FOREACH runs for each element inside of the array

games.forEach( (elemento, indice, arr) => {
    console.log({elemento, indice, arr})
} )// THIS WILL RUN AN INSTRUCTION FOR ALL THE ELEMENTS INSIDE THE ARRAY

//method to insert one element inside the array, inserts the element at the latest space of the array

games.push('zelda')
console.log(games)
console.log(games.length)

//insert a element at very begining of the array
games.unshift('warzone')
console.log(games)