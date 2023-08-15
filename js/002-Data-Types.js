// let word = "JavaScript";
// word[0] = "Y";
// console.log(word);

// let numOne = 3;
// let numTwo = 3;

// console.log(numOne == numTwo);

// let js = "JavaScript";
// let py = "Python";

// console.log("js == py : " + (js == py));

// let lightOn = true;
// let lightOff = false;

// console.log(lightOff == lightOn);

// let nums = [1, "erdinc", true, null, undefined, [1, 2, 3]];

// nums[0];
// nums[1];
// nums[2];
// console.log(nums);
// console.log(nums[0], nums[1], nums[2]);

// let nums1 = [1, 2, 3]
// let nums2 = [1, 2, 3]
// console.log(nums1 == nums2 )//false
// let nums2 = nums1
// console.log(nums1 == nums2)

// let age = 31
// const gravity = 9.81 //değişmeyen değer
// let mass = 82
// const PI = 3.14
// const boilingPoint = 100
// const bodyTemp = 37

// console.log (age, gravity, mass, PI, boilingPoint, bodyTemp )

// const PI = Math.PI;
// console.log(PI);

// console.log(Math.round(PI));
// console.log(Math.floor(PI));
// console.log(Math.ceil(PI));

// console.log(Math.min(-5, 3, 20, 4, 5, 10)) // En küçük sayıyı bulmaya yaradığı için sonuç -5 döner

// console.log(Math.max(-5, 3, 20, 4, 5, 10)) // En büyük sayıyı bulmaya yaradığı için sonuç 20 döner

// const num = Math.round(Math.random() * 11); // 0 ile 10 arasında rastgele sayı oluşturur
// console.log(num);

// let randomNum = Math.random(); // 0 ile 0.999 arasında oluşturur
// let numBtnZeroAndTen = randomNum * 11;

// console.log(numBtnZeroAndTen); // Sonuç : minimum  0 ve maksimum 10.99

// let randomNumRoundToRound = Math.round(numBtnZeroAndTen); // yuvarlama yapıyor
// console.log(randomNumRoundToRound); // Sonuç 0 ile  10 arasında çıkar

// let name1 = "Erdinc";
// let surname = "Ozdemir";
// let space = " ";

// let fullName = name1 + space + surname;
// console.log(fullName);

// const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
// I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
// Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
// In the end of 2019, I was thinking to expand my teaching and to reach \
// to global audience and I started a Python challenge from November 20 - December 19.\
// It was one of the most rewarding and inspiring experience.\
// Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
// I hope you are enjoying too."
// console.log(paragraph)

// let fullName = `${name1} ${surname}`;
// console.log(fullName);

//String Method

//1.length
// let js = "JavaScript";
// console.log(js.length);

// let firstName = "Erdinc";
// console.log(firstName.length);

//2.accessing characters in a string
// let dizi = ["e", "r", "d", "i", "n", "c"];
// let lastIndex = firstName.length - 1;

// console.log(firstName[lastIndex]);

//3. toUpperCase():
// console.log(firstName.toUpperCase());

//4. toLowerCase ()
// console.log(firstName.toLowerCase());

//5. substr()
// let country = 'Finland'
// console.log(country.substr(3, 4))

//6. substring()
// let string = 'JavaScript'

// console.log(string.substring(0,4))     // Java
// console.log(string.substring(4,10))    //script
// console.log(string.substring(4, 7)) //scr

//7. split()
// let string = '30 Days Of JavaScript'

// console.log(string.split()); // bu kısımda birşey belirtmediğin için 1 elementli array oluştu -> ["30 Days Of JavaScript"]
// console.log(string.split(" ")); // bu kısımda boşluktan böl dediğimiz için 4 elementli array oluştu -> ["30", "Days", "Of", "JavaScript"]

//8.trim()
// let firstName = " Asabeneh ";

// console.log(firstName);
// console.log(firstName.trim()); // içinde tırnak kullanmasanız dahi boşlukları siler

//9. includes()
// let string = "30 Days Of JavaScript";

// console.log(string.includes("Days")); // true
// console.log(string.includes("days")); // false - birebir arama yapar!
// console.log(string.includes("Script")); // true
// console.log(string.includes("script")); // false
// console.log(string.includes("java")); // false
// console.log(string.includes("Java")); // true

//10. replace()
// let string = "Erdinc Ozdemir is a lawyer";
// console.log(string.replace("lawyer", "developer"));

//11. chartAt()
// let string = "30 Days Of JavaScript";

// console.log(string.charAt(3)); //D

//12. charCodeAt(): String'teki vermiş olduğunuz index değerinin ASCII numarasını döndürür.
// string.charCodeAt(index)
// let string = '30 Days Of JavaScript'
// console.log(string.charCodeAt(3))        // D ASCII 68

// let lastIndex = string.length - 1
// console.log(string.charCodeAt(lastIndex))

//13.indexOf(): Bu metot belirtilen değerin indeksini verir. Değer bulunamazsa -1 sonucunu döndürür. ( Birebir arama yapar örneğe bakın )

// let string = "30 Days Of JavaScript";

// console.log(string.indexOf("D"));
// console.log(string.indexOf("Of"));
// console.log(string.indexOf("j"));,,

//16.startsWith

// let string = 'Love is the best to in this world'

// console.log(string.startsWith('Love'))   // true
// console.log(string.startsWith('love'))   // false
// console.log(string.startsWith('world'))  // false

// endsWith: String'in belirtilen değer ile bitip bitmediğini kontrol eder. true yada false döndürür.
// string.endsWith(substring)
// let string = 'Love is the most powerful feeling in the world'

