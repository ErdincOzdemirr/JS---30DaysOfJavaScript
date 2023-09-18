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
