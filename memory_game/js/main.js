

var cardOne;
var cardTwo;
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

cardOne = cards[0];
cardTwo = cards[1];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
console.log("user flipped " + cardsInPlay[1]);

if(cardsInPlay.length === 2){
  if(cardsInPlay[0] === cardsInPlay[1]){
    alert("You found a match!");
  }
  else{
    alert("Sorry try again!");
  }
}
