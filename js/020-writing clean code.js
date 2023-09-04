// Js ybzım Kuralları

// 1 - Array ( dizi isimlerini çoğul yapmayı tercih ediyoruz)
// arrays
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [0, 3.14, 9.81, 37, 98.6, 100];
const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];
const languages = ["Amharic", "Arabic", "English", "French", "Spanish"];
const skills = ["HTML", "CSS", "JavaScript", "React", "Python"];
const fruits = ["banana", "orange", "mango", "lemon"];
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"];

// 2- Functions ( fonksiyon declaration, expression fonksiyon, arrow fonksiyon ve anonymous fonksiyon sahipsiniz. ama genel olarak arrow function kullanıyoruz )
// bir kişinin tam adını döndüren fonksiyon
const printFullName = (firstName, lastName) => firstName + " " + lastName;
// bir sayının karesini döndüren fonksiyon
const square = (n) => n * n;
// rastgele hexa renkleri oluşturan fonksiyon
const hexaColor = () => {
  const str = "0123456789abcdef";
  let hexa = "#";
  let index;
  for (let i = 0; i < 6; i++) {
    index = Math.floor(Math.random() * str.length);
    hexa += str[index];
  }
  return hexa;
};
// tarih ve saati gösteren bir fonskiyon
const showDateTime = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  const dateMonthYear = date + "." + month + "." + year;
  const time = hours + ":" + minutes;
  const fullTime = dateMonthYear + " " + time;
  return fullTime;
};

// new Dat().toLocaleString() geçerli tarih ve saati görüntülemek için de kullanılabilir.

console.log(new Date().toLocaleString());

// 3- Loops (Döngüler)
// for döngüsü, while döngüsü, do while döngüsü, for of döngüsü, forEach döngüsü ve for in döngüsü.

// for (let i = 0; i < n; i++) {
//   console.log();
// }
// dizi değişkenlerini tanımlıyoruz
const names2 = ["Asabeneh", "Mathias", "Elias", "Brook"];
// normal for döngüsü kullanarak bir diziyi yineleme
let len = names2.length;
for (let i = 0; i < len; i++) {
  console.log(names2[i].toUpperCase());
}
// for of kullanarak bir diziyi yinelemek
for (const name of names2) {
  console.log(name.toUpperCase());
}
// forEach kullanarak bir diziyi yineleme
names2.forEach((name) => name.toUpperCase());
const person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  isMarried: true,
};
for (const key in person) {
  console.log(key);
}

// 4 - Object (Her zaman const oluşturarak kullanıyoruz. çünkü const name değişmez içerik değişir)
// nesne değişmezi tanımlama
const person2 = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  isMarried: true,
};
// nesne anahtarları aracılığıyla yineleme
for (const key in person) {
  console.log(key, person[key]);
}

// 5 - if / if else / switch
// syntax(sözdimi)
// if (condition) {
// kodun bu kısmı doğru koşul için çalıştırılır
//    } else {
// kodun bu kısmı yanlış koşul için çalıştırılır
//    }

// if else if else if else
let a = 0;
if (a > 0) {
  console.log(`${a} is a positive number`);
} else if (a < 0) {
  console.log(`${a} is a negative number`);
} else if (a == 0) {
  console.log(`${a} is zero`);
} else {
  console.log(`${a} is not a number`);
}

// if else if else if else
let b = 0;
if (b > 0) {
  console.log(`${b} is b positive number`);
} else if (b < 0) {
  console.log(`${b} is b negbtive number`);
} else if (b == 0) {
  console.log(`${b} is zero`);
} else {
  console.log(`${b} is not b number`);
}

// Daha fazla switch kullanımı
let dayUserInput = "monday";
let day = dayUserInput.toLowerCase();
switch (day) {
  case "monday":
    console.log("Today is Monday");
    break;
  case "tuesday":
    console.log("Today is Tuesday");
    break;
  case "wednesday":
    console.log("Today is Wednesday");
    break;
  case "thursday":
    console.log("Today is Thursday");
    break;
  case "friday":
    console.log("Today is Friday");
    break;
  case "saturday":
    console.log("Today is Saturday");
    break;
  case "sunday":
    console.log("Today is Sunday");
    break;
  default:
    console.log("It is not a week day.");
}

// ternary (Üçlü)
let isRaining = true;
isRaining
  ? console.log("You need a rain coat.")
  : console.log("No need for a rain coat.");

//   6- Classes ( Tüm sınıflarda camelCase kullanıyoruz)
// sınıfımızı oluşturuyoruz
class Person {
  constructor(firstName, lastName) {
    console.log(this); // buradan çıktı alıyoruz
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
