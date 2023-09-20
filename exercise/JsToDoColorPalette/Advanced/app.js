// const input = document.querySelector('input[type="range"]');
// console.log(input);

// 1. 3 farklı range ile rgb değeri oluşturarak renk oluşturma
const redInput = document.getElementById("red");
const greenInput = document.getElementById("green");
const blueInput = document.getElementById("blue");

// redInput.addEventListener("input", (e) => {
//   console.log("Red Input : ", e.target.value);
//   document.body.style.backgroundColor = `rgb(${e.target.value}, ${greenInput.value}, ${blueInput.value})`
// });

// greenInput.addEventListener("input", (e) => {
//     console.log("Green Input : ", e.target.value);
//     document.body.style.backgroundColor = `rgb(${redInput.value}, ${e.target.value}, ${blueInput.value})`
//   });

// blueInput.addEventListener("input", (e) => {
// console.log("Blue Input : ", e.target.value);
//     document.body.style.backgroundColor = `rgb(${redInput.value}, ${greenInput.value}, ${e.target.value})`
//   });

// foksiyon la renk üretme
// function changeBodyColor(){
//     document.body.style.backgroundColor = `rgb(${redInput.value}, ${greenInput.value}, ${blueInput.value})`
//   }
//   redInput.addEventListener("input", changeBodyColor);
//   greenInput.addEventListener("input", changeBodyColor);
//   blueInput.addEventListener("input", changeBodyColor);

//   bütün inputları seçerek renk değiştirme
const inputs = document.querySelectorAll('input[type="range"]');
function changeBodyColor() {
  document.body.style.backgroundColor = `rgb(${redInput.value}, ${greenInput.value}, ${blueInput.value})`;
}
inputs.forEach((input) => input.addEventListener("input", changeBodyColor));
