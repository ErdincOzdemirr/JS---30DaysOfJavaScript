const arr = Array();
console.log(arr);

let names = [];
console.log(names);

let names2 = ["Erdinç", "Hava", "Ismail", "Hacer", "Ezgi"];
console.log(names2);

const numbers = [0, 3, 13, 14, 24, 82, 56, 100]; //dsyı dizisi
console.log(numbers);

const fruits = ["banana", "orange", "mango", "lemon"]; //string dizisi
console.log(fruits);

console.log("Numbers:", numbers);
console.log("Number of numbers:", numbers.length);

const arr2 = ["Erdinc", 30, "Sakarya", { skills: ["HTML", "CSS", "JS"] }];
console.log(arr2);

let js = "JavaScript";
const charsInJavaScript = js.split("");
console.log(charsInJavaScript);

console.log("Erdinc".split(""));

let firstFruit = fruits[0];
console.log(firstFruit);

let lastIndex = fruits.length - 1;
lastFruit = fruits[lastIndex];
console.log(lastFruit);

const webTechs = [
  "HTML",

  "CSS",

  "JavaScript",

  "React",

  "Redux",

  "Node",

  "MongoDB",
];
console.log(webTechs);

let lastIndex2 = webTechs.length - 1;
lastWebTechs = webTechs[lastIndex2];
console.log(lastWebTechs);

const numbers3 = [1, 2, 3, 4, 5];
numbers3[0] = 10;
numbers3[4] = 20;
console.log(numbers3);

numbers3[numbers3.length - 1] = 30;
console.log(numbers3);

let names4 = Array(5).fill("<div>loader</div>");
console.log(names4);

const firstList = [1, 2, 3, 4];
const secondList = [5, 6, 7, 8];
const thirdList = firstList.concat(secondList, [9, 10, 11]);
console.log(thirdList);

let names5 = ["Erdinc", "Hava", "Ismail"];
console.log(names5.indexOf("Mehmet"));

const fruits3 = ["banana", "orange", "mango", "lemon"];
let index = fruits.indexOf(prompt("Meyveni seç"));
if (index === -1) {
  console.log("Bu meyve dizi içinde yok");
} else {
  console.log("Bu meyve dizi içinde var");
}

const names6 = ["Erdinç", "Mathias", "Elias", "Brook"];

console.log(names6.toString());

const names7 = ["Asabeneh", "Mathias", "Elias", "Brook"];

console.log(names7.join()); // Asabeneh,Mathias,Elias,Brook

console.log(names7.join("")); //AsabenehMathiasEliasBrook

console.log(names7.join(" ")); //Asabeneh Mathias Elias Brook

console.log(names7.join(", ")); //Asabeneh, Mathias, Elias, Brook

console.log(names7.join(" # ")); //Asabeneh # Mathias # Elias # Brook

const numbers4 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(numbers4.slice(4, 7));
console.log(numbers4.splice(0, 3, 11, 12, 14));
console.log(numbers4);
numbers4.push("erdinc");
console.log(numbers4);
let lastValue = numbers4.pop();
console.log(lastValue);
console.log(numbers4);
let lastValue2 = numbers4.pop();
console.log(lastValue2);
numbers4.shift();
console.log(numbers4);
numbers4.unshift("Ozdemir");
console.log(numbers4);

let ex = "erdinc".split("").reverse().join("");
console.log(ex);

const webTechs2 = [
  "HTML",

  "CSS",

  "JavaScript",

  "React",

  "Redux",

  "Node",

  "MongoDB",
];

webTechs2.sort();

console.log(webTechs2); // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

webTechs2.reverse(); // sortladıktan sonra reverse edebiliriz.

console.log(webTechs2); // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]

const arrayOfArray = [
  [1, 2, 3],
  [1, 2, 3],
];

console.log(arrayOfArray[0][1]); // [2]
