let sampleJSON = `[
    {
      "firstName": "Erdinc",
      "lastName": "Ozdemir",
      "age": 30,
      "email": "erdincozdemir1812@gmail.com",
      "skills": ["HTML", "CSS", "JavaScript", "React"]
    },
    {
      "firstName": "Alex",
      "lastName": "James",
      "age": 25,
      "email": "alex@alex.com"
    },
    {
      "firstName": "Lidiya",
      "lastName": "Tekle",
      "age": 28,
      "email": "lidiya@lidiya.com"
    }
  ]`;
try {
  let users = JSON.parse(sampleJSON, (key, value) => {
    let newValue =
      typeof value == "string" && key != "email" ? value.toUpperCase() : value;
    return newValue;
  });
  console.log(users);
} catch (err) {
  console.log(err);
}

let categories = [
  {
    name: "css",
    count: 5,
  },
  {
    name: "javascript",
    count: 16,
  },
];

let categoriesJSON = JSON.stringify(categories, ["count", "name", 4]);
console.log(categoriesJSON);

// JSON => OBJECT için parse
// Object => json için stringfy kullanılır.
