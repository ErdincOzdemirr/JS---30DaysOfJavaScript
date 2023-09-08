const h1 = document.querySelector("h1");

console.log("h1 style : " + h1.attributes.style.value);
console.log("h1 title : " + h1.attributes.title.value);

for (const attr of h1.attributes) {
  console.log(attr.name, attr.value);
}

const ul = document.querySelector("ul");
console.log(ul.childElementCount);

// const deleteButtons = document.querySelectorAll('.delete-btn')
const deleteButtons = ul.children;
console.log("deleteButtons : "+deleteButtons);

[...deleteButtons].forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.target.remove();
    if (ul.childElementCount === 0) {
      ul.innerHTML = "Eleman Yok!";
    }
  });
});

console.log(ul.childElementCount);