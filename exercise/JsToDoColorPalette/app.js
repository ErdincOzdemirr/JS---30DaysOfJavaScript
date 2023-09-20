const button = document.getElementById("generate-color-btn");

// ### 1.basit palet. belirli renkleri seçerek renk değişltirme
// const colors = ["red", "blue", "yellow", "green", "purple", "pink", "orange"];

// button.addEventListener("click", () => {
//   console.log("tıkladın");

//   const randomNumber = Math.floor(Math.random() * colors.length);

//   document.body.style.backgroundColor = colors[randomNumber];
// });

// #### 2.colorpalette rgb değerindeki 0-256 arası sayı seçerek yapma

// button.addEventListener("click", () => {
//   console.log("tıkladın");

//   const randomNumber1 = Math.floor(Math.random() * 256);
//   const randomNumber2 = Math.floor(Math.random() * 256);
//   const randomNumber3 = Math.floor(Math.random() * 256);

//   console.log(randomNumber1, randomNumber2, randomNumber3);

//   document.body.style.backgroundColor = `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`;
// });

// #### 3. Renk değişimini animasyonlu geçiş
// css de transition komutu eklenir.

// #### 4. Fonksiyon ile renk üretim tekrarından kaçınarak rgb değeri oluşturma

// const generateRandomNumber = (maxNumber) => {
//     return Math.floor(Math.random() * (maxNumber + 1))
//     // max number + 1, 0 ve 255 in dahil olduğu istediğimiz için +1
// }

// button.addEventListener("click", () => {
//     console.log("tıkladın");

//     const randomNumber1 = generateRandomNumber(255);
//     const randomNumber2 = generateRandomNumber(255);
//     const randomNumber3 = generateRandomNumber(255);

//     console.log(randomNumber1, randomNumber2, randomNumber3);

//     document.body.style.backgroundColor = `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`;
//   });

// #### 5. Fonksiyon ile  rgb değeri oluşturma

const generateRandomNumber = (maxNumber) => {
  return Math.floor(Math.random() * (maxNumber + 1));
  // max number + 1, 0 ve 255 in dahil olduğu istediğimiz için +1
};

const generateRGBColor = () => {
  return [
    generateRandomNumber(255),
    generateRandomNumber(255),
    generateRandomNumber(255),
  ].join(", ");
};
button.addEventListener("click", () => {
  console.log("tıkladın");
  document.body.style.backgroundColor = `rgb(${generateRGBColor()})`;
});
