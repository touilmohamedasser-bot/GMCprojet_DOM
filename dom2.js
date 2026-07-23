// ======================
// String Functions
// ======================

// Reverse a String
function reverseString(str) {
    return str.split("").reverse().join("");
}


// Count Characters
function countCharacters(str) {
    return str.length;
}


// Capitalize Words
function capitalizeWords(sentence) {
    return sentence
        .split(" ")
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(" ");
}



// ======================
// Array Functions
// ======================

// Find Maximum
function findMax(arr) {
    return Math.max(...arr);
}


// Find Minimum
function findMin(arr) {
    return Math.min(...arr);
}


// Sum of Array
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}


// Filter Array
function filterArray(arr, condition) {
    return arr.filter(condition);
}



// ======================
// Mathematical Functions
// ======================

// Factorial
function factorial(n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}


// Prime Number Check
function isPrime(n) {

    if (n <= 1) return false;

    for (let i = 2; i < n; i++) {

        if (n % i === 0) {
            return false;
        }
    }

    return true;
}


// Fibonacci Sequence
function fibonacci(n) {

    let fib = [0, 1];

    for (let i = 2; i < n; i++) {
        fib.push(fib[i-1] + fib[i-2]);
    }

    return fib.slice(0, n);
}



// ======================
// Tests
// ======================

console.log(reverseString("hello")); 
// olleh

console.log(countCharacters("JavaScript")); 
// 10

console.log(capitalizeWords("javascript is fun")); 
// Javascript Is Fun

console.log(findMax([4, 8, 2, 10])); 
// 10

console.log(findMin([4, 8, 2, 10])); 
// 2

console.log(sumArray([1,2,3,4])); 
// 10

console.log(filterArray([1,2,3,4,5], x => x > 3)); 
// [4,5]

console.log(factorial(5)); 
// 120

console.log(isPrime(7)); 
// true

console.log(fibonacci(8)); 
// [0,1,1,2,3,5,8,13]