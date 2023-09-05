const h1 = document.getElementsByTagName("h1");

// h1.forEach((element) => {
//   console.log(element);
// });

console.log(h1.length);
console.log(h1[1]);

for (let i = 0; i < h1.length; i++) {
  console.log(h1[i]);
}

[...h1].forEach((item) => {
  console.log(item);
});

const allTitles = document.getElementsByTagName("h1");
console.log(allTitles);
console.log(allTitles.length);

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]);
}

const allTitles2 = document.getElementsByClassName("title");
console.log(allTitles2);
console.log(allTitles2.length);

for (let i = 0; i < allTitles2.length; i++) {
  console.log(allTitles2[i]);
}

let firstTitle = document.getElementById("first-title");
console.log(firstTitle);

document.querySelector(".title");
console.log(document.querySelector(".title + #second-title"));

console.log(document.querySelectorAll(".title"));

document.querySelectorAll(".title").forEach((item) => console.log(item));

console.log(document.querySelector("#third-title"));

const title3 = document.getElementById("#title3");

console.log(title3);
title3.style.color = "red";
