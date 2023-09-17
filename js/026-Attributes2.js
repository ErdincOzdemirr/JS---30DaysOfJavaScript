const form1 = document.getElementById("form1");
form1.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target.elements);
});

console.log(document.forms);
console.log(document.forms.form2);

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  document.forms.form1;
});

document.forms.form1.addEventListener('submit', e => {
    e.preventDefault()
    e.target.reset()
})