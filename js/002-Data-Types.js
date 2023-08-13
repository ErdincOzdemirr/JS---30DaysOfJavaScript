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

30 