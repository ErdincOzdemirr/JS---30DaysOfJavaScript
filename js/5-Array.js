// const arr = Array();
// console.log(arr);

// let names = [];
// console.log(names);

// let names2 = ["Erdinç", "Hava", "Ismail", "Hacer", "Ezgi"];
// console.log(names2);

// const numbers = [0, 3, 13, 14, 24, 82, 56, 100]; //dsyı dizisi
// console.log(numbers);

// const fruits = ["banana", "orange", "mango", "lemon"]; //string dizisi
// console.log(fruits);

// console.log("Numbers:", numbers);
// console.log("Number of numbers:", numbers.length);

// const arr2 = ["Erdinc", 30, "Sakarya", { skills: ["HTML", "CSS", "JS"] }];
// console.log(arr2);

// let js = "JavaScript";
// const charsInJavaScript = js.split("");
// console.log(charsInJavaScript);

// console.log("Erdinc".split(""));

// let firstFruit = fruits[0];
// console.log(firstFruit);

// let lastIndex = fruits.length - 1;
// lastFruit = fruits[lastIndex];
// console.log(lastFruit);

// const webTechs = [
//   "HTML",

//   "CSS",

//   "JavaScript",

//   "React",

//   "Redux",

//   "Node",

//   "MongoDB",
// ];
// console.log(webTechs);

// let lastIndex2 = webTechs.length - 1;
// lastWebTechs = webTechs[lastIndex2];
// console.log(lastWebTechs);

// const numbers3 = [1, 2, 3, 4, 5];
// numbers3[0] = 10;
// numbers3[4] = 20;
// console.log(numbers3);

// numbers3[numbers3.length - 1] = 30;
// console.log(numbers3);

// let names4 = Array(5).fill("<div>loader</div>");
// console.log(names4);

// const firstList = [1, 2, 3, 4];
// const secondList = [5, 6, 7, 8];
// const thirdList = firstList.concat(secondList, [9, 10, 11]);
// console.log(thirdList);

// let names5 = ["Erdinc", "Hava", "Ismail"];
// console.log(names5.indexOf("Mehmet"));

// const fruits3 = ["banana", "orange", "mango", "lemon"];
// let index = fruits.indexOf(prompt("Meyveni seç"));
// if (index === -1) {
//   console.log("Bu meyve dizi içinde yok");
// } else {
//   console.log("Bu meyve dizi içinde var");
// }

// const names6 = ["Erdinç", "Mathias", "Elias", "Brook"];

// console.log(names6.toString());

// const names7 = ["Asabeneh", "Mathias", "Elias", "Brook"];

// console.log(names7.join()); // Asabeneh,Mathias,Elias,Brook

// console.log(names7.join("")); //AsabenehMathiasEliasBrook

// console.log(names7.join(" ")); //Asabeneh Mathias Elias Brook

// console.log(names7.join(", ")); //Asabeneh, Mathias, Elias, Brook

// console.log(names7.join(" # ")); //Asabeneh # Mathias # Elias # Brook

// const numbers4 = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(numbers4.slice(4, 7));
// console.log(numbers4.splice(0, 3, 11, 12, 14));
// console.log(numbers4);
// numbers4.push("erdinc");
// console.log(numbers4);
// let lastValue = numbers4.pop();
// console.log(lastValue);
// console.log(numbers4);
// let lastValue2 = numbers4.pop();
// console.log(lastValue2);
// numbers4.shift();
// console.log(numbers4);
// numbers4.unshift("Ozdemir");
// console.log(numbers4);

// let ex = "erdinc".split("").reverse().join("");
// console.log(ex);

// const webTechs2 = [
//   "HTML",

//   "CSS",

//   "JavaScript",

//   "React",

//   "Redux",

//   "Node",

//   "MongoDB",
// ];

// webTechs2.sort();

// console.log(webTechs2); // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

// webTechs2.reverse(); // sortladıktan sonra reverse edebiliriz.

// console.log(webTechs2); // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]

// const arrayOfArray = [
//   [1, 2, 3],
//   [1, 2, 3],
// ];

// console.log(arrayOfArray[0][1]); // [2]

// EXERCISE LVL1
// 1.1
// const arrays = [];

// // 1.2
// const arrays2 = [1, 2, 3, 4, 5, 6, 7];
// console.log(arrays2);

