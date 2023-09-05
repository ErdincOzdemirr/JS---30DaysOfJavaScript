// const h1 = document.getElementsByTagName("h1");

// // h1.forEach((element) => {
// //   console.log(element);
// // });

// console.log(h1.length);
// console.log(h1[1]);

// for (let i = 0; i < h1.length; i++) {
//   console.log(h1[i]);
// }

// [...h1].forEach((item) => {
//   console.log(item);
// });

// const allTitles = document.getElementsByTagName("h1");
// console.log(allTitles);
// console.log(allTitles.length);

// for (let i = 0; i < allTitles.length; i++) {
//   console.log(allTitles[i]);
// }

// const allTitles2 = document.getElementsByClassName("title");
// console.log(allTitles2);
// console.log(allTitles2.length);

// for (let i = 0; i <li allTitles2.length; i++) {
//   console.log(allTitles2[i]);
// }

// let firstTitle = document.getElementById("first-title");
// console.log(firstTitle);

// document.querySelector(".title");
// console.log(document.querySelector(".title + #second-title"));

// console.log(document.querySelectorAll(".title"));

// document.querySelectorAll(".title").forEach((item) => console.log(item));

// console.log(document.querySelector("#third-title"));

const title3 = document.getElementById("title3");

console.log(title3);
title3.style.color = "red";
title3.style.backgroundColor = "yellow";
title3.className = "sakarya";

const title = document.getElementById("first-title");

title.setAttribute("style", "color: yellow; background-color: blue");
title.setAttribute("class", "geyve");
title.classList.add("ankara");
title.classList.remove("geyve");
console.log(title);

title.textContent = "Yeni Değer Görüntülendi";
title3.innerHTML = "Değer eklemesi yaptım";

const list = `
<li>30DaysOfPython Challenge Done</li>
<li>30DaysOfJavaScript Challenge Ongoing</li>
<li>30DaysOfReact Challenge Coming</li>
<li>30DaysOfFullStack Challenge Coming</li>
<li>30DaysOfDataAnalysis Challenge Coming</li>
<li>30DaysOfReactNative Challenge Coming</li>
<li>30DaysOfMachineLearning Challenge Coming</li>
`;
const ul = document.querySelector("ul");
ul.innerHTML = list;

ul.innerHTML = "";

const names = ["a", "b", "c"];
names.length = 0;
console.log(names);

const titles = document.querySelectorAll("h1");
titles.forEach((title, i) => {
  title.style.fontSize = "24px"; // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.color = "green";
    title.style.backgroundColor = "red";
    title.style.fontSize = "20px";
  } else {
    title.style.color = "red";
    title.style.backgroundColor = "green";
    title.style.fontSize = "30px";
  }
});
