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

const img = document.querySelector('img')

img.addEventListener('load', function() {
    console.log('Görsel Yüklendi!')

}
)

const mass = document.querySelector("#mass")
const height = document.querySelector("#height")
const button3 = document.querySelector("#bmi")

let bmi ;
button3.addEventListener("click", () => {
    bmi = mass.value / height.value ** 2;
    console.log(`senin bmi ${bmi.toFixed(2)}`)
})































