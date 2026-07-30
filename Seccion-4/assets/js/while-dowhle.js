const marcas = ['ford','volvo', 'bmw', 'mercedes']
//this will run a cycle and the main characteristic, the condition we are going to evaluate we need to be sure it's acomplished if not it will create an infinite loop
//the value or the arg that will be passed inside the loop should be true
let i = 0;
while (i < marcas.length){

    console.log(marcas[i])
    i++;
}
//the main difference between them it's that the do while stablish that the function or code will run at least ones and will still run until the condition fails.
let j= 0 ;
do{
    console.log(marcas[j]);
    j++;
}while(marcas[j]);