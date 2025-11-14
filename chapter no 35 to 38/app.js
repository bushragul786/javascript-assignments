//Question no 1 
//1. Write a function that displays current date & time in your browser.
//Answer
 function currentDateAndTime(){
    let today = new Date() 
document.write(`<h2>current date and time:${today}</h2>`)
 }
currentDateAndTime();

//Question no 2
//2. Write a function that takes first & last name and then it greets the user using his full name.
//Answer

function greetUser() {
   let firstName = prompt("Enter your first name:");
   let lastName = prompt("Enter your last name:");

   let fullName = firstName + " " + lastName;

   document.write("Hello, " + fullName + "! Welcome 😊 <br>");
 }

 greetUser(); // function call


//Question no 3  
//3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.
//Answer


 function addTwoNumbers() {
   let num1 = +prompt("Enter first number:");
   let num2 = +prompt("Enter second number:");

   let sum = num1 + num2;

   return sum;  // returning the result
 }

 let result = addTwoNumbers();  // function call
 document.write(`<h2>the sum is</h2>`)
 document.write("The sum is: " + result);

//Question no 4
//4. Calculator:
//Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.
//Answer

 function calculator(num1, num2, operator) {
   let result;

   if (operator === "+") {
     result = num1 + num2;
   } else if (operator === "-") {
     result = num1 - num2;
   } else if (operator === "*") {
     result = num1 * num2;
   } else if (operator === "/") {
     if (num2 === 0) {
       result = "Error: Division by zero!";
     } else {
       result = num1 / num2;
     }
   } else {
     result = "Invalid operator!";
   }

   return result;
 }

// Get user inputs
 let n1 = +prompt("Enter first number:");
 let n2 = +prompt("Enter second number:");
 let op = prompt("Enter operator (+, -, *, /):");

// Call the function
 let answer = calculator(n1, n2, op);

// Show on browser
 document.write("<h2>Calculator</h2>");
 document.write("Result: " + answer);

//Questiion no 5
//5. Write a function that squares its argument.
//Answer

 function square(num) {
   return num * num;
 }
 let userNum = +prompt("Enter a number:");
 let number = square(userNum);

 document.write("<h2>Square</h2>");
 document.write("Square is: " + number);

//Question no 6
//6. Write a function that computes factorial of a number.
//Answer
function factorial(num){
let result = 1
for(let i = 1;i <= num;i++ ){
    result = result * i;
}
return result;
}
let num = +prompt("Enter a number for factorial");
let ans = factorial(num);

// Show on browser
document.write("<h2>Factorial of a number</h2>");
document.write(`${ans}`); 

//Question no 7
//7. Write a function that take start and end number as inputs & display counting in your browser.
//Answer

function showCounting(start,end){
    document.write("<h2>Start and End num</h2>");
    for( let i = start;i<=end;i++ ){
document.write(i + "<br>")
    }
}
let startNum = +prompt("Enter start number:");
let endNum = +prompt("Enter end number:");

showCounting(startNum, endNum);

//Question no 8
//8. Write a nested function that computes hypotenuse of a right angle triangle.Hypotenuse2 = Base2 + Perpendicular2
//Answer

//Outer function : calculateHypotenuse()
function  calculateHypotenuse(){
    
  // taking inputs from user
  let base = Number(prompt("Enter base:"));
  let perpendicular = Number(prompt("Enter perpendicular:"));

    // Inner function: calculateSquare()
    function  calculateSquare(num){
          return num * num;
    }
      // using Pythagoras theorem
      let hypotenuse = Math.sqrt(
      calculateSquare(base)+calculateSquare(perpendicular));
      document.write(`<h2>The hypotenuse is:</h2>`);
       document.write(`${hypotenuse}`);


       if (base <= 0 || perpendicular <= 0) {
  alert("Base and perpendicular must be positive numbers!");
  return;
}

}

// calling the outer function
calculateHypotenuse();

//Question no 9
//Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables
//Answer

// i. Arguments as value
function calculateArea(width,height){
return width* height;
}
// calling with values
let  area1 = calculateArea(5,10);
 document.write(`<h2>Area (using values):</h2>`);
document.write(`${area1}`);

// ii. Arguments as variables
function calculateArea(width,height){
return width* height
}
let w = 7
let h = 8

let area2 = calculateArea(w,h);
document.write(`<h2>Area (using variables):</h2>`);
document.write(`${area2} <br>`);

//Question no 10
//10. Write a JavaScript function that checks whether a passed string is palindrome or not? A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.
//Answer

 function isPalindrome() {

     let str = prompt("Enter a word or phrase:");

     if (!str) {
         alert("Please enter a valid string!");
         return null; // return null if input invalid
     }

     let cleaned = str.toLowerCase().replace(/ /g, "");
     let reversed = cleaned.split("").reverse().join("");

     if (cleaned === reversed) {
         return `${str} is a palindrome.`;
     } else {
         return `${str} is not a palindrome.`;
     }
 }

// Store the result in a variable
 let palindrome = isPalindrome();

// Display result on the webpage
 if (palindrome !== null) {
     document.write(`<h2>Palindrome Check Result:</h2>`);
     document.write(`<p>${palindrome}</p>`);
 }

//Question no 11
//11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
//EXAMPLE STRING : 'the quick brown fox'
//EXPECTED OUTPUT : 'The Quick Brown Fox'
//Answer
function titleCase(str) {
    // split the string into words
    let words = str.split(" ");

    // loop through each word and capitalize first letter
    for (let i = 0; i < words.length; i++) {
        // check if word is not empty
        if (words[i].length > 0) {
            words[i] = words[i][0].toUpperCase() + words[i].slice(1);
        }
    }

    // join the words back into a string
    return words.join(" ");
}

// Example usage
let exampleString = "the quick brown fox";
let results = titleCase(exampleString);
console.log(results); 
document.write(`<h2>In upper case()</h2>`);
document.write(`${results}<br>`);

//Question no 12
//12. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.EXAMPLE STRING : 'Web Development Tutorial'EXPECTED OUTPUT : 'Development'
//Answer

function findLongestWord(str) {
    // split the string into words
    let words = str.split(" ");

    // assume first word is longest
    let longest = words[0];

    // loop through all words
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }

    return longest;
}
let exampleStr = "i  love javascript";
let final = findLongestWord(exampleStr);

console.log(final);  
document.write(`<h2>Example string:</h2>`);
document.write(`${final}<br>`);

//Question no 13
//13. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.Sample arguments : 'JSResourceS.com', 'o'
//Answer

function countOccurrences(str, letter) {
    let count = 0;

    // loop through the string
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }

    return count;
}
let counts = countOccurrences("JSResourceS.com", "o");
console.log(counts); 
document.write(`<h2>number of occurrences of the specified letter within the string:</h2>`);
document.write(`${counts}`);

//Question no 14
//14. The Geometrizer
//Answer

//Create a function called calcCircumference:
function calcCircumference(radius){
    let Circumference = 2*Math.PI*radius
    document.write(`<h2>The circumference is:</h2>`);
    document.write(`${Circumference}`);
}
//Create a function called calcArea:
function  calcArea(radius){
    let area = Math.PI*radius*radius
    document.write(`<h2>The Area is:</h2>`);
  document.write(`${area}`);
}
calcCircumference(5);
calcArea(5);


document.write(`<center><h1>-- END -- </h1></center>  `);