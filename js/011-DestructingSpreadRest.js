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

const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
  ["Turkey", "Ankara"],
];
for (const [country, capital] of countries) {
  console.log(`Ülke: ${country} - Başkent: ${capital}`);
}

const user = {
  name: "Erdinc",
  surname: "Ozdemir",
  age: 31,
  myCountry: "Turkey",
  pets: {
    cats: ["asil"],
    dogs: ["Karabas"],
  },
  skills: ["HTML", "CSS", "JS", "JAVA"],
  hobbies: ["swim", "sailing"],
};

const { surname: soyad } = user;
console.log(user);

// Destructuring yok
const rect = {
  width: 20,
  height: 10,
};
const calculatePerimeter = (rectangle) => {
  return 2 * (rectangle.width + rectangle.height);
};

console.log(calculatePerimeter(rect)); // 60
//Destructuring var

function multiply(numbers5) {
  return numbers5[0] * numbers5[1];
}

const numbers5 = [10, 10];

console.log(multiply(numbers5));

const {
  pets: { cats: kediler, dogs: köpekler },
} = user;
console.log(kediler);

function showUserInfo({ name, surname, age, pets: { cats, dogs }, ...others }) {
  console.log("Others", others);
  return `Merhaba, ben ${name} ${surname}, ${age} yaşındayım. ${cats.length} kedim ve ${dogs.length} köpeğim var.`;
}

console.log(showUserInfo(user));

const numbers6 = [1, 2, 3, 4];
const numbers7 = [...numbers6];
console.log(numbers6);
numbers7.push(10);
console.log(numbers6);
