const buttons = document.querySelectorAll(".btn");
console.log(buttons);

buttons.forEach((button) => {


  console.log("button", button);
  //   const button = document.querySelector("#btn");
  // const content = document.getElementById("content");

  const content = document.querySelector(button.dataset.target);
  console.log(content);
  button.innerText = button.dataset.hide;
  button.addEventListener("click", () => {
    console.log(button.dataset);
    // 1.yol. content'in displayinin block none değişimiyle gizleme
    if (content.style.display === "" || content.style.display === "block") {
      console.log("content sayfada görünür");
      content.style.display = "none";
      // butonun text ini göster olarak ayarlanmak
      // button.innerText = "Göster";
      button.innerText = button.dataset.show;
    } else {
      console.log("content sayfada gizli");
      content.style.display = "";
      // butonun text ini gizle olarak ayarlanmak
      // button.innerText = "Gizle";
      button.innerText = button.dataset.hide;
    }
// 2.yol
// if (content.classList.contains('hide')){
//     button.innerText = button.dataset.hide
//     content.classList.remove('.hide')

// } else {
//     console.log(gizlenmeli)
//     button.innerText = button.dataset.show
//     content.classList.add('hide')
// }
  });
});

// 1. Bir sayacı (counter) 0 olarak tanımla.
let counter = 0;

// 2. Bir döngü başlat ve döngü koşulu olarak sayacın 10'dan küçük olduğunu kontrol et.
while (counter < 10) {
  // 3. Ekrana "Kuş sayısı: " ve sayacın değerini yazdır.
  console.log("Kuş sayısı: " + counter);

  // 4. Sayacın değerini 1 artır.
  counter++;

  // 5. Döngüye geri dön ve 2. adımdan devam et.
}

// 6. Döngü koşulu sağlanmadığı zaman döngüden çık.
