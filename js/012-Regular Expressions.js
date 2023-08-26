// // regex 1

// 1- regex constructor
// let str = "Ben 30 yaşındayım ve 1993 yilinda dogdum";
// let userName = "Erdinc Ozdemir";
// let pattern = "love";
// let flag = "gi";
// let regEx = new RegExp(pattern, flag);

// let regEX2 = /love/gi;
// console.log(regEX2);
// By Erdinc
// aranan şey regex // biçiminde yazılır. test sadece olup olmadığını kontrol eder ve true ve false döndürür.
// match ise index bilgileri dahil döndürür.
// search ise aranan regex in index inin çevirir.
// let word = /salak/gi;
// let comment = prompt("yaz");
// if (word.test(comment)) {
//   alert("Hayır sen salaksin");
// }

// let string = "I love javascript and ı love Hava";
// console.log(string.match(/love/gi));

// const txt =
//   "Python is the most beautiful language that a human begin has ever created.\
// I recommend python for a first programming language";

// matchReplaced = txt.replace(/Python/gi, "JavaScript");
// console.log(matchReplaced);

// const txt2 =
//   "%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
// T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
// p%e%o%ple.\
// I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
// D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.";
// console.log(txt2);
// replace ile karakter değişimi yapılır.
// matches = txt2.replace(/%/g, "");
// console.log(matches);

// // let str = "Ben 30 yaşındayım ve 1993 yilinda dogdum. I love my wife";

// // console.log(str.match(/[0-9]/g));

// // []: A set of characters
// // [a-c] means, a or b or c
// // [a-z] means, any letter a to z
// // [A-Z] means, any character A to Z
// // [0-3] means, 0 or 1 or 2 or 3
// // [0-9] means any number 0 to 9
// // [A-Za-z0-9] any character which is a to z, A to Z, 0 to 9

// // \: uses to escape special characters
// // sadece sayıları içerir//
// // \d mean: match where the string contains digits (numbers from 0-9)
// // console.log(str.match(/\d/g));
// // \D mean: match where the string does not contain digits . Sayı hariç hepsini döndürür.
// // console.log(str.match(/\D/g));

// // . : any character except new line character(\n)

// // ^: starts with
// // r'^substring' eg r'^love', a sentence which starts with a word love.
// // love ile başlayanları gösterir.
// const txt7 = "This regular expression example was made in December 6,  2019.";
// const pattern7 = /^This/; // ^ means starts with
// const matches7 = txt.match(pattern7);
// console.log(matches7); // ['This']
// // r'[^abc] mean not a, not b, not c.
// //köşeli parantez aldığında olumsuz olur ve abc ile baaşlamayanlar gösterilmez.
// const txt8 = "This regular expression example was made in December 6,  2019.";
// const pattern8 = /[^A-Za-z,. ]+/g; // ^ in set character means negation, not A to Z, not a to z, no space, no comma no period
// const matches8 = txt8.match(pattern8);
// console.log(matches8); // ["6", "2019"]

// // $: ends with
// // r'substring$' eg r'love$', sentence ends with a word love

// // *: zero or more times
// // r'[a]*' means a optional or it can occur many times.

// // +: one or more times
// // r'[a]+' means at least once or more times

// // ?: zero or one times
// // r'[a]?' means zero times or once

// // \b: word bounder, matches with the beginning or ending of a word

// // {3}: Exactly 3 characters

// // {3,}: At least 3 characters

// // {3,8}: 3 to 8 characters

// // |: Either or
// // r'apple|banana' mean either of an apple or a banana

// // (): Capture and grou

// let str =
//   "Ben 30 yaşındayım ve 1993 yilinda dogdum. 123 sayısını seviyorum. I love my wife";
// console.log(str.match(/\d+/g));
// console.log("{2} basamaklı grupla : " + str.match(/\d{2}/g));
// console.log("Sadece {2} basamaklıları grupla : " + str.match(/\b\d{2}\b/g));
// console.log(
//   "Sadece {2,4} 2 3 4 basamaklıları grupla : " + str.match(/\b\d{2,4}\b/g)
// );

// const pattern3 = /[Aa]pple|[Bb]anana/g; // this square bracket mean either A or a
// const txt3 =
//   "Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doct or far far away. Banana is easy to eat too.";
// const matches3 = txt3.match(pattern3);

// console.log(
//   "Apple ve bananaları büyük küçük harflere takılmadan yazdırır: " + matches3
// );

// let name3 = "Erdinc";
// console.log("uc veya nc ile bitenleri kabul et: " + /[u|n]c$/.test(name3));
// console.log(
//   "ac ile bitedebilir bitmezse c ile biten kabul: " + /a?c$/.test(name3)
// );

// const txt4 =
//   "I am not sure if there is a convention how to write the word e-mail.\
// Some people write it email others may write it as Email or E-mail.";
// const pattern4 = /[Ee]-?mail/g; // ? means optional
// matches4 = txt4.match(pattern4);

// console.log(matches4); // ["e-mail", "email", "Email", "E-mail"]

// let pattern5 = /^[A-Z][a-z]{3,12}$/;
// let name5 = "Erdinc";
// let result5 = pattern5.test(name5);

// console.log(result5); // true

// function is_valid_variable(str) {
//   console.log(/^[a-z_]+$/i.test(str));
// }
// is_valid_variable("first_name"); // True
// is_valid_variable("first-name"); // False
// is_valid_variable("1first_name"); // False
// is_valid_variable("firstname"); //True
