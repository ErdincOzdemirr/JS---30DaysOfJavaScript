// // For Döngüsünün yapısı
// // for(başlangıç_değeri, şart, arttırma/azaltma){
// // uygulamak istediğimiz kod//   }

// for (let i = 0; i <= 100; i++) {
//   console.log(i);
// }

// for (let i = 5; i >= 0; i--) {
//   console.log(`${i} * ${i} = ${i * i}`);
// }

// const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];

// for (let i = 0; i < countries.length; i++) {
//   console.log(countries[i].toUpperCase());
// }

// const numbersLine = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(numbersLine);
// let sum1 = 0;
// for (let i = 0; i < numbersLine.length; i++) {
//   sum1 = sum1 + numbersLine[i];
// }
// console.log("Toplam", sum1);

// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum = sum + numbers[i];
//   // daha pratik kullanım için, sum += numbers[i]
// }

// console.log(sum);

// const newArr = [];
// for (let i = 0; i < numbers.length; i++) {
//   newArr.push(numbers[i] ** 2);
// }
// console.log(newArr);

// let i = 0;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// // 0 1 2 3 4 5

// while (i < countries.length) {
//   console.log("isim", countries[i]);
//   i++;
// }

// do {
//   console.log("isim", countries[i]);
//   i++;
// } while (i < countries.length);

// for (let country of countries) {
//   if (country === "Norway") {
//     // console.log(`${country} bulundu.`);
//     // break;
//     continue;
//   }
//   console.log("Ulke Adı : ", country);
// }

// for (let i = 0; i <= 5; i++) {
//   if (i == 3) {
//     break;
//   }
//   console.log(i);
// }

// // 0 1 2

// exercise lvl 1
// const countries = [
//   "Albania",
//   "Bolivia",
//   "Canada",
//   "Denmark",
//   "Ethiopia",
//   "Finland",
//   "Germany",
//   "Hungary",
//   "Ireland",
//   "Japan",
//   "Kenya",
// ];

// const webTechs = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "React",
//   "Redux",
//   "Node",
//   "MongoDB",
// ];

// const mernStack = ["MongoDB", "Express", "React", "Node"];

// //   1.1

// for (let a = 0; a <= 10; a++) {
//   console.log(a);
// }
// // while loop
// let b = 0;
// while (b < 10) {
//   b++;
//   console.log(b);
// }

// // Do-While Loop
// let c = 0;
// do {
//   c++;
//   console.log(c);
// } while (c < 10);

// // 1.2
// for (let i = 10; i>0; i--) {
//   console.log(i)

//   let j = 10;
//   do {
//     j--;
//     console.log(j)
//   } while (j>0)

// let k = 10;
// while (k > 0) {
//   k--;
//   console.log(k);
// }

// 1.3
// let n = 100;
// for (let i = 0; i < n; i++) {
//   console.log(i);
// }

// // 1.4
// let string = "";
// for (let i = 0; i < 7; i++) {
//   string += "#";
//   console.log(string);
// }

// // 1.5
// for (let i = 0; i <= 10; i++) {
//   console.log(`${i} * ${i} = ${i * i}`);
// }
// // 1.6
// for (let i = 0; i <= 10; i++) {
//   console.log(`${i} ${i ** 2} ${i ** 3}`);
// }

// // 1.7
// for (let i = 0; i < 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }
// // 1.8
// for (let i = 0; i < 100; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// for (let i = 0; i < 100; i++) {
//   if (i % 2 == 1) {
//       console.log(i);
//   }
// }

// for (let number = 2; number <= 100; number++) {
//   let isPrime = true;

//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   if (isPrime) {
//     console.log(number);
//   }
// }

// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//   sum += i;
// }
// console.log(`0'dan 100'a tüm sayıların toplamı ${sum}`)

// let evenSum = 0;
// let oddSum = 0;

// for (let x = 0; x <= 100; x++) {
//   if (x % 2 === 0) {
//     evenSum += x; // Çift sayıları toplama ekler
//   } else {
//     oddSum += x; // Tek sayıları toplama ekler
//   }
// }
// console.log("Çift sayıların toplamı", evenSum);
// console.log("Tek sayıların toplamı", oddSum);

