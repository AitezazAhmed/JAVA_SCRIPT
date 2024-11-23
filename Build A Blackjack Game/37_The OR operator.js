// Create two boolean variables, likesDocumentaries and likesStartups
// Use an OR statement (||) to call recommendMovie() if either of those variables are true
let haslikesdocumentaries=true
let haslikesStartups=false
if(haslikesdocumentaries===true || haslikesStartups===false){
    recommendMovie()
}
function recommendMovie() {
    console.log("Hey, check out this new film we think you will like!")
}
