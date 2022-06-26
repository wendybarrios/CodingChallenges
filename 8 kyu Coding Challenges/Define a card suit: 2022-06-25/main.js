// You get any card as an argument. Your task is to return the suit of this card (in lowercase).


// Tests
// defineSuit('Q♠') -->  'spades'
// defineSuit('9♦') --> 'diamonds'
// defineSuit('J♥') -->  'hearts'

function defineSuit(card){
    // if else
   if(card.includes('♥')){
       return 'hearts'
   } else if(card.includes('♦')){
       return 'diamonds'
   } else if (card.includes('♠')){
       return 'spades'
   } else if (card.includes ('♣')){
     return 'clubs'
   }

}

