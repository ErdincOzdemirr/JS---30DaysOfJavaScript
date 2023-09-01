// by Erdinç Özdemir
localStorage.setItem("name", "Erdinc");

console.log(localStorage);
// console.log(localStorage.name); bu kullanılabilir ama genelde get item kullanılır
console.log(localStorage.getItem("name"));
console.log(localStorage.key(0)); //localStorage deki 0.keyi gösterir.
localStorage.removeItem("name"); //removeitem local storage deki bilgiyi siler.

console.log(localStorage);

const names = ["erdinc", "hava", "ezgi"];
localStorage.setItem("names", names);
console.log(localStorage);

const user = {
  name: "ismail",
  surname: "sevgili",
};
localStorage.setItem("user", JSON.stringify(user));
console.log(localStorage);
console.log(localStorage.user);
// user objesi konsol da object diye görünür. Çünkü string değildir. Bu nedenle JSON.stringfy() ile string bir ifadeye döndürülür. Çünkü LocalStorage ve sessionStorage string olarak key value tutar

console.log(typeof localStorage.user);

console.log(JSON.parse(localStorage.getItem('user')));

// Alışveriş sepeti örneği