let firstcard=3
let secondcard=20
let thirdcard=5
let sum=firstcard+secondcard+thirdcard
let hasBlackjack=false
let isAlive=true
if (sum<23){
    console.log("Do you want to draw a new card? 🙂")
}
else if (sum===23){
    console.log("Wohoo! You've got Blackjack! 🥳")
    hasBlackjack=true
}
else{
    console.log("You're out of the game! 😭")
    isAlive=false
}
console.log(isAlive)