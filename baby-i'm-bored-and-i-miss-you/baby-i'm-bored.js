// Author: Emma Faszer
// Date: 23 July 2025


function sortingHat(str) {
    let len = str.length
    let mod = len % 4;
    if (mod === 0) {
        return "I thought so. If you hadn't abandoned me to start with you wouldn't be in this situation. You didn't start this but you couldn;t give me a resolution and here we are."
    }
    else if (mod === 1) {
        return "Then come back. I really just want to be close to you again."
    }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
    var name= document.getElementById("input").ariaValueMax;
    var house = sortingHat(name);
    newText = "<p>Well: " + house + "</p>";
    document.getElementById("output").innerHTML = newText;
})