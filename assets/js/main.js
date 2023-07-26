// QUERY SELECTOR FOR HEART ICON.

const heart_icon = document.querySelectorAll(".item-desc-1 .bxs-heart");

heart_icon.forEach((icon) => {
  icon.addEventListener("click", (event) => {
    if (event.target.style.color === "red") {
      event.target.style.color = "black";
    } else {
      event.target.style.color = "red";
    }
  });
});
