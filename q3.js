let myDiv = document.getElementById("myDiv");
let para = document.createElement("p");
let btn = document.getElementById("btn");

para.innerText = "Welcome to JavaScript DOM";

document.getElementById("btn").onclick= function(){
  myDiv.insertBefore(para,btn);
}