// // 1.3
// console.log(arrays2.length);

// // 1.4
// let firstValue = arrays2[0];
// let midValue = arrays2[(arrays2.length - 1) / 2];
// console.log(midValue);
// let lastValue = arrays2[arrays2.length - 1];
// console.log(lastValue);

// // 1.5
// let mixedDataTypes = ["Erdinc", 30, true, null, "1", [7, 8, 9]];
// console.log("mixedDataTypes Uzunluk = " + mixedDataTypes.length);

// // 1.6
// let sirket = [
//   "Facebook",
//   "Google",
//   "Microsoft",
//   "Apple",
//   "IBM",
//   "Oracle",
//   "Amazon",
// ];

// 1.7
// console.log(sirket);

// // 1.8
// console.log(sirket.length);

// // 1.9
// console.log(
//   sirket[0],
//   sirket[(sirket.length - 1) / 2],
//   sirket[sirket.length - 1]
// );

// // 1.10
// console.log(sirket.splice(""));

// 1.11
// let sirket = [
//   "Facebook",
//   "Google",
//   "Microsoft",
//   "Apple",
//   "IBM",
//   "Oracle",
//   "Amazon",
// ];
// console.log(
//   sirket[0].toUpperCase(),
//   sirket[1].toUpperCase(),
//   sirket[2].toUpperCase(),
//   sirket[3].toUpperCase(),
//   sirket[4].toUpperCase(),
//   sirket[5].toUpperCase(),
//   sirket[6].toUpperCase()
// );

// 1.12
// let sentence = [
//   "Facebook",
//   "Google",
//   "Microsoft",
//   "Apple",
//   "IBM",
//   "Oracle",
//   "Amazon",
// ];
// let split = sentence.join(" ");
// console.log(split);

// // 1.13

// let index = sentence.indexOf("Twitter");
// console.log(index);

// 'o' harfi sayısı 2 veya daha fazla olan şirketleri filtrele
//   let filteredCompanies = [];

//   for (let i = 0; i < sentence.length; i++) {
//     let count = 0;
//     for (let j = 0; j < sentence[i].length; j++) {
//       if (sentence[i][j] === 'o') {
//         count++;
//       }
//     }
//     if (count >= 2) {
//       filteredCompanies.push(sentence[i]);
//     }
//   }

//   console.log(filteredCompanies);

// 1.15
// console.log(sentence.sort());

// // 1.16
// console.log(sentence.reverse());

// // 1.17
// console.log(sentence.slice(0, 3));

// // 1.18
// console.log(sentence.slice(4, 7));

// // 1.19
// console.log(sentence.slice(3, 4));

// // 1.20
// console.log(sentence.shift());

// 1.21
// const middleRemove = sentence.splice(3, 1);
// console.log(sentence);

// // 1.22
// console.log(sentence.pop());
// console.log(sentence);

// // 1.23
// let deleteAllItems = sentence.splice();
// console.log(deleteAllItems);

//Exercise lvl2

// let text =
//   "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
// console.log(text);

// let replace = text.replace(/[^a-zA-Z0-9 ]/gi, "");
// console.log(replace);

// let split = replace.split(" ");
// console.log(split);
// console.log(split.length);

// const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
// console.log(shoppingCart);

// let meatAdd = shoppingCart.unshift("Meat");
// console.log(shoppingCart);

// let sugarAdd = shoppingCart.push("Sugar");
// console.log(shoppingCart);

// let honeyRemove = shoppingCart.splice(4, 1);
// console.log(shoppingCart);

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
// let controlCountry = countries.includes("Ethiopia");
// console.log(controlCountry);
// console.log(countries[4]);

// const webTechs = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "React",
//   "Redux",
//   "Node",
//   "MongoDB",
// ];
// console.log(webTechs);

// let searchSass = webTechs.includes("Sass");
// console.log(searchSass);
// let addSass = webTechs.push("Sass");
// console.log(webTechs);

// let frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
// let backEnd = ["Node", "Express", "MongoDB"];

// let fullStackDev = frontEnd.concat(backEnd);
// console.log(fullStackDev);

// Exercise lvl3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let ageLine = ages.sort();
console.log(ageLine);
console.log(ageLine.length);
let arrayAge = ageLine.splice("");
console.log(arrayAge[0], arrayAge[9]);
