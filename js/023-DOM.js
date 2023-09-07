const button = document.getElementById("btn");

button.addEventListener("click", (e) => {
  console.log("e. object gösterim : ", e);
  console.log("e.target neyi getirdi : ", e.target);
});

function clickHandle(e) {
  console.log("e : ", e);
  console.log("e.id : ", e.id);
  console.log(e.getAttribute("id"));
}

button.onclick = (e) => {
  console.log(e);
};

const clickMe = () => {
    console.log("Bana tıklandı :D")
}

button.addEventListener("dblclick", (e) => {
    console.log("Bana double tıklandı")
})