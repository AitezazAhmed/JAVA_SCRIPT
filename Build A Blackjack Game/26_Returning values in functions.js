let player1Time = 102
let player2Time = 107
function fastestRace(){
if(player1Time<player2Time){
    return player1Time
}
else if(player2Time<player1Time){
    return player2Time
}
else{
    return player1Time
}}
let fastRace=fastestRace()
console.log(fastRace)
// let fastestRace = getFastestRaceTime()
// console.log(fastestRace)

// Write a function that returns the total race time
// Call/invoke the function and store the returned value in a new variable
// Finally, log the variable out
function totalraceTime(){
    
     return player1Time+player2Time
    
}

let totalrace=totalraceTime()
console.log(totalrace)