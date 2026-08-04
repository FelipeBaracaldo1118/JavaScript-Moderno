//create the deck  using a function
let deck =[];
const tipos = ['C', 'D','H','S']
const especiales = ['J', 'Q', 'K', 'A']

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
    console.log(deck)
}

//install underscore is a JS library with a lot of functions that javascript doesn't have right now

createDeck()