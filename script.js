const kamkom = document.getElementById("kamkom");
const button = document.getElementById("button");
const meme = document.getElementById("meme");
const butmeme = document.getElementById("popup");
const changeColor = document.getElementById("changeColor");

button.addEventListener("click", () => {
  if (kamkom.style.display === "none" || kamkom.style.display === "") {
    kamkom.style.display = "block";
  } else {
    kamkom.style.display = "none";
  }
});

changeColor.addEventListener("click", () => {
  kamkom.style.color = "purple";
});

butmeme.addEventListener("click", () => {
  if (meme.style.display === "none" || meme.style.display === "") {
    meme.style.display = "block";
  } else {
    meme.style.display = "none";
  }
});
