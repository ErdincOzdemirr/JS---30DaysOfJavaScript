let title = document.createElement("h2");
title.className = "erdinc";
title.style.color = "red";
title.textContent = "Bu benim js etiket müdahalem";
console.log(title);

for (let i = 0; i < 4; i++) {
  let titles = document.createElement("h1");
  titles.className = "title";
  titles.style.fontSize = "24px";
  titles.style.color = "white";
  titles.style.backgroundColor = "blue";
  titles.textContent = "bu js ile eklendi" + i;
  console.log(titles);
  document.body.append(titles);
}

const allH1Elements = document.querySelectorAll("h1");
console.log(allH1Elements);

for (const h1 of allH1Elements) {
  h1.remove()
}
