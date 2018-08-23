const cards = [
    {cardNumber: 6, type: 'h'},
    {cardNumber: 9, type: 'd'},
    {cardNumber: 2, type: 'h'},
    {cardNumber: 9, type: 'h'},
    {cardNumber: 14, type: 'h'},
    {cardNumber: 6, type: 'c'},
    {cardNumber: 2, type: 'd'},
    {cardNumber: 9, type: 's'},
    {cardNumber: 12, type: 'h'},
    {cardNumber: 10, type: 'c'},
    {cardNumber: 14, type: 'c'},
    {cardNumber: 7, type: 'd'},
    {cardNumber: 3, type: 's'},
    {cardNumber: 8, type: 'd'},
    {cardNumber: 12, type: 's'},
    {cardNumber: 7, type: 's'},
    {cardNumber: 7, type: 'c'},
    {cardNumber: 14, type: 'd'},
    {cardNumber: 11, type: 'c'},
    {cardNumber: 10, type: 's'},
    {cardNumber: 11, type: 'd'},
    {cardNumber: 4, type: 'd'},
    {cardNumber: 2, type: 's'},
    {cardNumber: 7, type: 'h'},
    {cardNumber: 14, type: 's'},
    {cardNumber: 10, type: 'h'},
    {cardNumber: 5, type: 'c'},
    {cardNumber: 12, type: 'c'},
    {cardNumber: 6, type: 's'},
    {cardNumber: 5, type: 's'},
    {cardNumber: 12, type: 'd'},
    {cardNumber: 4, type: 'h'},
    {cardNumber: 11, type: 'h'},
    {cardNumber: 13, type: 'c'},
    {cardNumber: 5, type: 'h'},
    {cardNumber: 6, type: 'd'},
    {cardNumber: 13, type: 's'},
    {cardNumber: 13, type: 'd'},
    {cardNumber: 8, type: 'c'},
    {cardNumber: 4, type: 's'},
    {cardNumber: 13, type: 'h'},
    {cardNumber: 2, type: 'c'},
    {cardNumber: 8, type: 's'},
    {cardNumber: 10, type: 'd'},
    {cardNumber: 3, type: 'c'},
    {cardNumber: 3, type: 'h'},
    {cardNumber: 11, type: 's'},
    {cardNumber: 8, type: 'h'},
    {cardNumber: 9, type: 'c'},
    {cardNumber: 5, type: 'd'},
    {cardNumber: 3, type: 'd'},
    {cardNumber: 4, type: 'c'}];


var player1Deck = [];
var player2Deck = [];

player1Deck = cards.slice();
player2Deck = player1Deck.splice(1, 26);
// console.log(player1Deck);
// console.log(player2Deck);

function randomShuffle() {


    for (var i = 0; i < 10000; i++) {
        let rand1 = Math.floor((Math.random() * cards.length));
        let rand2 = Math.floor((Math.random() * cards.length));
        let tmp = cards[rand1];
        cards[rand1] = cards[rand2];
        cards[rand2] = tmp;
    }
    player1Deck = cards.slice();
    player2Deck = player1Deck.splice(1, 26);
    if (player1Deck[0] < player2Deck[0]) {
        document.write("Player 2 is the WINNER!")
    } else {
        document.write("Player 1 is the WINNER!")
    }
console.log(player2Deck);
    console.log(player1Deck);
}

var button = document.getElementById("button1");
button.addEventListener("click", randomShuffle);
console.log(player2Deck);

// for (var i = 0; i < 10000; i++);

// Generate a new set of cards with the code below:

//     var cards  = new Array();
// var typeArray = ["s", "d", "c", "h"];
// var cardNumberArray = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"];
//
// for(let i=0; i <typeArray.length; i++)
// {
//     for(let x=0; x <cardNumberArray.length; x++)
//     {
//         let card = {cardNumber: cardNumberArray[x], type: typeArray[i]};
//         cards.push(card);
//     }
// }
//
// for (var i=0; i < 10000; i++)
// {
//     let rand1 = Math.floor((Math.random() * cards.length));
//     let rand2 = Math.floor((Math.random() * cards.length));
//     let tmp = cards[rand1];
//     cards[rand1] = cards[rand2];
//     cards[rand2] = tmp;
// }