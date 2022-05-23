"use strict";
let N = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
let s = 20;
let h = 0;
let g = 0;
const Z = function () {
  const g = Number(document.querySelector(".guess").value);
  if (!g) {
    M("guss some number");
  } else if (g !== N) {
    M(g < N ? "too low" : "too high");
    s--;
    // corect
    //if (g == N){
  } else {
    M(`corect and ur score is ${s}`);

    document.querySelector("body").style.backgroundColor = "#60b347";
    if (s > h) {
      h = s;
      document.querySelector(".highscore").textContent = h;
    }
    // } else {
    //   document.querySelector(".highscore").textContent = h;
    // }
    // s > h ? (document.querySelector(".highscore").textContent = s) : "";
    document.querySelector(".number").textContent = N;
    document.querySelector(".check").disabled = true;
    // <form ... onkeydown="return event.key != 'Enter';">
  }
  if (s >= 0) {
    document.querySelector(".score").textContent = s;
  } else {
    M("u lose");
  }
};

let M = function (mm) {
  document.querySelector(".message").textContent = mm;
};
document.querySelector(".check").addEventListener("click", function () {
  Z();
});
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowUp") {
    g++;
  } else if (e.key === "ArrowUp") {
    g--;
  } else if (e.key === "Enter") {
    Z();
  }
});
document.querySelector(".again").addEventListener("click", function () {
  s = 20;
  N = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
  M("start");
  document.querySelector(".check").disabled = false;
  document.querySelector(".score").textContent = s;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  console.log(N);
  
});
