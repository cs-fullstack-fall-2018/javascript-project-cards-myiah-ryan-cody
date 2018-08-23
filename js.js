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

var p1score, p2score = 0;

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

    p1score = 0;
    p2score = 0;
    var scorep1 = document.getElementById("score1");
    var scorep2 = document.getElementById("score2");

        for (var i = 0; i<player1Deck.length;i++) {
            if (player1Deck[i].cardNumber < player2Deck[i].cardNumber) {
                console.log("Player 2 is the WINNER!");
                console.log(player1Deck[i].cardNumber + " - " + player2Deck[i].cardNumber);
                p2score++;
            }
            else if (player1Deck[i].cardNumber > player2Deck[i].cardNumber) {
                console.log("Player 1 is the WINNER!");
                console.log(player1Deck[i].cardNumber + " - " + player2Deck[i].cardNumber);
                p1score++;
            }else {
                console.log("TIE!")

            }
        }
        console.log("Player 1: "+p1score+" Player 2: "+p2score);
    scorep1.innerText="Player has won: "+p1score ;
    scorep2.innerText="Player has won: "+p2score;


}

function resetFunction()
{
    for (var i = 0; i < 10000; i++)
    {
        let rand1 = Math.floor((Math.random() * cards.length));
        let rand2 = Math.floor((Math.random() * cards.length));
        let tmp = cards[rand1];
        cards[rand1] = cards[rand2];
        cards[rand2] = tmp;
    }
    player1Deck = cards.slice();
    player2Deck = player1Deck.splice(1, 26);
}

    var button = document.getElementById("button1");
    button.addEventListener("click", randomShuffle);

    var buttonReset = document.getElementById("resetButton");
    buttonReset.addEventListener("click",resetFunction);
