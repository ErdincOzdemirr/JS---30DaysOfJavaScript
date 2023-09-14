// const h1 = document.getElementById("deneme");
// const attributes = h1.attributes;

// for (const attr of attributes) {
//   console.log(attr.name, attr.value);
// }

console.log(
  "Elemanın kaç çocouk öğesi olduğunu gösterir : " +
    document.querySelector(".list").childElementCount
);

// Children
const article = document.getElementsByTagName("article")[0];
for (const child of article.children) {
  console.log("Children Kullanımı : " + child, child.tagName);
}

// clientheight and client weight

console.log(document.querySelector(".test").clientHeight);
console.log(document.querySelector(".test").clientWidth);

// first element child, last element child

const ul = document.querySelector("ul");
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);

// nextElementSibling ve previousElementSibling
console.log(
  "title claslı h1 den sonraki element : " +
    document.querySelector(".title").nextElementSibling
);
console.log(
  "title claslı h1 den önceki element : " +
    document.querySelector(".title").previousElementSibling
);

// scrollHeight ve scrollWidth
console.log(document.querySelector(".scroll-content").scrollHeight);
console.log(document.querySelector(".scroll-content").scrollWidth);

// scrollLeft and scrollTop
document.querySelector(".scroll-content2").scrollTop += 100;
console.log(document.querySelector(".scroll-content2").scrollTop);

document.querySelector(".scroll-content3").scrollLeft += 100;
console.log(document.querySelector(".scroll-content3").scrollLeft);

// tagName
const elements = document.querySelectorAll(".test");
for (const element of elements) {
  console.log(element.tagName);
}

// Method

// after() and before()
let div = document.getElementById("test2");

let h1 = document.createElement("h1");
h1.textContent = "baslik";

let p = document.createElement("p");
p.textContent = "paragraf";

div.before(h1);
div.after(p);

// append and prepend

let div2 = document.getElementById("test5");
let h2 = document.createElement("h2");
h2.textContent = "baslik2";

let p2 = document.createElement("p");
p2.textContent = "deneme paragrafı yazıldı";

div2.prepend(h2);
div2.append(p2);

// closest Seçilen elemana en yakın belirtilen öğeyi döndürür.

const liElements = document.querySelectorAll("li");

for (const li of liElements) {
  li.addEventListener("click", (e) => {
    //e.stopPropagation()
    console.log(li.closest("ul"));
  });
}

// getBoundingClientRect denemesi

console.log(document.getElementById("test6").getBoundingClientRect());

// matched
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  // tipi submit disabled olanları kontrol et
  console.log(button.matches("[type=submit][disabled]"), button);
}

// setAttribute seçilen elemana nitelik ekler
const a = document.querySelector("a");
a.setAttribute("target", "_blank");

// getattribute
console.log(a.getAttribute("href"));


// hasattribute
const aElements = document.querySelectorAll('a')
for (const a of aElements) {
  if (a.hasAttribute('title')) {
    a.style.backgroundColor = 'yellow'
  }
}

// toggleAttribute()

const button = document.querySelector('button')
const input = document.querySelector('input')

button.addEventListener('click', () => {
  input.toggleAttribute('disabled')
})