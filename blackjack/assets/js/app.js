//create the deck  using a function
let deck =[];
const tipos = ['C', 'D','H','S']
const especiales = ['J', 'Q', 'K', 'A']

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
    console.log(deck)
    return deck;
}

createDeck()

//this function allows me to pick a card
const pedirCarta = () => {
    const carta = deck.pop();
    if(deck.length === 0 ){
        throw 'No hay cartas disponibles'
    }
    console.log(deck)
    console.log(carta)
    return carta;
}


//look for the card value
const valorCarta = (carta) =>{
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
console.log({valor})