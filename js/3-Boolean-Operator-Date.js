// let firstName = "Erdinc";
// let country = "Turkey";

// let a = 4;
// let b = 10;

// let mathOparator = a+=b //a = a+b

// let mathOparator = (a -= b); //a =a-b
// console.log(mathOparator);

// console.log(3 > 2); // true, çünkü 3 2 den büyüktür
// console.log(3 >= 2); // true, çünkü 3 2 den büyüktür
// console.log(3 < 2); // false,  çünkü 3 2 den büyüktür
// console.log(2 < 3); // true, çünkü 2 3 den küçüktür
// console.log(2 <= 3); // true, çünkü 2 3 den küçüktür
// console.log(3 == 2); // false, çünkü 3 2 ye eşit değildir
// console.log(3 != 2); // true, çünkü 3 2 ye eşit değildir
// console.log(3 == "3"); // true, sadece değeri karşılaştırıyor
// console.log(3 === "3"); // false, hem değeri hemde veri türünü karşılaştırıyor o yüzden yanlış. Birisi int değeri birisi string değerinden ( Bu denklik operatörü )
// console.log(3 !== "3"); // true, hem değeri hemde veri türünü karşılaştırıyor o yüzden doğru. (Bu denk değil operatörü)
// console.log(3 != 3); // false, değeri karşılaştırıyor
// console.log(3 !== 3); // false, hem değeri hem de veri türünü karşılaştırıyor
// console.log(0 == false); // true, eşdeğer
// console.log(0 === false); // false, tam olarak aynı değil
// console.log(0 == ""); // true, eşdeğer
// console.log(0 == " "); // true, eşdeğer
// console.log(0 === ""); // false, tam olarak aynı değil
// console.log(1 == true); // true, eşdeğer
// console.log(1 === true); // false, tam olarak aynı değil
// console.log(undefined == null); // true
// console.log(undefined === null); // false
// console.log(NaN == NaN); // false, eşit değil
// console.log(NaN === NaN); // false
// console.log(typeof NaN); // number

// console.log("mango".length == "avocado".length); // false
// console.log("mango".length != "avocado".length); // true
// console.log("mango".length < "avocado".length); // true
// console.log("milk".length == "meat".length); // true
// console.log("milk".length != "meat".length); // false
// console.log("tomato".length == "potato".length); // true
// console.log("python".length > "dragon".length); // false

// let isRaining = true;
// isRaining
//   ? console.log("You need a rain coat")
//   : console.log("No Need for a rain coat");

// let isRaining2 = false;
// isRaining2
//   ? console.log("You need a rain coat")
//   : console.log("No Need for a rain coat");

// let sayi = prompt("Bir Sayı Giriniz", "Örnek: 5")
// let result = sayi * 2
// console.log(result)

// let isDelete = confirm("Silmek istediğinize emin misin?");
// console.log(isDelete ? "Silme işlemi başarılı" : "Silme işlemi iptal edildi");

// const date = new Date();
// console.log(date);
// date.getFullYear()

//Okunabilir Saat Göstergesi
// const date = new Date();
// let year = date.getFullYear(),
//   month = date.getMonth(),
//   day = date.getDate(),
//   hour = date.getHours(),
//   minute = date.getMinutes(),
//   seconds = date.getSeconds();
//   dayNumber = date.getDay()
// let months = [
//   "Ocak",
//   "Şubat",
//   "Mart",
//   "Nisan",
//   "Mayıs",
//   "Haziran",
//   "Temmuz",
//   "Ağustos",
//   "Eylül",
//   "Ekim",
//   "Kasım",
//   "Aralık",
// ];
// let days = [
//     "Pazar",
//     "Pazartesi",
//     "Salı",
//     "Çarşamba",
//     "Perşembe",
//     "Cuma",
//     "Cumartesi",
//     "Pazar"
// ]

//   örnek time: 15 Ağustos 2023, Çarşamba, 21:21:21

