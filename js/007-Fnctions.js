// let msg = "Hello World";
// function sayHello() {
//   console.log(msg);
// }
// sayHello();

// function square() {
//   let num = prompt("Sayı Giriniz");
//   let square = num * num;
//   console.log(square);
// }
// // square();
// function printFullName() {
//   let firstName = "erdinc";
//   let lastName = "özdemir";
//   let space = " ";
//   let fullName = firstName + space + lastName;
//   return fullName;
// }
// let name = printFullName();
// console.log(name);

// function addTwoNumbers() {
//   let numOne = 2;
//   let numTwo = 3;
//   let total = numOne + numTwo;
//   return total;
// }
// console.log(addTwoNumbers());

// function multiply(num1, num2) {
//   return num1 * num2;
// }
// console.log(multiply(5, 3));

// function areaOfCircle(r) {
//   let area = Math.PI * r * r;
//   return area;
// }
// console.log(areaOfCircle(4));

// function sumArrayValues(array) {
//   let total = 0;
//   for (let i = 0; i < array.length; i++) {
//     total += array[i];
//   }
//   return total;
// }
// let dizi = [2, 4, 6, 8, 10, 70];

// console.log("Toplam ", sumArrayValues(dizi));

// function sum() {
//   let total = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     total += arguments[i];
//   }
//   return total;
// }
// console.log(sum(2, 5, 7, 8, 11, 13));

// const sayHello1 = function (name1) {
//   return `Hello ${name1}`;
// };
// console.log(sayHello1("Erdinc"));

// (function () {
//   console.log("He yo!");
// })();

// // Normal Function
// function hello(name3) {
//   return `Hello ${name3}`;
// }
// // Arrow Function
// const hello2 = (name4) => {
//   return `Hello ${name4}`;
// };
// console.log(hello("erdinç"));
// console.log(hello2("Özdemir"));

// function square(n) {
//   return n * n;
// }

// console.log(square(2)); // 4

// const square2 = (n) => {
//   return n * n;
// };

// console.log(square2(2)); // -> 4

// // kod bloğumuzda sadece bir satır kod varsa bu fonksiyon şu şekilde yazılabilir.
// const square3 = (n) => n * n; // -> 4
// console.log(square3(5));

// const changeToUpperCase = (arr) => {
//   const newArr = [];
//   for (const element of arr) {
//     newArr.push(element.toUpperCase());
//   }
//   return newArr;
// };

// const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
// console.log(changeToUpperCase(countries));

// const sumAllNums = (...args) => {
//   let sum = 0;
//   for (const element of args) {
//     sum += element;
//   }
//   return sum;
// };
// console.log(sumAllNums(1, 2, 3, 4, 54, 65));

// function multiply(num1, num2 = 3) {
//   return num1 * num2;
// }
// console.log(multiply(10));

// const calculateAge = (birthyear, currentyear = 2023) => currentyear - birthyear;
// console.log("Age", calculateAge(1993));

// Exercise lvl1
// 1.1
// function fullName() {
//   let name = "Erdinc";
//   let lastName = "Ozdemir";
//   let fullName = `${name} ${lastName}`;
//   console.log(fullName);
// }
// fullName();
// // 1.2
// function fullName2(firstName2, lastName2) {
//   return `${firstName2} ${lastName2}`;
// }
// console.log(fullName2("Erdinc", "Ozdemir"));

// // 1.3
// function addTwoNumbers(num1, num2) {
//   let sum = num1 + num2;
//   console.log(sum);
// }
// addTwoNumbers(3, 5);

// // 1.4
// function areaOfRectangle(length, width) {
//   let area = length * width;
//   return area;
// }
// console.log(areaOfRectangle(3, 5));

// // 1.5
// function perimeterOfRectangle(length2, width2) {
//   let perimeter = 2 * (length2 + width2);
//   return perimeter;
// }
// console.log(perimeterOfRectangle(4, 8));

// // 1.6
// function volumeOfRectangle (length3, width3, height3) {
//     let volume = length3 * width3 * height3
//     return volume
// }
// console.log(volumeOfRectangle(4,5,6))
// function speedYourCar (distance, time) {
//     let speed = distance / time
//     return speed
// }
// console.log(speedYourCar(20,5))

// // bmı value
// function calculateBMI(weightKg, heightM) {
//     if (weightKg <= 0 || heightM <= 0) {
//       return "Invalid input. Weight and height must be positive values.";
//     }

//     const bmi = weightKg / (heightM * heightM);

//     if (bmi < 18.5) {
//       return "Underweight";
//     } else if (bmi >= 18.5 && bmi < 25) {
//       return "Normal weight";
//     } else if (bmi >= 25 && bmi < 30) {
//       return "Overweight";
//     } else {
//       return "Obese";
//     }
//   }

//   // Example usage
//   const weight = prompt("Kilonuzu giriniz")// in kg
//   const height = prompt("Boyunuzu m olarak giriniz"); // in meters

//   const bmiResult = calculateBMI(weight, height);
//   console.log(`BMI: ${bmiResult}`);

// Exercise lvl2

// 2.1
// function solveLinEquation(a, b, c) {
//   if (a === 0 && b === 0) {
//     return "Geçersiz denklem: a ve b sıfır olamaz.";
//   }

//   if (a === 0) {
//     return "Denklemin çözümü: y = " + -c / b;
//   }

