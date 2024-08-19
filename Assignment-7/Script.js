// Q1
/*Ans:JavaScript is a high-level, versatile programming language that is widely used in web development. 
It enables developers to create interactive and dynamic web pages by manipulating the Document Object 
Model (DOM), handling events, and implementing client-side logic. 
JavaScript can be used for both front-end and back-end development, making it an essential tool for creating modern web applications.
*/

// Variables and Types
let userAge = 25;
let userName = "Alice";

console.log("User's Name:", userName);
console.log("User's Age:", userAge);

// Operations
let num1 = 10;
let num2 = 5;

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);

// Data Types
let str = "Hello, World!";
let num = 42;
let bool = true;
let arr = [1, 2, 3, 4, 5];

console.log("String:", str);
console.log("Number:", num);
console.log("Boolean:", bool);
console.log("Array:", arr);

// Functions in JavaScript
function greetUser(name) {
    return "Hello, " + name + "!";
}

console.log(greetUser("Alice"));

// if Else in JavaScript
let temperature = 32;

if (temperature > 30) {
    console.log("It's hot outside.");
} else {
    console.log("It's cool outside.");
}

// FOR LOOP
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Loose vs Strict Equality
/*10. Loose vs Strict Equality
Loose Equality (==):
Loose equality checks if two values are equal, but it allows type coercion, meaning it converts the values to the same type before comparing them. For example:
*/
let looseEqual = (5 == "5");
//


/*Strict Equality (===):
Strict equality checks if two values are equal without performing any type conversion. It compares both the value and the type. For example:
*/ 

let strictEqual = (5 === "5");

console.log("Loose Equality (5 == '5'):", looseEqual);
console.log("Strict Equality (5 === '5'):", strictEqual);
