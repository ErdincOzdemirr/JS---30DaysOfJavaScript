let names = new Set(["Erdinc", "Hava", "Ismail", "Hacer"]);

for (let name of names) {
  console.log("Ad", name);
}

names.forEach((name) => console.log(name));

[...names].map((name) => console.log(name));

names.add("ezgi");
names.add("ayse");
console.log(names);

