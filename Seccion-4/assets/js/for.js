const heros = ['Spiderman', 'Flash', 'SuperMan']

console.warn('Traditional For')
//the FOR cycle pass 3 parameters to intialize, the first on is the variable that will be referenced, the second one is the parameter we are looking to compare and will complete the execution everytime the valitdation still true, and finally the counter so the loop finishes.
heros.push('Aquaman')
for(let i = 0; i < heros.length ; i++){
    console.log(heros[i])
}

console.warn('for in')
//Use this to loop through the properties (keys) of an Object. It lets you inspect the structure of a data object
for(let i in heros){
    console.log(heros[i])
}


console.warn('For of')
//this is used to obtain values from objects/arrays in an easy mode.
//we should no used the common varaible I, we have to get used to put the singular version of the variable we are looking for.
for(let i of heros){
    console.log(i)
}