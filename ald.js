const numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum);

const number = [3, 5, 7, 2, 8];
const largestNumber = Math.max(...number); 
console.log(largestNumber);

function reverseString(str) {
  return str.split('').reverse().join('');
}

const string = "hello";
const reversedString = reverseString(string);
console.log(reversedString);

function isOdd(number) { 
  return number % 2 !== 0;
}

const inputNumber = 5;
if (isOdd(inputNumber)) {
  console.log(`${inputNumber} is odd.`); 
} else {
  console.log(`${inputNumber} is even.`);
}
