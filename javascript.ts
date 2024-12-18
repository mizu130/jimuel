// Reverse a string
const origin = prompt("Please enter a string to reverse:");
const reverses = origin.split('').reverse().join('');
console.log("Reversed string: " + reverses);


// Calculate the sum of numbers
const numbersInput = prompt("Please enter numbers separated by commas:").split(',').map(Number);
const totalSum = numbersInput.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(Total Sum: ${totalSum});


// Determine if a number is odd or even
const numberToCheck = parseInt(prompt("Please enter a number:"));
if (isNaN(numberToCheck)) {
    console.log("Invalid input. Please enter a valid number.");
} else {
    const result = (numberToCheck % 2 === 0) ? "Even" : "Odd";
    console.log(result);
}


// Find the largest number
const largestInput = prompt("Please enter numbers separated by commas:").split(',').map(num => parseInt(num.trim()));
const largestNumber = Math.max(...largestInput);
console.log(${largestNumber});


// Replace numbers with strings based on conditions
const replaceCount = parseInt(prompt("Please enter a number between 1 and 50:"));
if (isNaN(replaceCount) || replaceCount < 1 || replaceCount > 50) {
    console.log("Please enter a valid number between 1 and 50.");
} else {
    const replacedArray = Array.from({ length: replaceCount }, (_, index) => {
        const currentNum = index + 1;
        if (currentNum % 3 === 0) return "marc";
        if (currentNum % 5 === 0) return "alds";
        return currentNum;
    });
    console.log(replacedArray.join(', '));
}