// let humanReadableDate = `${day} ${months[month]} ${year}, ${days[dayNumber]}, ${hour}:${minute}:${seconds} `;
// console.log(humanReadableDate)

// Exercise Lvl 1
// 1.1
// let firstName = "Erdinc"
// let lastName = "Ozdemir"
// let country = "Turkey"
// let city = "Istanbul"
// let age = "31"
// let time = new Date();
// let year = time.getFullYear();

// console.log(typeof firstName);
// console.log(typeof lastName);
// console.log(typeof country);
// console.log(typeof city);
// console.log(typeof age);
// console.log(typeof time);
// console.log(typeof year);

// 1.2
// console.log("10"===10)

// 1.3
// console.log(parseInt('9.8')===10)

// 1.4
// const isTrue = true
// const isHungry = true
// const isYoung = true

// const isLightOff = false
// const isSleep = false
// const isAngry = false

// 1.5
// console.log(4 > 3);
// console.log(4 >= 3);
// console.log(4 < 3);
// console.log(4 <= 3);
// console.log(4 == 4);
// console.log(4 === 4);
// console.log(4 != 4);
// console.log(4 !== 4);
// console.log(4 != '4');
// console.log(4 == '4');
// console.log(4 === '4');

// const python = "python";
// const jargon = "jargon";
// console.log(python.length != jargon.length);

// 1.6
// console.log(4 > 3 && 10 < 12);
// console.log(4 > 3 && 10 > 12);
// console.log(4 > 3 || 10 < 12);
// console.log(4 > 3 || 10 > 12);
// console.log(!(4 > 3));
// console.log(!(4 < 3));
// console.log(!(false));
// console.log(!(4 > 3 && 10 < 12));
// console.log(!(4 > 3 && 10 > 12));
// console.log(!(4 === '4'));

// const dragon = "dragon";
// console.log("dragon".includes("on") != python.includes("on"));

// 1.7
//Okunabilir Saat Göstergesi
// const date = new Date();
// let year = date.getFullYear(),
//   month = date.getMonth(),
//   day = date.getDate(),
//   hour = date.getHours(),
//   minute = date.getMinutes(),
//   seconds = date.getSeconds();
//   dayNumber = date.getDay()
// let months = [
//   "Ocak",
//   "Şubat",
//   "Mart",
//   "Nisan",
//   "Mayıs",
//   "Haziran",
//   "Temmuz",
//   "Ağustos",
//   "Eylül",
//   "Ekim",
//   "Kasım",
//   "Aralık",
// ];
// let days = [
//     "Pazar",
//     "Pazartesi",
//     "Salı",
//     "Çarşamba",
//     "Perşembe",
//     "Cuma",
//     "Cumartesi",
//     "Pazar"
// ]

//   örnek time: 15 Ağustos 2023, Çarşamba, 21:21:21

// let humanReadableDate = `${day} ${months[month]} ${year}, ${days[dayNumber]}, ${hour}:${minute}:${seconds} `;
// console.log(humanReadableDate)

// Exercise lvl 2

// // 2.1
// let taban = prompt("Üçgenin Taban Değerini Giriniz!");
// let yükseklik = prompt("Üçgenin Yükseklik Değerini Giriniz");
// let result = taban * yükseklik * 0.5;
// alert(`Üçgenin alanı : ${result}cm^2`);

// // 2.2
// let firstPeriper = prompt("üçgenin ilk kenar değerini giriniz");
// let twoPeriper = prompt("üçgenin ikinci kenar değerini giriniz");
// let threePeriper = prompt("üçgenin üçüncü kenarını giriniz");

// let first = firstPeriper;
// let two = twoPeriper;
// let three = threePeriper;

// const convertOne = Number(first);
// const convertTwo = Number(two);
// const convertThree = Number(three);

// const perimeter = convertOne + convertTwo + convertThree;
// alert("Üçgenin Çevresi : " + perimeter + " cm");

