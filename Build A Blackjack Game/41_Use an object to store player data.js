let player = {
    name: "Per",
    chips: 145
}
let messageEl=document.getElementById("message-el")
 let sumEl = document.getElementById("sum-el")
 let cardEl=document.getElementById("card-el")
let firstcard=getrandoncard()
let secondcard=getrandoncard()
let cards=[]
let sum=0
let hasBlackjack=false
let isAlive=true
message=""
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips
function getrandoncard(){
    let random=Math.floor(Math.random()*14)
    if (random>10){
        return 10
    } else if(random===1){
        return 11
    }else{
        return random
    }
}
function startGame(){
    isAlive=true
    let firstcard=getrandoncard()
    let secondcard=getrandoncard()
    cards=[firstcard,secondcard]
    sum=firstcard+secondcard
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
    if(isAlive===true && hasBlackjack===false){
    let card = getrandoncard()
    sum += card
    cards.push(card)
    rendergame()}
}