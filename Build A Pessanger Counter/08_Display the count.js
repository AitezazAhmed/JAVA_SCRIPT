let countDisplay = document.getElementById("count");
let count = 0;

function increment() {
    count += 1;
    countDisplay.innerText = count;
}
