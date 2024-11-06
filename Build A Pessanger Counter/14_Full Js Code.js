let saveEl = document.getElementById("save-el")
let countDisplay = document.getElementById("count");// Grab the welcome-el paragraph and store it in a variable called welcomeEl
let welcomeEl = document.getElementById("welcome-el")

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

let name = "Aitezaz"
let greeting = "Welcome back "

// Render the welcome message using welcomeEl.innerText
welcomeEl.innerText = greeting+ name+"🙌"
let count = 0;

function increment() {
    count += 1;
    countDisplay.innerHTML = count;
}
function decrement(){
    count -= 1;
    countDisplay.innerHTML = count;
}
function save() {
    variable = count + " - "
    saveEl.innerHTML += variable
    // search diff between inner text inner html or inner content inner text human readable but inner html or inner content human readable or human not readable both include
count=0
countDisplay.innerHTML=0
}