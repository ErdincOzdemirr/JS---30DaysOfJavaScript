const names = ["Erdinc", "Hava", "Ismail", "Hacer", "Erdinc", "Hava"];
let namesSet = new Set();

// for (let name of names) {
//   console.log("Ad", name);
// }

// names.forEach((name) => console.log(name));

// [...names].map((name) => console.log(name));

// names.add("ezgi");
// names.add("ayse");
// console.log(names);

for (let name of names) {
  namesSet.add(name);
}
namesSet.add("Ahmet");
namesSet.delete("Ahmet");
console.log(namesSet.has("Ahmet"));
namesSet.clear();
console.log(namesSet.has("Erdinc"));

console.log(names);
console.log(new Set(names));
console.log(...new Set(names));

const languages = [
  "English",
  "Finnish",
  "English",
  "French",
  "Spanish",
  "English",
  "French",
];
const langSet = new Set(languages);

console.log(langSet);
console.log(langSet.size);

const counts = [];
const count = {};
for (let l of langSet) {
  const filteredLang = languages.filter((lng) => lng === l);
  console.log(filteredLang);
  counts.push({ lang: l, count: filteredLang.length });
}
console.log(counts);

const numbers2 = [5, 5, 5, 5, 2, 2, 3, 3, 4, 4, 8];
const setOfNumbers = new Set(numbers2);
console.log(setOfNumbers);

let a = [1, 2, 3, 4, 5];
let b = [6, 7, 7, 8, 9];

let c = [...a, ...b];

let C = new Set(c);
console.log(C);


