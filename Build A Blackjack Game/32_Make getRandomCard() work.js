let messageEl=document.getElementById("message-el")
 let sumEl = document.getElementById("sum-el")
 let cardEl=document.getElementById("card-el")
let firstcard=getrandoncard()
let secondcard=getrandoncard()
let cards=[firstcard,secondcard]
let sum=firstcard+secondcard
let hasBlackjack=false
let isAlive=true
message=""
function getrandoncard(){
    let random=Math.floor(Math.random()*14)
    return random
}
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
    let card = getrandoncard()
    sum += card
    cards.push(card)
    rendergame()
}