// Exercise lvl2

// 2.1
// const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
// const idLength = 10; // İd uzunluğunu belirtin
// let randomId = "";

// for (let i = 0; i < idLength; i++) {
//   const randomIndex = Math.floor(Math.random() * characters.length);
//   randomId += characters[randomIndex];
// }

// console.log("Rastgele ID:", randomId);

// 2.2
// const hexCharacters = "0123456789ABCDEF";
// const hexLength = 6;
// let randomHex = "#";
// for (let i = 0; i < hexLength; i++) {
//   const randomIndex = Math.floor(Math.random() * hexCharacters.length);
//   randomHex += hexCharacters[randomIndex];
// }
// console.log("Rastgele Hexadecimal Sayı : ", randomHex);

// 2.3
// const min = 0;
// const max = 255;
// const rgbValues = [];

// for (let i = 0; i < 3; i++) {
//   const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
//   rgbValues.push(randomValue);
// }

// const randomRGB = `rgb(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]})`;

// console.log("Rastgele RGB Renk:", randomRGB);

// 2.4
// const countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];
// const randomCountries = [];
// const numRandomCountries = 11; // Kaç adet rastgele ülke istediğinizi belirtebilirsiniz

// while (randomCountries.length < numRandomCountries) {
//   const randomIndex = Math.floor(Math.random() * countries.length);
//   const randomCountry = countries[randomIndex];

//   if (!randomCountries.includes(randomCountry)) {
//     randomCountries.push(randomCountry);
//   }
// }

// console.log("Rastgele Ülkeler:", randomCountries);
// 2.5
// for (let i = 0; i < countries.length; i++) {
//   countries[i] = countries[i].length;
// }
// console.log(countries);
// 2.6
// const countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];
// const formattedCountries = [];

// for (let i = 0; i < countries.length; i++) {
//   const country = countries[i];
//   const abbreviation = country.substring(0, 3);
//   const length = country.length;
//   const formattedCountry = [country.charAt(0) + country.slice(1).toLowerCase(), abbreviation, length];
//   formattedCountries.push(formattedCountry);
// }

// console.log(formattedCountries);

// 2.7
// const countries = [
//   "Albania",
//   "Bolivia",
//   "Canada",
//   "Denmark",
//   "Ethiopia",
//   "Finland",
//   "Germany",
//   "Hungary",
//   "Ireland",
//   "Japan",
//   "Kenya",
// ];

// const countries = [
//   "ALBANIA",
//   "BOLIVIA",
//   "CANADA",
//   "DENMARK",
//   "ETHIOPIA",
//   "FINLAND",
//   "GERMANY",
//   "HUNGARY",
//   "IRELAND",
//   "JAPAN",
//   "KENYA",
// ];
// const countriesWithLand = [];

// for (let i = 0; i < countries.length; i++) {
//   const country = countries[i];

//   if (country.includes("LA")) {
//     countriesWithLand.push(country);
//   }
// }
// console.log("Ülkelerde 'LA' İçerenler:", countriesWithLand);

// 2.9
// const countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];
// let longestCountry = "";

// for (let i = 0; i < countries.length; i++) {
//   const country = countries[i];

//   if (country.length === 5) {
//     longestCountry.push(country);

//   }
// }

// console.log("En Fazla Karakter İçeren Ülke:", longestCountry);

// 2.10
// const countries = [
//   "ALBANIA",
//   "BOLIVIA",
//   "CANADA",
//   "DENMARK",
//   "ETHIOPIA",
//   "FINLAND",
//   "GERMANY",
//   "HUNGARY",
//   "IRELAND",
//   "JAPAN",
//   "KENYA",
// ];
// const fiveCharCountries = [];

// for (let i = 0; i < countries.length; i++) {
//   const country = countries[i];

//   if (country.length === 5) {
//     fiveCharCountries.push(country);
//   }
// }

// console.log("Beş Karakter İçeren Ülkeler:", fiveCharCountries);

// Exercise lvl 3
