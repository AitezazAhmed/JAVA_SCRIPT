let messageEl=document.getElementById("message-el")
 let sumEl = document.getElementById("sum-el")
 let cardEl=document.getElementById("card-el")
let firstcard=22
let secondcard=1
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
    sumEl.innerHTML="Sum:"+sum
    cardEl.innerHTML="Cards:"+ firstcard+ " "+secondcard
}
function newcard(){
    console.log("Drawing a new card from the deck!")
}