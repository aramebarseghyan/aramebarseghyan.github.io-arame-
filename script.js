let srp1 = document.querySelector(".srp1");

let body = document.querySelector("body");

let btn = document.querySelector(".btn");

let sp1 = document.querySelector(".sp1");

let h1 = document.querySelector("h1");

btn.addEventListener("click", () => {
  srp1.style.display = "block";
  srp1.style.color = "red";

  sp1.style.display = "none";
  btn.style.display = "none";
  h1.style.display = "none";
});
