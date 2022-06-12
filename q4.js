let list = document.getElementById("myList");
let indexTwo = document.getElementById("indexTwo");

document.getElementById("btn").onclick = function(){
    list.removeChild(indexTwo);
}