//   if (b === 0) {
//     return "Denklemin çözümü: x = " + -c / a;
//   }

//   return "Denklemin çözümü: " + -c / a + "x + " + -c / b + "y = 0";
// }

// // Örnek kullanım
// const aCoefficient = 2;
// const bCoefficient = 3;
// const cConstant = -6;

// const solution = solveLinEquation(aCoefficient, bCoefficient, cConstant);
// console.log(solution);

// // 2.3
// function printArray(humanName) {
//   let names = ["Erdinc", "Melih", "Selim", "Harun"];
//   names.forEach((element) => {
//     console.log(element);
//   });
//   return humanName;
// }
// printArray();

// // 2.4
// function showDateTime() {
//   let time = new Date();
//   let date = String(time.getDate()).padStart(2, 0);
//   let mounth = String(time.getMonth()).padStart(2, 0);
//   let year = time.getFullYear();
//   let hours = time.getHours();
//   let minute = String(time.getMinutes()).padStart(2, 0);
//   let times = `${date}/${mounth}/${year} ${hours}:${minute}`;
//   return times;
// }
// console.log(showDateTime());

// // 2.5
// function swapValues(x, y) {
//   return `x=${y}, y=${x}`;
// }
// console.log(swapValues(4, 7));

// // 2.6
// let value = ["Erdinc", "Hava", "Ismail", "Hacer", "Ezgi"];
// function reverseArray2(arr) {
//   let newArray2 = [];
//   for (let i = value.length - 1; i >= 0; i--) {
//     newArray2.push(arr[i]);
//   }
//   return newArray2;
// }
// console.log(reverseArray2(value));

// // 2.7
// function capitalizeArray(word) {
//   let newArray3 = [];
//   for (let i = 0; i < value.length; i++) {
//     word[i] = value[i].toUpperCase();
//     newArray3.push(word[i]);
//   }
//   return word;
// }

// console.log(capitalizeArray(value));

// //  2.8
// function addItem(arr) {
//   let result = [arr];
//   return result;
// }
// console.log(addItem("html", "css", "js", "REact"));

// // 2.9
// let array = ["A", "B", "C", "D"];
// removeItem = (index) => {
//   array.splice(index, 1);
//   return array;
// };
// console.log(removeItem(array));

// // 2.10
// function sumOfNumbers() {
//   let sumOfNumbers = 0;
//   [...arguments].forEach((number) => (sumOfNumbers += number));

//   return sumOfNumbers;
// }
// console.log(sumOfNumbers(25, 15, 25, 15, 25));

// // 2.11
// function sumofOdds() {
//   let sumOfNumber = 0;
//   [...arguments].forEach((oddsNumber) => {
//     if (oddsNumber % 2 !== 0) return;
//     sumOfNumber += oddsNumber;
//   });
//   return sumOfNumber;
// }
// console.log(sumofOdds(2, 3, 4, 5, 6, 79));

// // 2.12
// function sumOfEven() {
//   let evenOfNumber = 0;
//   [...arguments].forEach((evenNumber) => {
//     if (evenNumber % 2 !== 0) return;
//     evenOfNumber += evenNumber;
//   });
//   return evenOfNumber;
// }
// console.log(sumOfEven(2, 3, 6, 8));

// // 2.13
// function evensAndOdds(number) {
//   let odd = 0;
//   let even = 0;
//   for (let i = 0; i <= number; i++) {
//     if (i % 2 == 0) {
//       even++;
//     } else {
//       odd++;
//     }
//   }
//   return `The number of odds are ${odd}. The number of evens are ${even}. `;
// }
// console.log(evensAndOdds(50));

// // 2.14
// function sumOfNumbers() {
//   let sumOfNumbers = 0;
//   [...arguments].forEach((number) => (sumOfNumbers += number));

//   return sumOfNumbers;
// }
// console.log(sumOfNumbers(1, 2, 3));

// // 2.15
// function randomUserIp() {
//   let a = Math.floor(Math.random() * 255);
//   let b = Math.floor(Math.random() * 255);
//   let c = Math.floor(Math.random() * 255);
//   let d = Math.floor(Math.random() * 255);
//   return `${a}.${b}.${c}.${d}`;
// }
// console.log(randomUserIp());

// // 2.16

// function randomMacAddress() {
//   let arr = [];
//   let length = "0123456789ABCDEF";

//   for (let i = 0; i <= 6; i++) {
//     let firstBit = Math.floor(Math.random() * 16);
//     let lastBit = Math.floor(Math.random() * 16);
//     arr.push(length[firstBit] + length[lastBit]);
//   }
//   return arr.join(":");
// }

// console.log(randomMacAddress());

// // 2.17
// function randomHexaNumberGenerator() {
//   let length = "0123456789ABCDEF";
//   let hex = "#";

//   for (let i = 0; i <= 6; i++) {
//     hex += length[Math.floor(Math.random() * 16)];
//   }

//   return hex;
// }

// console.log(randomHexaNumberGenerator());

// // 2.18
// function userIdGenerator(length) {
//   let id = "";
//   let character =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   for (let i = 0; i < length; i++) {
//     id += character.charAt(Math.floor(Math.random() * character.length));
//   }

//   return id;
// }

// console.log(userIdGenerator(7));

// Exercise lvl3