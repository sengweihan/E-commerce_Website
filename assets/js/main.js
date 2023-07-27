// QUERY SELECTOR FOR ADD TO CART BUTTON.
const cart_btn = document.querySelectorAll(
  ".new-arrival-item .add-cart button"
);
cart_btn.forEach((btn) => {
  btn.addEventListener("mouseover", (event) => {
    event.target.innerHTML = "<i class='bx bxs-cart'></i> Add to cart";
    event.target.style.backgroundColor = "white";
    event.target.style.color = "#dc2626";
  });
});

cart_btn.forEach((btn) => {
  btn.addEventListener("mouseout", (event) => {
    event.target.innerHTML = "Add to cart";
    event.target.style.backgroundColor = "#dc2626";
    event.target.style.color = "white";
  });
});

// QUERY SELECTOR FOR HAMBURGER BUTTON.
const hamburger_btn = document.getElementById("menu-icon");
const navbar = document.querySelector(".nav-bar ul");

hamburger_btn.addEventListener("click", (event) => {
  event.target.classList.toggle("bx-x");
  navbar.classList.toggle("test");
});

hamburger_btn.addEventListener("onscroll", (event) => {
  event.target.classList.remove("bx-x");
  navbar.classList.remove("test");
});
