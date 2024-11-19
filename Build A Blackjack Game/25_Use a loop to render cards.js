let messageEl=document.getElementById("message-el")
 let sumEl = document.getElementById("sum-el")
 let cardEl=document.getElementById("card-el")
let firstcard=5
let secondcard=5
let cards=[firstcard,secondcard]// array - ordered list of items
let sum=firstcard+secondcard
let hasBlackjack=false
let isAlive=true
message=""
function startGame(){
    rendergame()
}
function rendergame(){
    if (sum<23){
        message="Do you want to draw a new card?"
    }
    else if (sum===23){
        message="Wohoo! You've got Blackjack!"
        hasBlackjack=true
    }
    else{
        message="You're out of the game!"
        isAlive=false
    }
    messageEl.innerHTML=message
    sumEl.innerHTML="Sum:"+sum
    cardEl.innerHTML="Cards:"
    for(i=0; i<cards.length; i++){
        cardEl.innerHTML+=cards[i]+" "
        }
}
function newcard() {
    // console.log("Drawing a new card from the deck!")
    // 1. Create a card variable, and hard code its value to a number (2-11)
    let card = 7
    // 2. Add the new card to the sum variable
    sum += card
    cards.push(card)
    // 3. Call startGame()
    rendergame()
}
