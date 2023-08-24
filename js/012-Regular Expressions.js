// regex 1

// 1- regex constructor
let str = "Ben 30 yaşındayım ve 1993 yilinda dogdum";
let userName = "Erdinc Ozdemir";
let pattern = "love";
let flag = "gi";
let regEx = new RegExp(pattern, flag);

let regEX2 = /love/gi;
console.log(regEX2);

let word = /salak/gi;
let comment = prompt("yaz");
if (word.test(comment)) {
  alert("Hayır sen salaksin");
}
