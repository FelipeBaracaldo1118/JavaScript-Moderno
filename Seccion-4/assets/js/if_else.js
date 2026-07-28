//control structures

let a = 5;
//the arguments/compartison we are going to pass inside of it, should be boolean, but there are some exceptions such as undefined, null, an assignation
if (a < 10){
    console.log('es mayor a 10')
}
console.log('finaliza')
//new let as create a new instance of an object. 
//date obtains the info of the current time
const hoy = new Date();
let dia = hoy.getDay()
console.log({dia})

if (dia === 0){
    console.log('Domingo')
}else if (dia === 1){
    console.log('lunes')
}else if(dia === 2){
    console.log('martes')
}else if(dia === 3){
    console.log('miercoles')
}else if (dia ===  4){
    console.log('jueves')
}else if(dia === 5){
    console.log('viernes')
}else if(dia === 6){
    console.log('sabado')
}