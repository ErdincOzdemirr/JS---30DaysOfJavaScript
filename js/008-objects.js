// a = "Erdinc";
// b = 30;
// function letsLearnScope() {
//   console.log(a, b);
//   if (true) {
//     console.log(a, b);
//   }
// }
// console.log(a, b);

// //scope.js
// function letsLearnScope() {
//   var gravity = 9.81;
//   console.log(gravity);
// }
// console.log(gravity), Uncaught ReferenceError: gravity is not defined
// yukarıdaki çıktı konsol ekranında alacağımız hatanın çıktısıdır.

// if (true) {
//   var gravity = 9.81;
//   console.log(gravity); // 9.81
// }
// console.log(gravity); // 9.81

// for (var i = 0; i < 3; i++) {
//   console.log(i); // 0, 1, 2
// }
// console.log(i); // 3

// const person = {};
// console.log(person);

// const person = {
//     firstName: 'Erdinc',
//     lastName: 'Ozdemir',
//     age: 30,
//     country: 'Turkey',
//     city: 'Kocaelivergisiver',
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'React',
//       'Node',
//       'MongoDB',
//       'Python',
//       'D3.js'
//     ],
//     isMarried: true
//   }
//   console.log(person)
// const person = {
//   firstName: "Erdinc",
//   lastName: "Ozdemir",
//   age: 250,
//   country: "Turkey",
//   city: "Istanbul",
//   skills: [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "React",
//     "Node",
//     "MongoDB",
//     "Java",
//     "SQL",
//   ],
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// const formatter = new Intl. ("en", {
//   style: "long",
//   type: "conjuction",
// });

// person.nationality = "Turkısh";
// person.country = "Turkey";
// person.title = "Engineer";
// person.skills.push("Meteor");
// person.skills.push("SasS");
// person.isMarried = true;

// person.getPersonInfo = function () {
// let skillsWithoutLastSkill = this.skills
//   .splice(0, this.skills.length - 1)
//   .join(', ')
// let lastSkill = this.skills.at(-1)

// let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
//   let skills = formatter.format(this.skills);
//   let fullName = this.getFullName();
//   let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`;
//   return statement;
// };
// console.log(person);
// person.skills.push("Python");
// console.log(person.getPersonInfo());

const person = {
  firstName: "Asabeneh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: ["HTML", "CSS", "JS"],
  title: "teacher",
  address: {
    street: "Heitamienkatu 16",
    pobox: 2002,
    city: "Helsinki",
  },
  getPersonInfo: function () {
    return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`;
  },
};

//Object methods: Object.assign, Object.keys, Object.values, Object.entries
//hasOwnProperty

// const copyPerson = Object.assign({}, person)
let copyPerson = { ...person };
Object.freeze(copyPerson);

copyPerson.firstName = "Erdinc";
copyPerson.age = "30";
console.log(person);
console.log(copyPerson);

console.log(Object.keys(person));
console.log(Object.values(person));
// console.log(Object.entries(person));
for (let [key, val] of Object.entries(person)) {
  console.log(key, val);
}

console.log(person.hasOwnProperty("country"));

// obje dondurma freeze

// Object.freeze(copyPerson);
// object.seal (copyPerson); object e bişey ekleyemeden mevcut keyleri değiştirmek için kullanılır.)

// Exercise lvl1

const dog = {
    name: "Karabas",
    legs: 4,
    color: "White",
    age: 3,
    bark: function () {
        return "Woof Woof";
    }
}
console.log(dog.name)
console.log(dog.legs)
console.log(dog.color)
console.log(dog.age)
console.log(dog.bark())

dog.breed = "Dalmatia"
dog.getDogInfo = function () {
  return this.breed
}
console.log(dog.getDogInfo())