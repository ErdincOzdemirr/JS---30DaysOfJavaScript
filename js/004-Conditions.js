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
// let num = prompt("Enter number");
// switch (true) {
//   case num > 0:
//     console.log("Number is positive");
//     break;
//   case num == 0:
//     console.log("Number is zero");
//     break;
//   case num < 0:
//     console.log("Number is negative");
//     break;
//   default:
//     console.log("Entered value was not a number");
// }

// //Ternary Operator
// let isRainning = true;
// isRainning
//   ? console.log("You need a rain coat")
//   : console.log("No need for a rain coat");

// Exercise lvl1

// // 1.1
// let age = parseInt(prompt("Yaşınızı Giriniz"));
// if (age >= 18) {
//   console.log("Ehliyet alabilecek yaştasın");
// } else {
//   let yearsToWait = 18 - age;
//   console.log(`Ehliyet alabilmek için ${yearsToWait} yıl beklemelisin`);
// }

// // 1.2
// let myAge = parseInt(prompt("Yaşını Gir"));
// let yourAge = parseInt(prompt("Onun Yaşını Gir"));
// if (myAge > yourAge) {
//   let ageDifference1 = myAge - yourAge;
//   console.log(`Senden ${ageDifference1} yaş büyüğüm`);
// } else if (myAge < yourAge) {
//   let ageDifference2 = yourAge - myAge;
//   console.log(`Benden ${ageDifference2} yaş büyüksün`);
// } else if (myAge == yourAge) {
//   console.log("Aynı yaştayız");
// } else {
//   s;
//   console.log("error");
// }

// //  1.3
// let a = 4;
// let b = 3;
// if (a > b) {
//   console.log(`${a},${b}'den büyüktür.`);
// } else {
//   console.log(`${b},${a}'dan büyüktür.`);
// }

// // 1.4
// let numberMod = parseInt(prompt("Enter a number"));
// if (numberMod % 2 == 0) {
//   console.log("Sayı Çifttir.");
// } else {
//   console.log("Sayı Tektir.");
// }

// Exercise lvl2

// 2.1
let score = parseInt(prompt("Sınav sonucunuzu giriniz"));

switch (true) {
  case score >= 80 && score <= 100:
    console.log('grade = "A"');
    break;
  case score >= 70 && score < 80:
    console.log('grade = "B"');
    break;
  case score >= 60 && score < 70:
    console.log('grade = "C"');
    break;
  case score >= 50 && score < 60:
    console.log('grade = "D"');
    break;
  case score >= 0 && score < 50:
    console.log('grade = "F"');
    break;
  default:
    console.log("valid score");
}

// 2.2
let season = prompt("Mevsimi Girin");

switch (season) {
  case "Ocak":
  case "Şubat":
  case "Aralık":
    console.log("Kış Mevsimindesiniz");
    break;
  case "Mart":
  case "Nisan":
  case "Mayıs":
    console.log("Bahar Mevsimindesiniz");
    break;
  case "Haziran":
  case "Temmuz":
  case "Ağustos":
    console.log("Yaz mevsimindesiniz");
    break;
  case "Eylül":
  case "Ekim":
  case "Kasım":
    console.log("Sonbahar mevsimindesiniz");
    break;
  default:
    console.log("error");
    break;
}

// 2.3
let day = prompt("Bugün Haftanın Hangi Günü?");
switch (day.toLowerCase()) {
  case "cumartesi":
  case "pazar":
    console.log("Bugün haftasonu");
    break;
  case "pazartesi":
  case "salı":
  case "çarşamba":
  case "perşembe":
  case "cuma":
    console.log("Bugün haftaiçi");
    break;
  default:
    console.log("error");
    break;
}
