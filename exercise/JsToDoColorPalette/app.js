const button = document.getElementById("generate-color-btn");

const colors = ["red", "blue", "yellow", "green", "purple", "pink", "orange"];

button.addEventListener("click", () => {
  console.log("tıkladın");

  const randomNumber = Math.floor(Math.random() * colors.length);

  document.body.style.backgroundColor = colors[randomNumber];
});
