const menue = document.querySelectorAll(".menue .member");
console.log(menue);
menue.forEach(item => {
  item.addEventListener("click", () => {
    var current = document.querySelectorAll(".active");
    current[0].classList.remove("active");
    item.classList.add("active");
  });
});

const menu = document.querySelector(".menue-toggle");
menu.addEventListener("click", () => {
  const nav = document.querySelector("header nav");
  nav.classList.toggle("show");
});
