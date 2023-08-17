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
