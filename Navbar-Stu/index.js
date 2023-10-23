const hamburger = document.querySelector(".hamburger");
const ul = document.querySelector("ul");
const ham_active = document.querySelector(".ham_active");

hamburger.classList.remove("active");
ul.classList.remove("active");
ul.classList.remove("ham_active");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  ul.classList.toggle("active");
  ul.classList.toggle("ham_active");

  let ham_child = hamburger.firstElementChild;
  if (ul.classList.contains("ham_active")) {
    ham_child.classList.replace("fa-bars", "fa-xmark");
  } else {
    ham_child.classList.replace("fa-xmark", "fa-bars");
  }
});
