const h1 = document.querySelector("h1");

console.log("h1 style : " + h1.attributes.style.value);
console.log("h1 title : " + h1.attributes.title.value);

for (const attr of h1.attributes) {
  console.log(attr.name, attr.value);
}

const ul = document.querySelector("ul");
console.log(ul.childElementCount);
console.log("first child : " + ul.firstElementChild);
const deleteButtons = document.querySelectorAll(".delete-btn");
// const deleteButtons = ul.children;
console.log("deleteButtons : " + deleteButtons);

deleteButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.target.remove();
    if (ul.childElementCount === 0) {
      ul.innerHTML = "Eleman Yok!";
    }
  });
});

console.log(ul.childElementCount);

const test = document.querySelector(".test");
console.log(test.clientHeight);

const ulTest = document.querySelector(".listSelect");
console.log(ulTest.firstElementChild);
console.log(ulTest.lastElementChild);

const nextElementSelect = document.querySelector(".test");
console.log(nextElementSelect.nextElementSibling);

const scrollContent = document.querySelector(".scroll-content");

console.log(scrollContent.scrollWidth);


const scrollDownBtn = document.getElementById('scroll-down')

scrollDownBtn.addEventListener('click', () => {
scrollContent.scrollTop += 50

})