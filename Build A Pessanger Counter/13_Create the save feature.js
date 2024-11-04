let saveEl = document.getElementById("save-el")
let countDisplay = document.getElementById("count");
let count = 0;

function increment() {
    count += 1;
    countDisplay.innerHTML = count;
}
function save() {
    variable = count + " - "
    saveEl.innerHTML += variable
    // search diff between inner text inner html or inner content inner text human readable but inner html or inner content human readable or human not readable both include
count=0
countDisplay.innerHTML=0
}
