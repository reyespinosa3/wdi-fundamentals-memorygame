console.log("Up and Running!");
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You Found a Match!");
	} else {
		console.log("Sorry, Try Again!");
	}
}
var flipCard = function(cards) {
checkForMatch;
console.log("User flipped " + cards);
cardsInPlay.push(cards);
}
flipCard(cards[0]);
flipCard(cards[2]);
if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
	alert("You Found A Match!");
}
	else {
		alert("Sorry, Try Again!");
}