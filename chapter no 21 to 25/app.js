//Question no 1
//1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName.
//  Greet the user using his full name.
//Answer

//inputs for first and last name using prompt
// let firstName = prompt("Enter your first  name");
// let lastName = prompt("Enter your last name");

//merge them in a new variable
// let fullName = firstName + " " + lastName;

// alert("Hello " + fullName + "! Welcome!😊");

//Question no 2
//Answer

// // take user input
// let mobileModel = prompt("Enter your favourite mobile phone model:");

 //Show in browser
// document.write(`Your  favourite mobile Model is ${mobileModel} <br>`);
// document.write(`Lenght of your input is:${mobileModel.length} <br><br>`);



//Question no 3
//3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser
//Answer

let country = "Pakistani";

// find index of letter "n"
let index = country.indexOf("n")

// display result
 document.write(`<strong>String:</strong>${country} <br>`);
 document.write(`Index of n: ${index} <br><br>`)

//Question no 4
//4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.
//Answer

let word = "Hello World";

// find last index of letter "l"
let lastIndex = word.lastIndexOf("l");

// display result
document.write(`<strong>String:</strong>${word} <br>`);
 document.write(`Last Index of l: ${lastIndex} <br><br>`);

//Question no 5
//5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.
//Answer

let text = "Pakistani";

//find the character at 3rd index
let char = text.charAt(3);

// display result
document.write(`<strong>String:</strong>${text} <br>`);
 document.write(`Character at Index 3: ${char} <br><br>`);

//Question no 6
//6. Repeat Q1 using string concat() method.
//Answer

//inputs for first and last name using prompt
// let firstName1 = prompt("Enter your first  name");
// let lastName2 = prompt("Enter your last name");

// Merge them using string concat() method.
// let fullName12 = firstName1.concat ("", lastName2 ); 

// alert("Hello " + fullName12 + "! Welcome! 😊"  );

//Question no 7
//7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.
//Answer

let city = "Hyderabad";

let newCity = city.replace("Hyder" , "Islam" );

document.write(`City : ${city} <br>`);
document.write(`After replacment :${newCity} <br><br>`);

//Question no 8
//8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
//Anwer

 let message = "Ali and Sami are best friends. They play cricket and football together.";

 let newMessage = message.replace(/and/g, "&");
 document.write(`<h2>${message}</h2>`);
 document.write(`After replacement of "and" : ${newMessage} <br> <br>`);

 //Question no 9
 //9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.
 //Answer

 // string value
 let strNumber = "472"; 

// convert string to number
 let num = Number(strNumber);

 // display values and types
 document.write(`Value: ${strNumber} <br>`);
 document.write(`Type: ${typeof strNumber} <br>`);
 document.write(`Value: ${num} <br>`);
 document.write(`Type: ${typeof num} <br>`);
 
//Question no 10
//10. Write a program that takes user input. Convert and show the input in capital letters.
//Answer

// take user input
let userInput = prompt("Enter any word:");

// convert to capital letters
let upperCaseInput = userInput.toUpperCase();

// display result
document.write("User Input: " + userInput + "<br>");
document.write("Upper Case: " + upperCaseInput  + "<br>" );

//Question no 11
//11. Write a program that takes user input. Convert and show the input in title case.
//Answer

// take user input
let user = prompt("Enter any word:");

// convert to title case (first letter capital, rest small)
let titleCase = user.charAt(0).toUpperCase() + user.slice(1).toLowerCase();

// display result
document.write("User Input: " + userInput + "<br>");
document.write("Title Case: " + titleCase +"<br>");

//Question no 12
//12. Write a program that converts the variable num tostring.var num = 35.36 ;Remove the dot to display “3536” display in your browser.
//Answer

let number = 35.36;

// convert number to string
let numString = number.toString();

// remove the dot
let result = numString.replace(".", "" );


// display result
document.write("Number: " + number + "<br>");
document.write("Result: " + result + "<br>");

//Question no 13
// 13. Write a program to take user input and store username in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .
//Answer

let username = prompt("Enter your user name");
let isValid = true;

for (let i = 0 ; i < username.length ; i++){
let charCode = username.charCodeAt(i); // get ASCII code

 // check if it matches any invalid symbol code
  if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
    isValid = false;
    break; // stop checking further
  }
}

// display result
if (!isValid) {
  alert("Please enter a valid username without special symbols [@ . , !]");
} else {
  alert("Username saved successfully: " + username);
}

//Question no 14
//Answer

let A = ["cake", "apple pie", "cookie", "chips", "patties"];

// take user input
let Input = prompt("Welcome to ABC Bakery! What do you want to order?");

// convert both user input and array items to lowercase for case-insensitive comparison
let item = Input.toLowerCase();

// check if item exists in the array
let isFound = false

let indexNumber = -1; // store index if found


for(let i = 0 ; i < A.length ; i++){
if(A[i].toLowerCase() === item){
isFound = true
indexNumber = i
break;
    }
}
// show result
if (isFound) {
  alert(Input + " is available at index " + indexNumber + " in our bakery.");
} else {
  alert("We are sorry, " + Input + " is not available in our bakery.");
}

//Question no 15
//Answer

//take password as an input from user
let password = prompt("Enter your password");

// Check if password is empty
if(!password){
   alert("Please enter your password!");
}
// Check if password length is at least 6 characters
 else if(password.length < 6){
  alert("Password must be at least 6 characters long.");
}
//  check if first character is a number
else if (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57 ){
    alert("Password cannot start with a number.");
}

// check if it contains both letters and numbers
else {
  let hasLetter = false;
  let hasNumber = false;

for(let i = 0 ;i < password.length ; i++){
  let code = password.charCodeAt(i);


    // A–Z → 65–90
    // a–z → 97–122
if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
      hasLetter = true;
    }
     // 0–9 → 48–57
 else if (code >= 48 && code <= 57 ){
  hasNumber = true
}
}
// Step 5: final validation
if( hasLetter && hasNumber){
    alert("Your password is valid!");
}

else{
alert("Password must contain both alphabets and numbers.");
}
}