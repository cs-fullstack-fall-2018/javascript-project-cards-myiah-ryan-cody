var newGame = document.getElementById("button1");
newGame.addEventListener("click", winner);
var score = 0;
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
// var button = document.getElementById("button1");
// button.addEventListener("click", );


var player1Deck = [];
var player2Deck = [];

function winner() {
    for (var i = 0; i < 10000; i++) {
        let rand1 = Math.floor((Math.random() * cards.length));

        let rand2 = Math.floor((Math.random() * cards.length));

        let tmp = cards[rand1];

        cards[rand1] = cards[rand2];
        cards[rand2] = tmp;

        player1Deck = cards.slice();
        player2Deck = player1Deck.splice(1, 26);

        console.log(player2Deck);
        console.log(player1Deck);

        if (player1Deck > player2Deck) {
            document.write("Player 1 Wins!");
        }
        else if (player1Deck < player2Deck) {
            document.write("Player 2 Wins!");
        }
        else {
            document.write("Tie game");
            break
        }
    }
}
function keepScore(){

}


// player1Deck = cards.slice();
// player2Deck = player1Deck.splice(1, 26);