let firstName = "Erdinc";
let country = "Turkey";

let a = 4;
let b = 10;

// let mathOparator = a+=b //a = a+b

let mathOparator = (a -= b); //a =a-b
console.log(mathOparator);

console.log(3 > 2); // true, çünkü 3 2 den büyüktür
console.log(3 >= 2); // true, çünkü 3 2 den büyüktür
console.log(3 < 2); // false,  çünkü 3 2 den büyüktür
console.log(2 < 3); // true, çünkü 2 3 den küçüktür
console.log(2 <= 3); // true, çünkü 2 3 den küçüktür
console.log(3 == 2); // false, çünkü 3 2 ye eşit değildir
console.log(3 != 2); // true, çünkü 3 2 ye eşit değildir
console.log(3 == "3"); // true, sadece değeri karşılaştırıyor
console.log(3 === "3"); // false, hem değeri hemde veri türünü karşılaştırıyor o yüzden yanlış. Birisi int değeri birisi string değerinden ( Bu denklik operatörü )
console.log(3 !== "3"); // true, hem değeri hemde veri türünü karşılaştırıyor o yüzden doğru. (Bu denk değil operatörü)
console.log(3 != 3); // false, değeri karşılaştırıyor
console.log(3 !== 3); // false, hem değeri hem de veri türünü karşılaştırıyor
console.log(0 == false); // true, eşdeğer
console.log(0 === false); // false, tam olarak aynı değil
console.log(0 == ""); // true, eşdeğer
console.log(0 == " "); // true, eşdeğer
console.log(0 === ""); // false, tam olarak aynı değil
console.log(1 == true); // true, eşdeğer
console.log(1 === true); // false, tam olarak aynı değil
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(NaN == NaN); // false, eşit değil
console.log(NaN === NaN); // false
console.log(typeof NaN); // number

console.log("mango".length == "avocado".length); // false
console.log("mango".length != "avocado".length); // true
console.log("mango".length < "avocado".length); // true
console.log("milk".length == "meat".length); // true
console.log("milk".length != "meat".length); // false
console.log("tomato".length == "potato".length); // true
console.log("python".length > "dragon".length); // false

let isRaining = true;
isRaining
  ? console.log("You need a rain coat")
  : console.log("No Need for a rain coat");

let isRaining2 = false;
isRaining2
  ? console.log("You need a rain coat")
  : console.log("No Need for a rain coat");

// let sayi = prompt("Bir Sayı Giriniz", "Örnek: 5")
// let result = sayi * 2
// console.log(result)

// let isDelete = confirm("Silmek istediğinize emin misin?");
// console.log(isDelete ? "Silme işlemi başarılı" : "Silme işlemi iptal edildi");

// const date = new Date();
// console.log(date);
// date.getFullYear()


//Okunabilir Saat Göstergesi
const date = new Date();
let year = date.getFullYear(),
  month = date.getMonth(),
  day = date.getDate(),
  hour = date.getHours(),
  minute = date.getMinutes(),
  seconds = date.getSeconds();
  dayNumber = date.getDay()
let months = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
];
let days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
    "Pazar"
]

//   örnek time: 15 Ağustos 2023, Çarşamba, 21:21:21

let humanReadableDate = `${day} ${months[month]} ${year}, ${days[dayNumber]}, ${hour}:${minute}:${seconds} `;
console.log(humanReadableDate)