// // 2.3
// const length = prompt("Dikdörtgenin Taban Değerini Giriniz");
// const width = prompt("Dikdörtgenin Yükseklik değerini giriniz");

// const areaFormul = Number(length) * Number(width);
// console.log(`Dikdörtgenin alanı ${areaFormul} cm^2`);
// const rectangelFormul = 2 * (Number(length) + Number(width));
// console.log(`Dikdörtgenin çevresi ${rectangelFormul} cm`);

// // 2.4
// while (true) {
//   var userInput = prompt("Lütfen Dairenin Yarıçapını giriniz:");

//   // Kullanıcının "iptal" tuşuna bastığını kontrol et
//   if (userInput === null) {
//     alert("İşlem iptal edildi.");
//     break;
//   }

//   // Girilen değeri sayıya çevirme deneme
//   var radius = parseFloat(userInput);

//   // Sayı çevirme işlemi başarılı ise devam et
//   if (!isNaN(radius)) {
//     console.log("Girilen sayı: " + radius);
//     // Burada istediğiniz işlemi gerçekleştirebilirsiniz
//     break;
//   } else {
//     alert("Geçerli bir sayı girmediniz. Lütfen tekrar deneyin.");
//   }
// }

// const PI = 3.14;
// const circleArea = PI * radius * radius;
// console.log(`Dairenin alanı ${circleArea}`);

// // 2.9
// const hoursPrompt = prompt("Enter hours");
// const perHoursSalaryPrompt = prompt("Enter rate per hour");

// const hours = hoursPrompt;
// const perHoursSalary = perHoursSalaryPrompt;

// const salaryFormul = hoursPrompt * perHoursSalaryPrompt;
// alert(salaryFormul);

// // 2.10
// const humanName = prompt("Adınızı Giriniz");
// const lengthName = humanName.length;
// alert(lengthName > 7 ? "Adınız Uzun" : "Adınız Kısa");

// // 2.11
// let yourFirstName = prompt("Adınızı Gİriniz");
// let yourLastName = prompt("Soyadınızı Giriniz");

// let resultLength =
//   yourFirstName.length > yourLastName.length
//     ? "Adınız, soyadınızdan uzundur"
//     : "Adınız, soyadınızdan kısadır";

// alert(resultLength);

// // 2.12
// let myAge = prompt("Benim Yaşım Kaç");
// let yourAge1 = prompt("Senin Yaşın Kaç");

// const age1 = parseFloat(myAge);
// const age2 = parseFloat(yourAge1);
// if (age1 > age2) {
//   let resultAge1 = age1 - age2;
//   console.log(`Senden ${resultAge1} yaş büyüğüm.`);
// } else {
//   let resultAge2 = age2 - age1;
//   console.log(`Senden ${resultAge2} yaş küçüğüm.`);
// }

// // 2.13
// let date1 = new Date();
// let nowYear = date1.getFullYear();
// let yourBirthday = prompt("Doğum yılınızı giriniz");
// let yourAge = nowYear - yourBirthday;
// let legalAge = 18;
// alert(yourAge > 18 ? "Ehliyet alabilirsin" : "Ehliyet alamazsın");

// //2.14
// const ageCalculatorPrompt = prompt("Enter number of years you live");
// const ageCalculate = ageCalculatorPrompt;
// const secondFormul = ageCalculate * 365 * 24 * 60 * 60;

// if (ageCalculate > 100) {
//   alert("As a rule, you cannot live more than 100 years");
// } else {
//   alert(`You lived ${secondFormul} seconds.`);
// }

// // 2.15
const date = new Date();
let year = date.getFullYear(),
  month = date.getMonth(),
  day = String(date.getDate()).padStart(2, "0"),
  dayNumber = date.getDay();
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// örnek time: 15 Ağustos 2023, Çarşamba, 21:21:21

let humanReadableDate = `${day} ${months[month]} ${year}, ${days[dayNumber]}`;
console.log(humanReadableDate);

// Exercise lvl 3
