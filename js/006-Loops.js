// For Döngüsünün yapısı
// for(başlangıç_değeri, şart, arttırma/azaltma){
// uygulamak istediğimiz kod//   }

for (let i = 0; i <= 100; i++) {
  console.log(i);
}

for (let i = 5; i >= 0; i--) {
  console.log(`${i} * ${i} = ${i * i}`);
}

const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];

for (let i = 0; i < countries.length; i++) {
  console.log(countries[i].toUpperCase());
}

const numbersLine = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbersLine);
let sum1 = 0;
for (let i = 0; i < numbersLine.length; i++) {
  sum1 = sum1 + numbersLine[i];
}
console.log("Toplam", sum1);

const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
  // daha pratik kullanım için, sum += numbers[i]
}

console.log(sum);

const newArr = [];
for (let i = 0; i < numbers.length; i++) {
  newArr.push(numbers[i] ** 2);
}
console.log(newArr);

let i = 0;
while (i <= 5) {
  console.log(i);
  i++;
}

// 0 1 2 3 4 5

while (i < countries.length) {
  console.log("isim", countries[i]);
  i++;
}

do {
  console.log("isim", countries[i]);
  i++;
} while (i < countries.length);

for (let country of countries) {
  if (country === "Norway") {
    // console.log(`${country} bulundu.`);
    // break;
    continue;
  }
  console.log("Ulke Adı : ", country);
}

for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    break;
  }
  console.log(i);
}

// 0 1 2
