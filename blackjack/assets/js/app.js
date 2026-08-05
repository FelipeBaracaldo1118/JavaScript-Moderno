//create the deck  using a function
let deck =[];
const tipos = ['C', 'D','H','S']
const especiales = ['J', 'Q', 'K', 'A']

let puntosJugador = 0;
let puntosComputadora = 0;
//HTML references
const btnPedir = document.querySelector('#Pedir')
const divCartas_jugador = document.querySelector('#jugador-cartas')
const divCartasComputadora = document.querySelector('#computadora-cartas')
const btnDetener = document.querySelector('#Detener')
const btnNewGame = document.querySelector('#Nuevo')
//this function creates a new deck
const createDeck = () =>{
    //loop for taking each card form 2 until 10 on each letter
    for (i = 2; i<=10 ; i++){
        for (let tipo of tipos){
            deck.push(i+tipo)
            
        }
    }

    //loop for taking special (letter based) cards of each letter 
    for ( let tipo of tipos){
        for(let especial of especiales){
            deck.push(especial + tipo)
        }
    }
        //install underscore is a JS library with a lot of functions that javascript doesn't have right now
        deck = _.shuffle(deck)
    
    return deck;
}

createDeck()

//this function allows me to pick a card
const pedirCarta = () => {
    const carta = deck.pop();
    if(deck.length === 0 ){
        throw 'No hay cartas disponibles'
    }
    
    return carta;
}


//look for the card value
const valorCarta = (carta) => {
    //how to extact the first letter/value 
    //the string can be worked as an array
    //this substring return a new string cutted on base of the intial potition
    const valor = carta.substring(0, carta.length-1);
    return (isNaN(valor)) ? 
            (valor === 'A') ? 11 : 10
            : valor * 1; 
    //isNaN looks. if that is not a number
    
    
}
const valor = valorCarta( pedirCarta() );

const turnoComputadora = (puntosMinimos) => {

   do{ const carta = pedirCarta();
    puntosComputadora = puntosComputadora + valorCarta(carta);
    small[1].innerText = puntosComputadora;

    const imgCarta = document.createElement('img');
    imgCarta.src= `/blackjack/assets/cartas/${carta}.png`
    imgCarta.classList.add('carta')
    divCartasComputadora.append(imgCarta)
    if(puntosMinimos > 21){
        break;
    }
   } while( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

   //set time out runs the code after a time set up 
   //this will make that this part of the code runs after all the previous steps are done
   setTimeout(() => {
     if(puntosComputadora === puntosMinimos){
        alert('No body wins')
   }else if (puntosMinimos > 21){
    alert('Computer Wins')
   }else if(puntosComputadora > 21){
    alert('Player Wins')
   }else{
    alert('Computer Wins')
   }
   }, 30)
}

//when using the DOM. we can edit the whole structure and info inside any website using JS
// innerHTML changes the whole HTML element inside the one we were looking for
// innerText only changes the text inside the selected document
// we should try to use the less as possible the docuemnt query selector because it will scan the whole HTML and creating more resources for the website

//instead create a variable that will be called when need it 

const small = document.querySelectorAll('small')

/** 
// we can access any tipe of ID or element using DOM 
const divBtn = document.querySelector('#divBtn');
// we can create any element using DOM
const newBtn = document.createElement('button')
//we can insert into any section or space we need the new element created
//the benefit of using this way is that we will be able to change it directly on the HTML
divBtn.append(newBtn)
//we can add the attributes as other type of elements and everything
newBtn.innerHTML = 'Destruir el mundo'
newBtn.classList.add('btn', 'btn-success')

//example using a body input
const divBody = document.querySelector('#body')
const bodyInput = document.createElement('input')

divBody.append(bodyInput)
bodyInput.classList.add('form-control')
bodyInput.placeholder = "Hola mundo"
*/
//FIXME: the function passed as argument from another function is called callback
//This makes the button make any specific action we are looking for
btnPedir.addEventListener('click', () => {

    const carta = pedirCarta();
    console.log(carta);
    puntosJugador = puntosJugador + valorCarta(carta)
    console.log(puntosJugador)
    small[0].innerText = puntosJugador


    //create the cards in the HTML
    const imgCarta = document.createElement('img');
    imgCarta.src = `/blackjack/assets/cartas/${carta}.png`;
    //to add the class to the item craeted
    imgCarta.classList.add('carta');
    //insert the node objects or strings after last child of a parent element
    divCartas_jugador.append(imgCarta);

    if (puntosJugador > 21){
        console.warn('Finaliza el juego');
        //how to block the button
        btnPedir.disabled = true;
        turnoComputadora(puntosJugador)
        btnDetener.disabled = true;
    }else if(puntosJugador === 21){
        console.warn('ganaste')
        btnPedir.disabled = true;
        turnoComputadora(puntosJugador)
        btnDetener.disabled = true;
    }
})

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;

    turnoComputadora(puntosJugador)

})

btnNewGame.addEventListener('click',() => {
    puntosJugador = 0;
    puntosComputadora = 0;
    small[0]= 0;
    small[1]= 0;

    divCartasComputadora.innerText=''
    divCartas_jugador.innerText=''

    btnPedir.disabled= false;
    btnDetener.disabled = false;

    deck = createDeck();
})
