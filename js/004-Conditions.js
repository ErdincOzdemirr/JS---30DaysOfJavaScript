//if
// let num = 3;
// if (num > 0) {
//     console.log(`${num} is a positive number`)
// }

// let isRainning = true
// if (isRainning) {
//     console.log('Remember to take your rain coat')
// }

// If else
// let isRainning = false;
// if (isRainning) {
//   console.log("Remember to take your rain coat");
// } else {
//   console.log("Hava güneşli, şemsiye iptal !!");
// }

// let result = prompt("2+5 kaç yapar?", "2+5");
// if (result === "7") {
//   console.log("Cevabı bildin.");
// } else {
//   console.log("Hatalı cevabı verdin, doğru cevap 7");
// }

// let num1 = 3;
// if (num1 > 0) {
//   console.log(`${num1} is a positive number`);
// } else {
//   console.log(`${num1} is a negative number`);
// }
// let num2 = -3;
// if (num2 > 0) {
//   console.log(`${num2} is a positive number`);
// } else {
//   console.log(`${num2} is a negative number`);
// }

// if else if else
// let a = prompt("Lütfen bir sayı giriniz");
// if (a > 0) {
//   console.log(`${a} is a positive number`);
// } else if (a == 0) {
//   console.log(`${a} is zero`);
// } else if (a < 0) {
//   console.log(`${a} is a negative number `);
// } else {
//   console.log(`${a} is not a number`);
// }

// let weather = "sunny";
// if (weather === "rainy") {
//   console.log("You need a rain coat.");
// } else if (weather === "cloudy") {
//   console.log("It might be cold, you need a jacket.");
// } else if (weather === "sunny") {
//   console.log("Go out freely.");
// } else {
//   console.log("No need for rain coat.");
// }

//Switch - case kullanımı
let num = prompt("Enter number");
switch (true) {
  case num > 0:
    console.log("Number is positive");
    break;
  case num == 0:
    console.log("Number is zero");
    break;
  case num < 0:
    console.log("Number is negative");
    break;
  default:
    console.log("Entered value was not a number");
}

//Ternary Operator
let isRainning = true;
isRainning
  ? console.log("You need a rain coat")
  : console.log("No need for a rain coat");
