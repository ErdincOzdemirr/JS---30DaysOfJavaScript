const names = ["Erdinc", "Hava", "Ismail", "Hacer"];
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
