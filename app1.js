let a = document.querySelector(".fa-magnifying-glass");
let b = document.querySelector(".fa-xmark");
let c = document.querySelector(".box-1");
let d = document.querySelector(".box-2");
a.addEventListener("click", () => {
   d.classList.remove("box_sub");
   c.classList.add("box_sub");
});
b.addEventListener("click", () => {
   c.classList.remove("box_sub");
   d.classList.add("box_sub");
});
