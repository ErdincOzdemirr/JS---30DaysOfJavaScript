const test = (callback) => {
  setTimeout(() => {
    callback("hata oluştu!", []);
  }, 2000);
};
const callback = (err, data) => {
  if (err) {
    console.log("hata", err);
  } else {
    console.log("data", data);
  }
};
// test(callback);

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("işlem başarısız")
  }, 1500);
  //   resolve("işlem başarılı");
});
promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.warn(err);
  });
console.log(promise);
