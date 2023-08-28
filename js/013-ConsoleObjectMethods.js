console.log("%d %s of JavaScript", 30, "Days");
// %d ile 1.parametredeki number alınır. %s ile 2.parametredeki string ifade alınır.
console.log(["erdinc", "ozdemir", "sakarya"]);
console.log({
  job: "engineer",
});
let age = 30;
console.log("ben %d yasindayim ve %d yilinda dogdum", age, 1993);

console.log(
  "%cDur! %cKimsinSen",
  "font-size: 50px; font-family: Arial; color: red; text-shadow: 0 0 10px blue;",
  "font-size: 100px; color: blue; text-shadow: 0 0 10px red;"
);

// %c ile console style eklenir.
// Çoklu kelimeye stil vermek için onun başına da %c ekleyip style devam eden parametrede girilir.

console.warn("This is a Warning!");
// console.warn konsolda uyarı oluşturur.

console.error("Sen naptın gardaş");
// console.error konsola hata kodu yazdırır.

let names = ["Erdinc", "Hava", "Ismail", "Hacer"];
console.table(names);
// console.table object ve ya array i tablo şeklinde konsola yazdırır.

const users = [
  {
    name: "Erdinc",
    title: "Programmer",
    country: "Turkey",
    city: "Istanbul",
    age: 30,
  },
  {
    name: "Eyob",
    title: "Teacher",
    country: "Sweden",
    city: "London",
    age: 25,
  },
  {
    name: "Asab",
    title: "Instructor",
    country: "Norway",
    city: "Oslo",
    age: 22,
  },
  {
    name: "Matias",
    title: "Developer",
    country: "Denmark",
    city: "Copenhagen",
    age: 28,
  },
];
console.table(users);

console.time("calculate 1m array");
console.log(new Array(10e6).fill("abc").map((value, index) => index));
console.timeEnd("calculate 1m array");

console.info("30 Days Of JavaScript challenge is trending on Github");
console.info("30 Days Of fullStack challenge might be released");
console.info("30 Days Of HTML and CSS challenge might be released");
// By Erdinc
