// By Erdinc Destructing Spread Rest
const numbers = [10, 12, 14];

const [, , number3] = numbers;
console.log(number3);
console.log(numbers[0]);

console.log(numbers[1]);

console.log[numbers[2]];
console.log(number3);

const names = ["Erdinc", "Brook", "David", "John"];
let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names;

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
  "java",
  "node.js",
  "angular",
];
const [frontEnd, backEnd, ...otherLanguages] = fullStack;

console.log(frontEnd);
console.log(backEnd);
console.log(otherLanguages);
