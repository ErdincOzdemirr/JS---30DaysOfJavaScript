let fullName;

try {
  let firstName = "Erdinc";
  let lastName = "Ozdemir";
  fullName = firstName + " " + surName;
  throw "Öylesine bi değer";
} catch (err) {
  console.log(err);
}

console.log(fullName);

let age = prompt("Kaç yaşındasın?");

try {
  if (age > 29) throw new Error("Yalan söylüyorsun");
} catch (e) {
  console.log(e.message);
}
