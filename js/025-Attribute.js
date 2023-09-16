const aTags = document.querySelectorAll("a");
aTags.forEach((a) => {
  a.addEventListener("click", (e) => {
    // dış bağlantı linkini engelleme
    if (e.target.getAttribute("href").includes("http")) {
      if (!confirm("Güvenli olmayan bir siteye gitmeye çalışıyorsunuz!")) {
        e.preventDefault();
      }
    }
  });
});

const test1 = document.querySelector(".test1");
const test2 = document.querySelector(".test2");
const test3 = document.querySelector(".test3");

test1.addEventListener("click", (e) => console.log("test1 tıklandı"));
test2.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("test2 tıklandı");
});
test3.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("test3 tıklandı");
});

document.styleSheets[0].cssRules[0].style.setProperty("color", "blue");

document.styleSheets[0].cssRules[0].style.removeProperty("color");

document.styleSheets[0].cssRules[0].style.setProperty("color", "red");

console.log(
  document.styleSheets[0].cssRules[0].style.getPropertyValue("color")
);

console.log(
  document.styleSheets[0].cssRules[0].style.getPropertyValue("color") ===
    "important"
    ? "important kullanılmış"
    : "cokta önemli değil"
);

const textarea = document.getElementById('test-textarea')

  textarea.addEventListener('input', () => {
      console.log(
          textarea.value.substring(
              textarea.selectionStart,
              textarea.selectionEnd
          )
      )
  })

  const inputs = document.querySelectorAll('input')
  const incrementButton = document.getElementById('increment-button')
  const decrementButton = document.getElementById('decrement-button')

  incrementButton.addEventListener('click', () => {
    inputs.forEach(input => {
      input.stepUp()
    })
  })

  decrementButton.addEventListener('click', () => {
    inputs.forEach(input => {
      input.stepDown()
    })
  })

  const input = document.querySelector('input')
  const button = document.querySelector('button')

  button.addEventListener('click', () => {
    input.showPicker()
  })