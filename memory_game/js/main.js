


var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function(){
  if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
}
}

var cardId;

var flipCard = function(cardId){

cardsInPlay.push(cards[cardId]);

console.log("user flipped " + cardsInPlay[cardsInPlay.length - 1]);


}

flipCard(0);
flipCard(2);
checkForMatch();
