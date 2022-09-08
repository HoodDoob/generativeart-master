"use strict";
document.addEventListener("DOMContentLoaded", init);

function init() {
  for (let counter = 100; counter <= 300; counter += 20) {
    let figure1 = document.createElement("div");
    figure1.classList.add("box");
    figure1.style.height = counter + "px";
    figure1.style.width = counter + "px";
    document.querySelector("#artwork1").appendChild(figure1);
  }
  for (let counter = 0; counter <= 90; counter += 10) {
    let figure2 = document.createElement("div");
    figure2.classList.add("box");
    figure2.style.rotate = counter + "deg";
    document.querySelector("#artwork2").appendChild(figure2);
  }
  for (let counter = 0; counter <= 200; counter += 10) {
    let figure3 = document.createElement("div");
    figure3.classList.add("circle");
    figure3.style.height = counter + "px";
    figure3.style.width = counter + "px";
    document.querySelector("#artwork3").appendChild(figure3);
  }
  for (let counter = 1; counter <= 512; counter *= 2) {
    let figure5 = document.createElement("div");
    figure5.classList.add("circle");
    figure5.style.height = counter + "px";
    figure5.style.width = counter + "px";
    document.querySelector("#artwork5").appendChild(figure5);
  }
}
