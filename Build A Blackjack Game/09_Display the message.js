let messageEl=document.getElementById("message-el")
let firstcard=5
let secondcard=5
let sum=firstcard+secondcard
let hasBlackjack=false
let isAlive=true
message=""
function startGame(){
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
}