// console.log(string.endsWith('world'))         // true
// console.log(string.endsWith('love'))          // false
// console.log(string.endsWith('in the world')) // true

//20. repeat(): bağımsız değişken olarak bir sayı alır ve stringi sayı kadar döndürür.
// string.repeat(n)
// let string = 'love'
// console.log(string.repeat(10)) // lovelovelovelovelovelovelovelovelovelove

// let num1 = '10'
// let numInt1 = parseInt(num1)
// console.log(numInt1) // 10
// let num2 = '10'
// let numInt2 = Number(num2)

// console.log(numInt2) // 10
// let num3 = '10'
// let numInt3 = +num3

// console.log(numInt3) // 10

// let num1 = '9.81'
// let numFloat1 = parseFloat(num1)

// console.log(numFloat1) // 9.81
// let num2 = '9.81'
// let numFloat2 = Number(num2)

// console.log(numFloat2) // 9.81
// let num3 = '9.81'
// let numFloat3 = +num3

// console.log(numFloat3) // 9.81

// let num = 9.81
// let numInt = parseInt(num)

// console.log(numInt) // 9

// Exercise lvl 1 //

30; //1.1
const challange = "30 Days Of JavaScript";
// 1.2
console.log(challange);
//1.3
console.log(challange.length)
// 1.4
console.log(challange.toUpperCase())
// 1.5
console.log(challange.toLowerCase())
// 1.6
console.log(challange.substr(2,8));
// 1.7
console.log(challange.substring(3,21))
// 1.8
console.log(challange.includes("Script"))
// 1.9
console.log(challange.split())
// 1.10
console.log(challange.split(' '))
// 1.11
const array = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
console.log(array.split())
// 1.12
console.log(challange.replace("JavaScript", "Python"))
// 1.13
console.log(challange.charAt(15))
// 1.14
console.log(challange.charCodeAt(11))
// 1.15
console.log(challange.indexOf("a"));
// 1.16
console.log(challange.lastIndexOf("a"));
// 1.17
const conjunction = "You cannot end a sentence with because because because is a conjunction";
console.log(conjunction.indexOf("because"));
// 1.18
console.log(conjunction.lastIndexOf("because"))
// 1.19
console.log(conjunction.search("because"))
// 1.20
console.log(challange.trim())
// 1.21
console.log(challange.startsWith(30))
// 1.22
console.log(challange.endsWith("JavaScript"))
// 1.23
console.log(challange.match("a"))
// 1.24
const concatchallange = "30 Days Of" ;
console.log(concatchallange.concat(" Javascript"))
// 1.25
console.log(challange.repeat(2));


// Exercise lvl 2

// 2.1
const text = 'The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.';
console.log(text);

// 2.2
const quote = 'Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.';

console.log(quote);

// 2.3
//  parseInt()
// Number()
// Plus sign(+)
const numberOne = "10"
const numberTwo = 10
console.log(numberOne === numberTwo)

const numInt = parseInt(numberOne)
console.log(numInt === numberTwo)

// 2.4
const floatNumber = 9.8;
const num2 = 10;
console.log(floatNumber === num2);

var numbers = Math.round(floatNumber);
console.log(numbers === num2);

// 2.5
const control = "Python Jargon"
console.log(control.includes("on"))

// 2.6
const jargon = "I hope this course is not full of jargon";
console.log(jargon.includes("jargon"));

// 2.7
const numRandom = Math.round(Math.random()*101)
console.log(numRandom)

// 2.8
var min = 50;
var max = 100;

var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomNum);

// 2.9
const randomNumber = Math.round(Math.random()*256)
console.log(randomNumber);

// 2.10
const word = "JavaScript"
console.log(word.charAt(Math.round(Math.random()*word.length)));

// 2.11

console.log(`1\t`.repeat(5),"\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125")

// 2.12
const sentence = "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.substr(39,15))


// Exercise lvl 3

// 3.1
const word1 = "Love is the best thing in this world. Some found their love and some are still looking for their love";
var regex = /love/gi;
console.log(word1.match(regex));
console.log(word1.match(regex).length);

// 3.2
const because = "You cannot end a sentence with because because because is a conjunction";
var regex = /because/gi;
console.log(because.match(regex));
console.log(because.match(regex).length);

// 3.3
const sentence1 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

const replace = sentence1.replace(/[^a-zA-Z0-9 ]/g, '');

const mostAppearingWord = (str) => {
    const words = str.split(' ');
    const wordCount = {};

    for (const word of words) {
        if (wordCount[word]) {
            wordCount[word]++;
        } else {
            wordCount[word] = 1;
        }
    }

    let maxCount = 0;
    let mostFrequentWord = '';

    for (const word in wordCount) {
        if (wordCount[word] > maxCount) {
            maxCount = wordCount[word];
            mostFrequentWord = word;
        }
    }

    return mostFrequentWord;
}

console.log(replace);
console.log(mostAppearingWord(replace));

// 3.4
let text = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";

// Maaşı, ikramiye ve kurs gelir bilgilerini çıkartma
let salaryMatches = text.match(/\d+ euro/g);

// Aylık maaşı ve kurs gelirini çıkartma
let monthlySalary = parseInt(salaryMatches[0]);
let monthlyCourseIncome = parseInt(salaryMatches[2]);

// Yıllık ikramiye gelirini çıkartma
let annualBonus = parseInt(salaryMatches[1]);

// Yıllık toplam geliri hesaplama
let annualTotalIncome = (monthlySalary + monthlyCourseIncome) * 12 + annualBonus;

// Sonucu konsola yazdırma
console.log("Kişinin yıllık toplam geliri: " + annualTotalIncome + " euro");





