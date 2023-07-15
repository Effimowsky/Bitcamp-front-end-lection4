// 59.დაწერეთ ფუნქცია სახელად sumDigits, რომელიც არგუმენტად იღებს რიცხვს და აბრუნებს მისი ციფრების ჯამს.
// Write a function called sumDigits that takes a number as an argument and returns the sum of its digits.

// function sumDigits(number) {
//   let sum = 0;
//   let numString = Math.abs(number).toString();

//   for (let i = 0; i < numString.length; i++) {
//     sum += parseInt(numString.charAt(i));
//   }

//   return sum;
// }
// console.log(sumDigits(123));
// console.log(sumDigits(-456));
// console.log(sumDigits(7890));

// 60.დაწერეთ ფუნქცია სახელად countBs, რომელიც იღებს სტრიქონს თავის ერთადერთ არგუმენტად და აბრუნებს სტრიქონში
// დიდი "B" სიმბოლოების რაოდენობას.

// Write a function called countBs that takes a string as its only argument and returns the number of uppercase "B"
// characters in the string.

// function countBs(str) {
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str.charAt(i) === "B") {
//       count++;
//     }
//   }

//   return count;
// }
// console.log(countBs("BBC"));
// console.log(countBs("Banana"));
// console.log(countBs("Basketball"));

// 61.დაწერეთ ფუნქცია სახელად min, რომელიც იღებს ორ არგუმენტს და აბრუნებს მათ მინიმუმს.
// Write a function called min that takes two arguments and returns their minimum.

// function min(a, b) {
//   return a < b ? a : b;
// }

// console.log(min(3, 5));
// console.log(min(-1, 11));
// console.log(min(10, 10));

// 62.დაწერეთ ფუნქცია generateRandomNumber, რომელიც იღებს მინიმალურ და მაქსიმალურ რიცხვს არგუმენტებად და
// აბრუნებს შემთხვევით რიცხვს მინიმალურ და მაქსიმალურ მნიშვნელობებს შორის.

// Write a function called generateRandomNumber that takes a minimum number and a maximum number as arguments and
// returns a random number between the minimum and maximum values (inclusive).

// function generateRandomNumber(min, max) {
//   let range = max - min;
//   let random = Math.floor(Math.random() * (range + 1)) + min;
//   return random;
// }

// console.log(generateRandomNumber(1, 5));
// console.log(generateRandomNumber(5, 10));
// console.log(generateRandomNumber(10, 15));

// 63.დაწერეთ ფუნქცია სახელწოდებით capitalizeWords, რომელიც იღებს წინადადებას (სტრიქონს) არგუმენტად და
// აბრუნებს ახალ წინადადებას, სადაც თითოეული სიტყვის პირველი ასო დიდია.

// Write a function called capitalizeWords that takes a sentence (string) as an argument and
// returns a new sentence where the first letter of each word is capitalized.

// function capitalizeWords(sentence) {
//   let capitalizedSentence = "";
//   let capitalizeNextLetter = true;

//   for (let i = 0; i < sentence.length; i++) {
//     const char = sentence.charAt(i);

//     if (char === " ") {
//       capitalizeNextLetter = true;
//       capitalizedSentence += " ";
//     } else {
//       if (capitalizeNextLetter) {
//         capitalizedSentence += char.toUpperCase();
//         capitalizeNextLetter = false;
//       } else {
//         capitalizedSentence += char;
//       }
//     }
//   }
//   return capitalizedSentence;
// }

// console.log(capitalizeWords("hello, my name is temo"));
