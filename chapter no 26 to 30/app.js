//Question no 1
//1. Write a program that takes a positive integer from user & display the following in your browser.
//Answer

//takes a positive integer from user
let num = Number(prompt("Enter a positive integer:"));


// show results in browser
document.write(`<h1>--positive integer  -- </h1>  `);
if(num > 0){
document.write(`<h3>Number: ${num} </h3>`);

 //b. round off value of the number 
document.write(`<h3>Round off value:  ${Math.round(num)}</h3>`);

//c. floor value of the number
document.write(`<h3>Floor value:  ${Math.floor(num)} </h3>`);

//d. ceil value of the number
document.write(`<h3>Ceil value:  ${Math.ceil(num)} </h3>`);
}
else{
     alert(`Please enter a positive number!`);
}

//Quesetion no 2
//2. Write a program that takes a negative floating point number from user & display the following in your browser.
//Answer

// take a negative floating point number from user
let number = Number(prompt("Enter a negative floating point number:"));

// check if number is negative
document.write(`<h1>--negative floating point number  -- </h1>  `);
if (number < 0) {
  document.write(`<h3>Number: ${number}</h3>`);
  document.write(`<h3>Round off value: ${Math.round(number)}</h3>`);
  document.write(`<h3>Floor value: ${Math.floor(number)}</h3>`);
  document.write(`<h3>Ceil value: ${Math.ceil(number)}</h3>`);
} else {
  document.write(`<h3>Please enter a negative number!</h3>`);
}

//Question no 3
//3. Write a program that displays the absolute value of a number.

// take user input
let numAbsolute = Number(prompt("Enter any number:"));

// find absolute value
let absoluteValue = Math.abs(numAbsolute);

// display result in browser
document.write(`<h1>--absolute value of a number  -- </h1>  `);
document.write(`<h3>Number: ${numAbsolute}</h3>`);
document.write(`<h3>Absolute value: ${absoluteValue}</h3>`);

//Question no 4
//4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:
//Answer
let dice = Math.floor(Math.random()*6 +1);

// display result in browser
document.write(`<h1>--Random Dice Value  -- </h1>  `);
document.write(`Random Dice Value: ${dice}<br>`);
document.write(`Random Dice Value: ${dice}`);
  
//Question no 5
//5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser
//Answer

let coin = Math.floor(Math.random()*2 +1);

document.write(`<h2>Random Coin Number: ${coin}</h2>`);
if(coin === 1){
     document.write("<h2>Random Coin Value: Heads</h2>");
} else {
  document.write("<h2>Random Coin Value: Tails</h2>");
}

//Question no 6
//6. Write a program that shows a random number between 1 and 100 in your browser.
//Answer

// Generate a random number between 1 and 100
let randomNum = Math.floor(Math.random()*100 +1);

console.log(randomNum);

// Display result in browser
document.write("<h2>Random number between 1 and 100: " + randomNum + "</h2>");

//Question no 7
//7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser.
//Answer

let userWeight = parseFloat(prompt("Enter your weight in kilograms"));

// Show result in browser
document.write("<h2>The weight of user is " +userWeight + " kilograms</h2>");

//Question no 8
//8. Write a program that stores a random secret number from 1 to 10 in a variable.
//Answer

let secretNum = Math.floor(Math.random() * 10) + 1;

//Ask the user to input a number between 1 and 10.
let userNumber = Number(prompt("Enter a number between 1 and 10!"));

//10. If the user input equals the secret number, congratulate the user.
if(userNumber === secretNum){
  alert("🎉 Congratulations! You guessed the secret number!");
}
else{
  alert("❌ Try again! The secret number was " + secretNum)
}


document.write(`<center><h1>-- END -- </h1></center>  `);