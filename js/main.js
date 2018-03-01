console.log("Up and Running!");
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
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
console.log("User flipped " + cards.rank);
cardsInPlay.push(cards.rank);
console.log(cards.cardImage);
console.log(cards.suit);
}
flipCard(cards[0]);
flipCard(cards[2]);
if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
	alert("You Found A Match!");
}
	else {
		alert("Sorry, Try Again!");
}