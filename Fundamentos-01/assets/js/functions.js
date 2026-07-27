//FUNCTIONS -> The main idea of functions is to store the logic for a process we can call/run different times 
function saludar(){
    console.log('Hello World')
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
}
prueba('felipe')

// If theres any other arguments that are not included/declared previously on the traditional functions store those arguments in a special space called arguments.
function creandoarguemntos(){
    console.log(arguments)
}

creandoarguemntos(1, 'felipe', 'hablando')

//Arrow Functions -> Lambda functions 

let arrow = () => {
    
}