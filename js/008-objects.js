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
const person = {
  firstName: 'Erdinc',
  lastName: 'Ozdemir',
  age: 250,
  country: 'Turkey',
  city: 'Istanbul',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Java',
    'SQL'
  ],
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  }
}
person.nationality = 'Turkısh'
person.country = 'Turkey'
person.title = 'Engineer'
person.skills.push('Meteor')
person.skills.push('SasS')
person.isMarried = true

person.getPersonInfo = function() {
  let skillsWithoutLastSkill = this.skills
    .splice(0, this.skills.length - 1)
    .join(', ')
  let lastSkill = this.skills.splice(this.skills.length - 1)[0]

  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
  let fullName = this.getFullName()
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
  return statement
}
console.log(person)
console.log(person.getPersonInfo())