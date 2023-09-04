// const test = (callback) => {
//   setTimeout(() => {
//     callback("hata oluştu!", []);
//   }, 2000);
// };
// const callback = (err, data) => {
//   if (err) {
//     console.log("hata", err);
//   } else {
//     console.log("data", data);
//   }
// };
// // test(callback);

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("işlem başarısız")
//   }, 1500);
//   //   resolve("işlem başarılı");
// });
// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.warn(err);
//   });
// console.log(promise);

// Fetch API

const API_URL = "https://jsonplaceholder.typicode.com/posts";

console.log(fetch(API_URL));

fetch(API_URL)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

  const url = 'https://restcountries.com/v2/all' // countries api
fetch(url)
  .then(response => response.json()) // API verilerine JSON olarak erişme
  .then(data => {
    // verileri almak
    console.log(data)
  })
  .catch(error => console.error(error)) // yanlış bir şey olursa işleme hatası

async function getPosts() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
getPosts();

