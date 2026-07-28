//FUNCTIONS -> The main idea of functions is to store the logic for a process we can call/run different times 
function saludar(){
    console.log('Hello World')
    return 1;
}
//it's a good practice to define first the function and then call it. 

//using a const and the make the function, this is called an anonimous funciton.
const saludar2 = function(){
    console.log('Hello World 2')
}

//theres something really important while using FUNCTIONS -> the ARGUMENTS. this info that are called and pass into the function like a dynamic data to insert and make 
//the function work depending on the arguments user pass into it.

function prueba(nombre){
    console.log('Hola '+ nombre)
    return 10;
}

let pruebaretorno= prueba('felipe')
console.log(pruebaretorno)
// If theres any other arguments that are not included/declared previously on the traditional functions store those arguments in a special space called arguments.
function creandoarguemntos(){
    console.log(arguments)
}

creandoarguemntos(1, 'felipe', 'hablando')

//Arrow Functions -> Lambda functions 

let arrow = () => {

}

//each previous functions always returns an value
//each function that is not using the reserve word return it's value should be undefined
//coding lines typed after the return will not be executed. Basically return, quits from the function 

sumar = (a,b) =>{
    return a + b;
}
console.log(sumar(1,2))

//this is a new way to make arrow functions to return when it's the only line of code.

let sumar2 = (a,b) => a+b;
console.log(sumar2 (22,1))

let getAleatorio = () => Math.random();
console.log(getAleatorio())