// const fonksiyon = (number) => number ** 2;

// function cube(cb, number) {
//   return cb(number) * number;
// }

// console.log(cube(fonksiyon, 3));

// const a = (s1) => {
//   const b = (s2) => {
//     const c = (s3) => {
//       return s1 + s2 + s3;
//     };
//     return c;
//   };
//   return b;
// };
// console.log(a(5)(10)(15));

// const numbers = [1, 3, 5, 7, 9];
// let total = 0;
// let calculate = (number) => (total += number);
// numbers.forEach(calculate);
// console.log(total);

// function sayHello() {
//   console.log("hello");
// }
// const interval = setInterval(sayHello, 1000);
// //clearInterval

// const timeout = setTimeout(() => {
//     clearInterval(interval)
//     console.log("interval işlemi iptal edildi")
// }, 5000 )

// setTimeout(() => {
//     clearTimeout(timeout)
//     console.log("Timeout iptal, İnterval işlemi devam")
// }, 3000)

// let sum = 0;
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(num => sum += num);
// console.log(sum);

// const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
// countries.forEach((element) => console.log(element.toUpperCase()))

const numbers = [1, 2, 3, 4, 5];
const numbersSquare = numbers.map((num) => num * num);

console.log(numbersSquare);

const names = ["ErdInc", "Mathias", "Elias", "Brook"];
const namesToUpperCase = names.map((name) => name.toUpperCase());
console.log(namesToUpperCase);

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
const countriesContainingLand = countries.filter((country) =>
  country.includes("land")
);
console.log(countriesContainingLand);

const countriesHaveFiveLetters = countries.filter(
  (country) => country.length === 5
);
console.log(countriesHaveFiveLetters);

const numbers2 = [9.81, 3.14, 100, 37];
console.log(numbers2.sort());

numbers2.sort(function (a, b) {
  return a - b;
});
console.log(numbers2);

numbers2.sort(function (a, b) {
  return b - a;
});
console.log(numbers2);

let total = 0;
numbers.forEach((number) => (total += number));
console.log(total);

let total2 = numbers.reduce(function (acc, number) {
  return acc + number;
}, 5);
console.log(total2);


