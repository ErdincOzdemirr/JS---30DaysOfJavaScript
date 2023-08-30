class Person {
  constructor(firstName, lastName, age, country = "Türkiye", city, skills) {
    console.log(this);
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.skills = [];
  }
  getFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
  get getSkills() {
    return this.skills;
  }
  set setSkills(skill) {
    this.skills.push(skill);
  }
  getPersonelInfo() {
    let fullName = this.getFullName();
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(", ") +
        ` and ${this.skills[this.skills.length - 1]}`;
    let formattedSkills = skills ? `He knows ${skills}` : "";
    return `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}.`;
  }
}

const person1 = new Person(
  "erdinc",
  "ozdemir",
  30,
  undefined,
  "sakarya",
  "HTML"
);
const person2 = new Person("hava", "ozdemir", 31, "Holland", "Amsterdam");
const person3 = new Person("ezgi", "sevgili", 26, "Germany", "Munih");
console.log(
  person1.getFullName(),
  person2.getFullName(),
  person3.getFullName()
);

person1.setSkills = "javaScript";
person1.setSkills = "React";
console.log(person1.skills);

console.log(person1.getPersonelInfo());

// class Teacher extands Person {
//     teach() {
//         return " js dersi"
//     }
// }
// class Student extends Person {
//     learn() {
//         return "listen to js"
//     }
// }

// const teacher1 = new Teacher("Erdinc", "Ozdemir", 30, "Türkiye", "Sakarya");
// const student1 = new Student("Hava", "Ozdemir", 30, "Türkiye", "Ankara");

// console.log(
//     teacher1.teach()
// )
// console.log(
//     student1.learn()
// )
